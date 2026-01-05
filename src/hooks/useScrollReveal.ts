'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface UseScrollRevealOptions {
  duration?: number;
  delay?: number;
  stagger?: number;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { duration = 0.6, delay = 0, stagger = 0 } = options;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Set final state immediately
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    // Check if mobile
    const isMobile = window.innerWidth < 768;
    const adjustedDuration = isMobile ? duration * 0.7 : duration;

    // Initial state
    if (stagger > 0) {
      // Set initial state for children when using stagger
      const children = Array.from(element.children) as HTMLElement[];
      gsap.set(children, { opacity: 0, y: 40 });
      
      // Animation
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(children, {
            opacity: 1,
            y: 0,
            duration: adjustedDuration,
            delay: delay,
            stagger: stagger,
            ease: 'power2.out',
          });
        },
        once: true,
      });

      return () => {
        trigger.kill();
      };
    } else {
      // Set initial state for single element
      gsap.set(element, { opacity: 0, y: 40 });

      // Animation
      const trigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: adjustedDuration,
            delay: delay,
            ease: 'power2.out',
          });
        },
        once: true,
      });

      return () => {
        trigger.kill();
      };
    }
  }, [duration, delay, stagger]);

  return ref;
}
