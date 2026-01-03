import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { stripe, getPriceIdForPlan } from '@/lib/stripe';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    // Require authentication
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized - Please sign in to continue' },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await req.json();
    const { planId } = body;

    // Validate planId
    if (!planId || typeof planId !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request - planId is required' },
        { status: 400 }
      );
    }

    // Get Stripe price ID for the plan
    const priceId = getPriceIdForPlan(planId);
    
    if (!priceId) {
      return NextResponse.json(
        { error: `Invalid plan: ${planId}. Must be one of: starter, pro, elite` },
        { status: 400 }
      );
    }

    // Get origin for success/cancel URLs
    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    // Create Stripe Checkout Session
    const session = await stripe().checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/contul-meu?checkout=success`,
      cancel_url: `${origin}/pricing?checkout=cancel`,
      metadata: {
        planId,
        clerkUserId: userId,
      },
      subscription_data: {
        metadata: {
          planId,
          clerkUserId: userId,
        },
      },
    });

    // Return the checkout URL
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
