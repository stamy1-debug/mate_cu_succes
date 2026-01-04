'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const headline = headlineRef.current;
    const button = buttonRef.current;

    if (!headline || !button) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set([headline, button], { opacity: 1, y: 0 });
      return;
    }

    // Check if mobile
    const isMobile = window.innerWidth < 768;
    const duration = isMobile ? 0.42 : 0.6;

    // Initial state
    gsap.set([headline, button], { opacity: 0, y: 30 });

    // Animation
    const trigger = ScrollTrigger.create({
      trigger: headline,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(headline, {
          opacity: 1,
          y: 0,
          duration: duration,
          ease: 'power2.out',
        });
        gsap.to(button, {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: 0.15,
          ease: 'power2.out',
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section className="py-24 lg:py-40 bg-pastel-noise">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1800px' }}>
        <div className="text-center">
          <h2
            ref={headlineRef}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight"
          >
            Pregătește-te pentru nota pe care ți-o dorești
          </h2>
          <div ref={buttonRef} className="mt-10 flex items-center justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-lg h-auto shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href="/sign-up">
                Începe acum gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
