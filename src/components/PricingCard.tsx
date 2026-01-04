"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PricingPlan } from "@/lib/plans";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: PricingPlan;
  onSelect?: (planId: string) => void;
  disabled?: boolean;
}

export default function PricingCard({ plan, onSelect, disabled = false }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative flex flex-col card-pastel",
        plan.highlighted && "border-primary shadow-lg scale-105"
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
          Cel mai popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-serif">{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="text-muted-foreground ml-1">
            {plan.currency}/{plan.interval}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex gap-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={plan.highlighted ? "default" : "outline"}
          onClick={() => onSelect?.(plan.id)}
          disabled={disabled}
        >
          {disabled ? 'Procesare...' : `Alege planul ${plan.name}`}
        </Button>
      </CardFooter>
    </Card>
  );
}
