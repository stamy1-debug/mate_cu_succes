"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !headlineRef.current || !buttonRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/figma/background2.png"
            alt=""
            fill
            className="object-cover opacity-50"
            priority={false}
          />
          <div className="absolute inset-0 bg-white/30" />

          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
            <div className="mx-auto max-w-3xl text-center">
              <h2
                ref={headlineRef}
                className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
              >
                Pregătește-te pentru nota pe care ți-o dorești
              </h2>

              <div className="mt-8 flex justify-center">
                <a
                  ref={buttonRef}
                  href="#abonamente"
                  className="inline-flex items-center justify-center rounded-full bg-[#6C5CE7] px-7 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#5b4ed6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6C5CE7] focus-visible:ring-offset-2"
                >
                  Începe acum gratuit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
