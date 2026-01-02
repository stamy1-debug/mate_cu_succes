"use client";

import { motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import { PRICING_PLANS } from "@/lib/plans";
import { BookOpen, Clock, Target, CheckCircle } from "lucide-react";

export default function PregatireENPage() {
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
            Pregătire pentru Evaluarea Națională
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Program complet de pregătire pentru examenul de matematică. 
            Metodologie dovedită și rezultate excepționale.
          </p>
        </motion.div>

        {/* Program Overview */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold font-serif text-center mb-12">
            Ce include programul nostru?
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
              <h3 className="text-lg font-semibold mb-2">Teorie completă</h3>
              <p className="text-sm text-muted-foreground">
                Toate capitolele din programa școlară explicate clar și concis
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
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Exerciții practice</h3>
              <p className="text-sm text-muted-foreground">
                Mii de exerciții organizate pe dificultate și categorii
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
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Teste cronometrate</h3>
              <p className="text-sm text-muted-foreground">
                Simulări complete de examen în condiții reale
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card border"
            >
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Feedback detaliat</h3>
              <p className="text-sm text-muted-foreground">
                Analiză și explicații pentru fiecare exercițiu rezolvat
              </p>
            </motion.div>
          </div>
        </div>

        {/* Topics Covered */}
        <div className="mb-20 bg-muted/50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold font-serif text-center mb-8">
            Capitole acoperite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Mulțimi și operații cu mulțimi',
              'Numere naturale și operații',
              'Numere întregi și raționale',
              'Rapoarte și proporții',
              'Procente și aplicații',
              'Ecuații și inecuații',
              'Funcții - noțiuni fundamentale',
              'Geometrie plană',
              'Geometrie în spațiu',
              'Elemente de statistică',
              'Probabilități',
              'Probleme de sinteză',
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-background p-4 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium">{topic}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div>
          <h2 className="text-3xl font-bold font-serif text-center mb-12">
            Alege planul tău de pregătire
          </h2>
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
        </div>
      </div>
    </div>
  );
}
