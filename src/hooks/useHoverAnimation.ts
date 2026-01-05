'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface UseHoverAnimationOptions {
  scale?: number;
  yOffset?: number;
  duration?: number;
}

export function useHoverAnimation(options: UseHoverAnimationOptions = {}) {
  const { scale = 1.05, yOffset = -10, duration = 0.3 } = options;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // No animations for reduced motion
      return;
    }

    // Check if mobile
    const isMobile = window.innerWidth < 768;
    const adjustedDuration = isMobile ? duration * 0.7 : duration;

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: scale,
        y: yOffset,
        duration: adjustedDuration,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        y: 0,
        duration: adjustedDuration,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [scale, yOffset, duration]);

  return ref;
}
