'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatsSection() {
  const containerRef = useScrollReveal({ stagger: 0.1 });
  
  const stats: StatItem[] = [
    { value: 500, suffix: '+', label: 'Elevi activi' },
    { value: 1000, suffix: '+', label: 'Lecții video' },
    { value: 50, suffix: '+', label: 'Profesori experimentați' },
    { value: 95, suffix: '%', label: 'Rata de succes' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-serif sm:text-4xl text-primary-foreground">
            Rezultate dovedite
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Cifrele vorbesc de la sine
          </p>
        </div>

        <div 
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, suffix = '', label }: StatItem) {
  const countRef = useCounterAnimation({ target: value, suffix, duration: 2 });

  return (
    <div className="text-center">
      <div
        ref={countRef as React.RefObject<HTMLDivElement>}
        className="text-4xl font-bold text-primary-foreground font-serif sm:text-5xl"
      >
        0{suffix}
      </div>
      <p className="mt-2 text-sm text-primary-foreground/90 sm:text-base">
        {label}
      </p>
    </div>
  );
}
