import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseAdminInstance: SupabaseClient | null = null;

function getSupabaseAdmin(): SupabaseClient {
  if (!supabaseAdminInstance) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

    if (!supabaseUrl) {
      throw new Error('NEXT_PUBLIC_SUPABASE_URL is not set in environment variables');
    }

    if (!supabaseServiceRoleKey) {
      throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set in environment variables');
    }

    // Service role client bypasses Row Level Security (RLS)
    // Use ONLY on the server for admin operations like webhooks
    supabaseAdminInstance = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
  }
  return supabaseAdminInstance;
}

// Export getter function to delay initialization
export { getSupabaseAdmin as supabaseAdmin };

export type ProfileUpdate = {
  plan?: 'starter' | 'pro' | 'elite' | null;
  subscription_status?: string | null;
  stripe_customer_id?: string | null;
  stripe_subscription_id?: string | null;
  current_period_end?: string | null;
};
