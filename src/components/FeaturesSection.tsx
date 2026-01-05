'use client';

import { BookOpen, Users, Trophy } from 'lucide-react';
import FeatureCardAnimated from './FeatureCardAnimated';

export default function FeaturesSection() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: 'Materiale complete',
      description: 'Cursuri video, exerciții practice și teste de evaluare pentru fiecare temă',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Sesiuni live',
      description: 'Întâlniri săptămânale cu profesori experimentați și grupe de studiu',
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: 'Rezultate garantate',
      description: 'Metode dovedite și strategii eficiente pentru maximizarea scorului',
    },
  ];

  return (
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
          {features.map((feature, index) => (
            <FeatureCardAnimated
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
