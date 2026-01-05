'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

export default function HeroAnimated() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const container = containerRef.current;
    if (!container || !titleRef.current || !subtitleRef.current || !ctaRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Set all elements to final state immediately
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
        scale: 1,
      });
      return;
    }

    // Check if mobile
    const isMobile = window.innerWidth < 768;

    // Set initial state
    gsap.set(titleRef.current, { opacity: 0, y: 40 });
    gsap.set(subtitleRef.current, { opacity: 0, y: 40 });
    gsap.set(ctaRef.current, { opacity: 0, y: 40 });

    // Create timeline
    const tl = gsap.timeline({ delay: 0.2 });

    // Animate title
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: isMobile ? 0.5 : 0.7,
      ease: 'power2.out',
    });

    // Animate subtitle with overlap
    tl.to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: isMobile ? 0.4 : 0.6,
      ease: 'power2.out',
    }, '-=0.3');

    // Animate CTA buttons with overlap
    tl.to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: isMobile ? 0.4 : 0.5,
      ease: 'power2.out',
    }, '-=0.2');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-20 lg:py-32" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 ref={titleRef} className="text-4xl font-bold tracking-tight font-serif sm:text-6xl lg:text-7xl">
            Pregătește-te cu succes pentru
            <span className="text-primary block mt-2">Evaluarea Națională</span>
          </h1>
          <p ref={subtitleRef} className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Platformă educațională premium pentru matematică. Materiale complete,
            sesiuni live, și suport personalizat pentru succesul tău.
          </p>
          <div ref={ctaRef} className="mt-10 flex items-center justify-center gap-4">
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
        </div>
      </div>
    </section>
  );
}
