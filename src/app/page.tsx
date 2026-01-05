"use client";

import ServicesSection from "@/components/ServicesSection";
import DarkFeaturesSection from "@/components/DarkFeaturesSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Services Grid Section */}
      <ServicesSection />

      {/* Dark Feature Section with Testimonials */}
      <DarkFeaturesSection />

      {/* Statistics Section (existing, kept as requested) */}
      <StatsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
