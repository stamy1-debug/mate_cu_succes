import Image from "next/image";

const services = [
  {
    title: "Mentorat 1:1",
    description:
      "Plan personalizat, obiective clare și feedback constant pentru progres accelerat.",
  },
  {
    title: "Evaluare & Strategie",
    description:
      "Analizăm situația ta actuală și construim un plan concret de creștere.",
  },
  {
    title: "Workshop-uri",
    description:
      "Sesiuni practice pe teme cheie: mindset, productivitate, carieră și finanțe.",
  },
  {
    title: "Resurse",
    description:
      "Ghiduri, template-uri și instrumente testate pentru rezultate rapide.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      {/* background1 pe toată secțiunea (sub navbar) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/figma/background1.png"
          alt=""
          fill
          className="object-cover opacity-50"
          priority={false}
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Servicii
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Alege formatul potrivit și pornește pe drumul către rezultate măsurabile.
        </p>

        {/* wrapper-ul gridului fără background duplicat */}
        <div className="mt-12 rounded-[48px] py-16 lg:py-20">
          <div className="relative z-10 px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur"
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
