'use client';

import { useRef, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useHoverAnimation } from '@/hooks/useHoverAnimation';

interface FeatureCardAnimatedProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCardAnimated({
  icon,
  title,
  description,
  index,
}: FeatureCardAnimatedProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollRef = useScrollReveal({ delay: index * 0.1 });
  const hoverRef = useHoverAnimation({ scale: 1.03, yOffset: -8 });
  
  // Synchronize refs
  useEffect(() => {
    if (elementRef.current) {
      if (scrollRef) {
        scrollRef.current = elementRef.current;
      }
      if (hoverRef) {
        hoverRef.current = elementRef.current;
      }
    }
  }, [scrollRef, hoverRef]);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center text-center p-6 card-pastel"
    >
      <div className="rounded-full bg-primary/10 p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
