-- Add subscription-related fields to profiles table
ALTER TABLE profiles 
  ADD COLUMN IF NOT EXISTS plan TEXT CHECK (plan IN ('starter', 'pro', 'elite')),
  ADD COLUMN IF NOT EXISTS subscription_status TEXT,
  ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT UNIQUE,
  ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT,
  ADD COLUMN IF NOT EXISTS current_period_end TIMESTAMPTZ;

-- Create index on stripe_customer_id for faster lookups
CREATE INDEX IF NOT EXISTS profiles_stripe_customer_id_idx ON profiles(stripe_customer_id);

-- Create index on stripe_subscription_id for faster lookups  
CREATE INDEX IF NOT EXISTS profiles_stripe_subscription_id_idx ON profiles(stripe_subscription_id);

-- Note: The existing subscription_tier column can coexist with the new plan column
-- The plan column will be the source of truth for Stripe subscriptions
-- You may want to migrate data or deprecate subscription_tier later
