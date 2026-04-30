"use client";

import Hero from "@/components/sections/hero";
import Navbar from "@/components/layout/navbar";
import BooksSection from "@/components/sections/books";
import GlobeSection from "@/components/sections/IndiaMapSection";
import PerformanceReel from "@/components/sections/performance-reel";

import { motion } from "framer-motion";

/* 🔥 Reusable Fade Wrapper */
const FadeSection = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-200px" }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

export default function Home() {
  return (
    <main className="bg-[#f5efe6] text-black overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO (no fade applied intentionally) */}
      <Hero />

      {/* 🔥 BOOKS SECTION */}
      <FadeSection>
        <BooksSection />
      </FadeSection>

      <FadeSection>
  <GlobeSection />
</FadeSection>
 <FadeSection> 
<PerformanceReel />

 </FadeSection>
      {/* STORY / PERFORMANCE */}
      <FadeSection>
        <section className="py-32 flex items-center justify-center bg-[#efe6dc]">
          <div className="text-center px-6 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Performing Across India
            </h2>
          </div>
        </section>
      </FadeSection>

      {/* FINAL SECTION */}
      <FadeSection>
        <section className="py-32 flex items-center justify-center">
          <div className="text-center max-w-xl px-6">
            {/* intentionally empty */}
          </div>
        </section>
      </FadeSection>

    </main>
  );
}