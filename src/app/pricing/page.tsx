"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import { PRICING_PLANS } from "@/lib/plans";

export default function PricingPage() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePlanSelect = async (planId: string) => {
    setSelectedPlan(planId);
    setError(null);

    // If user is not authenticated, redirect to sign-up
    if (!isLoaded || !isSignedIn) {
      router.push('/sign-up');
      return;
    }

    // If authenticated, create checkout session
    setLoading(true);
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ planId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      console.error('Error creating checkout:', err);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight font-serif sm:text-5xl lg:text-6xl">
            Planuri și Prețuri
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Alege abonamentul care se potrivește cel mai bine nevoilor tale de pregătire. 
            Poți schimba sau anula abonamentul oricând.
          </p>
          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
              {error}
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard 
                plan={plan} 
                onSelect={handlePlanSelect}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold font-serif mb-6">
            Întrebări frecvente
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Pot schimba planul oricând?</h3>
              <p className="text-muted-foreground">
                Da, poți face upgrade sau downgrade oricând dorești. Diferența de preț va fi 
                calculată proporțional.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Ce se întâmplă dacă vreau să anulez?</h3>
              <p className="text-muted-foreground">
                Poți anula abonamentul oricând din contul tău. Vei avea acces la materiale 
                până la finalul perioadei plătite.
              </p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Există reduceri pentru studenți?</h3>
              <p className="text-muted-foreground">
                Da, oferim reduceri speciale pentru grup. Contactează-ne pentru mai multe detalii.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
