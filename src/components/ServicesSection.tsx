import background1 from '../assets/background1.png';

const services = [
  {
    title: 'Tutoring personalizat',
    description:
      'Învățare adaptată ritmului și nevoilor copilului, cu atenție maximă pe progres.',
  },
  {
    title: 'Metode interactive',
    description:
      'Folosim jocuri, exerciții practice și tehnici moderne pentru a face învățarea plăcută.',
  },
  {
    title: 'Pregătire pentru examene',
    description:
      'Sprijin complet pentru testări naționale, evaluări și examene importante.',
  },
  {
    title: 'Dezvoltare abilități',
    description:
      'Construim încrederea, gândirea critică și autonomia în procesul de învățare.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-transparent py-24 sm:py-32"
    >
      {/* Background spanning entire section */}
      <div className="absolute inset-0 -z-10">
        <img
          src={background1}
          alt=""
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Serviciile noastre
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oferim suport educațional complet pentru copilul tău, într-un mediu prietenos și
            motivant.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white/80 p-8 shadow-sm ring-1 ring-gray-900/5"
            >
              <h3 className="text-lg font-semibold leading-7 text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
