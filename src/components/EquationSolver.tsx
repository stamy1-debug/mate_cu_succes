'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

export interface EquationStep {
  expression: string;
  explanation: string;
}

interface EquationSolverProps {
  title: string;
  steps: EquationStep[];
  finalAnswer: string;
}

export default function EquationSolver({ title, steps, finalAnswer }: EquationSolverProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const element = contentRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Set final state immediately without animation
      gsap.set(element, { opacity: 1, x: 0 });
      setIsAnimating(false);
      return;
    }

    // Check if mobile
    const isMobile = window.innerWidth < 768;
    const duration = isMobile ? 0.2 : 0.3;

    setIsAnimating(true);
    
    // Fade out and slide
    gsap.fromTo(
      element,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: duration,
        ease: 'power2.out',
        onComplete: () => setIsAnimating(false),
      }
    );
  }, [currentStep]);

  const goToNext = () => {
    if (!isAnimating && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPrev = () => {
    if (!isAnimating && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isLastStep = currentStep === steps.length;
  const currentContent = isLastStep
    ? { expression: finalAnswer, explanation: 'Răspuns final' }
    : steps[currentStep];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold font-serif mb-6 text-center">{title}</h2>
      
      <div className="bg-card border rounded-lg p-8 mb-6">
        <div ref={contentRef}>
          <div className="text-3xl font-mono mb-4 text-center">
            {currentContent.expression}
          </div>
          <p className="text-muted-foreground text-center">
            {currentContent.explanation}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button
          onClick={goToPrev}
          disabled={currentStep === 0 || isAnimating}
          variant="outline"
          size="lg"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Anterior
        </Button>

        <div className="text-sm text-muted-foreground">
          Pasul {currentStep + 1} din {steps.length + 1}
        </div>

        <Button
          onClick={goToNext}
          disabled={isLastStep || isAnimating}
          variant="outline"
          size="lg"
        >
          Următorul
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
