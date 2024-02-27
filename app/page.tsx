"use client";

import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import FeaturedSection from "@/sections/featured";
import LandingSection from "@/sections/landing";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
          <LandingSection />
          <FeaturedSection />
          <AboutSection />
          <ContactSection />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
