'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { CheckCircle2, Star } from 'lucide-react';

const features = [
  {
    title: 'Conținut actualizat',
    description: 'Materiale alinate cu programa școlară în vigoare și cerințele MECS',
  },
  {
    title: 'Explicații clare',
    description: 'Fiecare concept explicat simplu și logic, cu exemple practice',
  },
  {
    title: 'Exerciții variate',
    description: 'De la nivel începător până la probleme avansate pentru nota 10',
  },
  {
    title: 'Teste simulate',
    description: 'Evaluări în condiții reale de examen pentru pregătire optimă',
  },
];

const testimonials = [
  {
    name: 'Maria P.',
    role: 'Elevă clasa a VIII-a',
    content: 'Am crescut nota de la 7 la 9.5 în doar 3 luni! Explicațiile sunt super clare și exercițiile m-au ajutat enorm.',
    rating: 5,
    color: 'yellow',
  },
  {
    name: 'Andrei M.',
    role: 'Absolvent EN 2023',
    content: 'Cea mai bună investiție! Am luat 10 la EN datorită platformei și profesorilor dedicați.',
    rating: 5,
    color: 'cyan',
  },
];

export default function DarkFeaturesSection() {
  const featuresRef = useScrollReveal({ stagger: 0.12 });
  const testimonialsRef = useScrollReveal({ stagger: 0.2 });

  return (
    <section className="py-20 lg:py-32 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Headline */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Pregătirea ta pentru succes începe aici
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              Alătură-te miilor de elevi care și-au atins visul de a obține rezultate excelente la Evaluarea Națională.
            </p>
          </div>

          {/* Right: Feature Cards */}
          <div
            ref={featuresRef as React.RefObject<HTMLDivElement>}
            className="flex flex-col gap-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          ref={testimonialsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-8 rounded-[40px] border ${
                testimonial.color === 'yellow'
                  ? 'bg-yellow-400/95 border-yellow-500/30'
                  : 'bg-cyan-400/95 border-cyan-500/30'
              }`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-slate-900 text-slate-900" />
                ))}
              </div>
              <p className="text-slate-900 text-lg mb-4 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-800">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
