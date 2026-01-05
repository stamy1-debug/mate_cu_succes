import React from "react";
import backgroundImage from "../assets/background1.png";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-16 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* translucent overlay spanning full section */}
      <div className="absolute inset-0 bg-white/30" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* inner grid wrapper no longer clips/rounds background */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-3xl bg-white/70 p-6 shadow-sm backdrop-blur">
            <h3 className="text-xl font-semibold">Serviciu 1</h3>
            <p className="mt-2 text-sm text-gray-700">
              Descriere scurtă pentru serviciul 1.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-white/70 p-6 shadow-sm backdrop-blur">
            <h3 className="text-xl font-semibold">Serviciu 2</h3>
            <p className="mt-2 text-sm text-gray-700">
              Descriere scurtă pentru serviciul 2.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-white/70 p-6 shadow-sm backdrop-blur">
            <h3 className="text-xl font-semibold">Serviciu 3</h3>
            <p className="mt-2 text-sm text-gray-700">
              Descriere scurtă pentru serviciul 3.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
