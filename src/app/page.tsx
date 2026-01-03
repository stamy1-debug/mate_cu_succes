"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PricingCard from "@/components/PricingCard";
import { PRICING_PLANS } from "@/lib/plans";
import { motion } from "framer-motion";
import HeroAnimated from "@/components/HeroAnimated";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroAnimated />

      {/* Features Section */}
      <FeaturesSection />

      {/* Statistics Section */}
      <StatsSection />

      {/* Pricing Preview Section */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight font-serif sm:text-4xl">
              Alege planul potrivit pentru tine
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Abonamente flexibile adaptate nevoilor tale
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
            {PRICING_PLANS.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">
                Vezi detalii complete
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-primary px-6 py-16 text-center shadow-lg sm:px-12 lg:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground font-serif sm:text-4xl">
              Începe-ți pregătirea astăzi
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90">
              Alătură-te sute de elevi care și-au îmbunătățit rezultatele cu Mate cu Succes
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/sign-up">
                  Creează cont gratuit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
