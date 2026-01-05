"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import { PRICING_PLANS } from "@/lib/plans";

export default function PricingPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    // TODO: Navigate to checkout or subscription flow when implemented
    router.push('/sign-up');
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
