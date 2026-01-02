export type PlanTier = 'starter' | 'pro' | 'elite';

export interface PricingPlan {
  id: PlanTier;
  name: string;
  price: number;
  currency: string;
  interval: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 79,
    currency: 'RON',
    interval: 'lună',
    description: 'Perfect pentru începători care vor să înceapă pregătirea',
    features: [
      'Acces la cursuri video de bază',
      'Materiale gratuite descărcabile',
      'Suport prin email',
      'Acces la comunitatea online',
      'Teste de evaluare lunare',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 149,
    currency: 'RON',
    interval: 'lună',
    description: 'Cel mai popular - ideal pentru pregătire completă',
    features: [
      'Tot din planul Starter, plus:',
      'Acces complet la toate cursurile video',
      'Sesiuni live săptămânale',
      'Simulări de examen nelimitate',
      'Feedback personalizat la teme',
      'Acces prioritar la materiale noi',
      'Grupe de studiu ghidate',
    ],
    highlighted: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 299,
    currency: 'RON',
    interval: 'lună',
    description: 'Pregătire premium cu mentorship individual',
    features: [
      'Tot din planul Pro, plus:',
      'Sesiuni 1-la-1 cu profesori (2 ore/lună)',
      'Plan de pregătire personalizat',
      'Suport prioritar 24/7',
      'Analiză detaliată a progresului',
      'Materiale exclusive premium',
      'Acces anticipat la funcții noi',
      'Certificat de absolvire',
    ],
  },
];

export function getPlanById(id: PlanTier): PricingPlan | undefined {
  return PRICING_PLANS.find(plan => plan.id === id);
}
