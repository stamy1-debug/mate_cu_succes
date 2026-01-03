import Stripe from 'stripe';

let stripeInstance: Stripe | null = null;

function getStripeInstance(): Stripe {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
    }
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-02-24.acacia',
      typescript: true,
    });
  }
  return stripeInstance;
}

// Export getter function to delay initialization
export { getStripeInstance as stripe };

// Map plan IDs to Stripe price IDs from environment variables
export const PLAN_PRICE_IDS = {
  starter: process.env.STRIPE_PRICE_ID_STARTER || '',
  pro: process.env.STRIPE_PRICE_ID_PRO || '',
  elite: process.env.STRIPE_PRICE_ID_ELITE || '',
} as const;

export type PlanId = keyof typeof PLAN_PRICE_IDS;

export function getPriceIdForPlan(planId: string): string | null {
  if (planId in PLAN_PRICE_IDS) {
    const priceId = PLAN_PRICE_IDS[planId as PlanId];
    return priceId || null;
  }
  return null;
}
