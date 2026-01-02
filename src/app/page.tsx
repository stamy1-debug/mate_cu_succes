"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import PricingCard from "@/components/PricingCard";
import { PRICING_PLANS } from "@/lib/plans";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight font-serif sm:text-6xl lg:text-7xl">
              Pregătește-te cu succes pentru
              <span className="text-primary block mt-2">Evaluarea Națională</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Platformă educațională premium pentru matematică. Materiale complete, 
              sesiuni live, și suport personalizat pentru succesul tău.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/pricing">
                  Vezi abonamentele
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/materiale-gratuite">
                  Materiale gratuite
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight font-serif sm:text-4xl">
              De ce să alegi Mate cu Succes?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Totul de care ai nevoie pentru o pregătire completă
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card border"
            >
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Materiale complete</h3>
              <p className="text-muted-foreground">
                Cursuri video, exerciții practice și teste de evaluare pentru fiecare temă
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card border"
            >
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sesiuni live</h3>
              <p className="text-muted-foreground">
                Întâlniri săptămânale cu profesori experimentați și grupe de studiu
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card border"
            >
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rezultate garantate</h3>
              <p className="text-muted-foreground">
                Metode dovedite și strategii eficiente pentru maximizarea scorului
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
