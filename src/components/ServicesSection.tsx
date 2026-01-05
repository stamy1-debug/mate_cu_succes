import React from "react";
import background1 from "../../assets/background1.png";

const services = [
  {
    title: "Pagini Web Personalizate",
    description:
      "Creăm site-uri moderne, rapide și adaptate nevoilor tale, pentru a-ți reprezenta afacerea la cel mai înalt nivel.",
  },
  {
    title: "Magazine Online (eCommerce)",
    description:
      "Construim platforme de vânzare online sigure și ușor de administrat, pentru a-ți crește vânzările și vizibilitatea.",
  },
  {
    title: "Optimizare SEO",
    description:
      "Îmbunătățim poziționarea site-ului tău în motoarele de căutare, astfel încât clienții să te găsească mai ușor.",
  },
  {
    title: "Mentoranță în Afaceri",
    description:
      "Te ghidăm strategic pentru a-ți dezvolta afacerea, cu soluții practice și planuri clare de creștere.",
  },
  {
    title: "Consultanță Digitală",
    description:
      "Îți oferim recomandări și strategii digitale pentru a-ți optimiza prezența online și a-ți atinge obiectivele.",
  },
  {
    title: "Suport și Mentenanță",
    description:
      "Asigurăm suport continuu și mentenanță, astfel încât site-ul tău să rămână mereu actualizat și funcțional.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full">
      {/* Background image full-width with opacity */}
      <div className="absolute inset-0 -z-10">
        <img
          src={background1}
          alt="" 
          className="h-full w-full object-cover opacity-50"
        />
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Serviciile Noastre
          </h2>
          <p className="mt-3 text-base text-gray-700 sm:text-lg">
            Soluții complete pentru prezența ta online și creșterea afacerii.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
