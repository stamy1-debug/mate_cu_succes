'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface UseCounterAnimationOptions {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function useCounterAnimation(options: UseCounterAnimationOptions) {
  const { target, duration = 2, prefix = '', suffix = '' } = options;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const element = ref.current;
    if (!element) return;

    // Set initial text content
    element.textContent = `${prefix}0${suffix}`;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Set final value immediately
      element.textContent = `${prefix}${target.toLocaleString()}${suffix}`;
      return;
    }

    // Check if mobile
    const isMobile = window.innerWidth < 768;
    const adjustedDuration = isMobile ? duration * 0.7 : duration;

    const counter = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(counter, {
          value: target,
          duration: adjustedDuration,
          ease: 'power2.out',
          onUpdate: () => {
            const formattedValue = Math.floor(counter.value).toLocaleString();
            element.textContent = `${prefix}${formattedValue}${suffix}`;
          },
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [target, duration, prefix, suffix]);

  return ref;
}
