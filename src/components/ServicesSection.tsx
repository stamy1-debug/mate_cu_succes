'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BookOpen, Video, FileText, Users, Target, Award } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Lecții Interactive',
    description: 'Conținut educațional structurat și ușor de înțeles pentru toate nivelurile',
  },
  {
    icon: Video,
    title: 'Video Tutoriale',
    description: 'Ore de materiale video explicative pentru fiecare subiect din programa școlară',
  },
  {
    icon: FileText,
    title: 'Exerciții Practice',
    description: 'Mii de exerciții și probleme rezolvate pas cu pas pentru exersare',
  },
  {
    icon: Users,
    title: 'Suport Dedicat',
    description: 'Profesori experimentați disponibili să răspundă întrebărilor tale',
  },
  {
    icon: Target,
    title: 'Progres Urmărit',
    description: 'Monitorizează-ți evoluția și identifică zonele care necesită îmbunătățire',
  },
  {
    icon: Award,
    title: 'Rezultate Garantate',
    description: 'Metodologie dovedită care a ajutat sute de elevi să reușească la examen',
  },
];

export default function ServicesSection() {
  const containerRef = useScrollReveal({ stagger: 0.15 });

  return (
    <section className="py-20 lg:py-32 bg-pastel-noise">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Totul de care ai nevoie pentru succes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Platformă completă de pregătire pentru Evaluarea Națională la matematică
          </p>
        </div>

        <div
          ref={containerRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <div key={service.title} className="card-pastel p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
