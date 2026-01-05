'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export interface AnimationStep {
  target: string;
  props: gsap.TweenVars;
  duration: number;
}

export function useSequenceAnimation(steps: AnimationStep[]) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const container = ref.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Set all elements to final state immediately
      steps.forEach(step => {
        const elements = container.querySelectorAll(step.target);
        gsap.set(elements, step.props);
      });
      return;
    }

    // Check if mobile
    const isMobile = window.innerWidth < 768;

    // Create timeline
    const tl = gsap.timeline();

    steps.forEach((step, index) => {
      const elements = container.querySelectorAll(step.target);
      const adjustedDuration = isMobile ? step.duration * 0.7 : step.duration;
      
      if (index === 0) {
        tl.to(elements, {
          ...step.props,
          duration: adjustedDuration,
          ease: step.props.ease || 'power2.out',
        });
      } else {
        // Add overlap to make animations feel more connected
        tl.to(elements, {
          ...step.props,
          duration: adjustedDuration,
          ease: step.props.ease || 'power2.out',
        }, '-=0.2');
      }
    });

    return () => {
      tl.kill();
    };
  }, [steps]);

  return ref;
}
