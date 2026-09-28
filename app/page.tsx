import Hero from "@/components/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import ServicesPreview from "@/components/home/ServicesPreview";

// Re-check which events are "upcoming" once an hour
export const revalidate = 3600;

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <WhatWeDo />
      <ServicesPreview />
    </main>
  );
}