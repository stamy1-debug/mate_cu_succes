import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';
import { supabaseAdmin, ProfileUpdate } from '@/lib/supabase-admin';

export const runtime = 'nodejs';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

async function updateUserProfile(clerkUserId: string, updates: ProfileUpdate) {
  try {
    const { data, error } = await supabaseAdmin()
      .from('profiles')
      .update(updates)
      .eq('user_id', clerkUserId)
      .select()
      .single();

    if (error) {
      console.error('Error updating profile:', error);
      
      // If profile doesn't exist, try to create it
      if (error.code === 'PGRST116') {
        const { data: newData, error: insertError } = await supabaseAdmin()
          .from('profiles')
          .insert({ user_id: clerkUserId, ...updates })
          .select()
          .single();
        
        if (insertError) {
          console.error('Error creating profile:', insertError);
          throw insertError;
        }
        return newData;
      }
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Failed to update user profile:', error);
    throw error;
  }
}

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
  const clerkUserId = session.metadata?.clerkUserId;
  const planId = session.metadata?.planId;

  if (!clerkUserId) {
    console.error('No clerkUserId in session metadata');
    return;
  }

  if (!planId || !['starter', 'pro', 'elite'].includes(planId)) {
    console.error('Invalid or missing planId in session metadata');
    return;
  }

  const customerId = session.customer as string;
  const subscriptionId = session.subscription as string;

  // Fetch subscription to get current period end
  let currentPeriodEnd: string | null = null;
  if (subscriptionId) {
    try {
      const subscription = await stripe().subscriptions.retrieve(subscriptionId);
      currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();
    } catch (error) {
      console.error('Error fetching subscription:', error);
    }
  }

  await updateUserProfile(clerkUserId, {
    plan: planId as 'starter' | 'pro' | 'elite',
    subscription_status: 'active',
    stripe_customer_id: customerId,
    stripe_subscription_id: subscriptionId,
    current_period_end: currentPeriodEnd,
  });
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const clerkUserId = subscription.metadata?.clerkUserId;
  const planId = subscription.metadata?.planId;

  if (!clerkUserId) {
    console.error('No clerkUserId in subscription metadata');
    return;
  }

  const currentPeriodEnd = new Date(subscription.current_period_end * 1000).toISOString();

  const updates: ProfileUpdate = {
    subscription_status: subscription.status,
    stripe_subscription_id: subscription.id,
    current_period_end: currentPeriodEnd,
  };

  // Only update plan if it's provided in metadata
  if (planId && ['starter', 'pro', 'elite'].includes(planId)) {
    updates.plan = planId as 'starter' | 'pro' | 'elite';
  }

  await updateUserProfile(clerkUserId, updates);
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const clerkUserId = subscription.metadata?.clerkUserId;

  if (!clerkUserId) {
    console.error('No clerkUserId in subscription metadata');
    return;
  }

  await updateUserProfile(clerkUserId, {
    subscription_status: 'canceled',
    stripe_subscription_id: subscription.id,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured');
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    // Verify webhook signature
    event = stripe().webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  try {
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutComplete(event.data.object as Stripe.Checkout.Session);
        break;

      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
