"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background (matches ServicesSection approach) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/figma/background2.png"
          alt=""
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-white/70 p-8 shadow-sm ring-1 ring-black/5 backdrop-blur md:p-12">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
                Vrei să-ți iei examenul din prima?
              </h2>
              <p className="mt-2 max-w-2xl text-base text-zinc-700">
                Începe cu lecții clare, practică ghidată și suport real — ca să conduci cu
                încredere.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/20"
            >
              Programează o ședință
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
