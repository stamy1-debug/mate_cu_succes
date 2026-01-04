'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BookOpen, Video, FileText, Users, Target, Award } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: BookOpen,
    title: 'Lecții Interactive',
    description: 'Conținut educațional structurat și ușor de înțeles pentru toate nivelurile',
    blotch: '/figma/card-blotch-pink.png',
  },
  {
    icon: Video,
    title: 'Video Tutoriale',
    description: 'Ore de materiale video explicative pentru fiecare subiect din programa școlară',
    blotch: '/figma/card-blotch-cyan.png',
  },
  {
    icon: FileText,
    title: 'Exerciții Practice',
    description: 'Mii de exerciții și probleme rezolvate pas cu pas pentru exersare',
    blotch: '/figma/card-blotch-orange.png',
  },
  {
    icon: Users,
    title: 'Suport Dedicat',
    description: 'Profesori experimentați disponibili să răspundă întrebărilor tale',
    blotch: '/figma/card-blotch-pink.png',
  },
  {
    icon: Target,
    title: 'Progres Urmărit',
    description: 'Monitorizează-ți evoluția și identifică zonele care necesită îmbunătățire',
    blotch: '/figma/card-blotch-cyan.png',
  },
  {
    icon: Award,
    title: 'Rezultate Garantate',
    description: 'Metodologie dovedită care a ajutat sute de elevi să reușească la examen',
    blotch: '/figma/card-blotch-orange.png',
  },
];

export default function ServicesSection() {
  const containerRef = useScrollReveal({ stagger: 0.15 });

  return (
    <section className="py-20 lg:py-32 bg-pastel-noise">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1800px' }}>
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {services.map((service) => (
            <div 
              key={service.title} 
              className="relative overflow-hidden bg-white w-full"
              style={{
                maxWidth: '490px',
                height: '413px',
                borderRadius: '40px',
                border: '1.5px solid #000000',
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              {/* Blotch overlay */}
              <div className="absolute top-0 right-0 pointer-events-none z-10">
                <Image
                  src={service.blotch}
                  alt=""
                  width={180}
                  height={180}
                  className="opacity-90"
                  style={{ mixBlendMode: 'multiply', objectFit: 'contain' }}
                />
              </div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col z-20">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
