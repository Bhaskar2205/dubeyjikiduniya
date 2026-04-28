"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">

      {/* IMAGE */}
      <motion.img
        src="/images/hero-bg.png"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover 
                   brightness-[1.03] contrast-[1.1] saturate-[1.05]"
      />

      {/* SOFT LEFT FADE (PREMIUM BLEND) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#efe4d6]/80 via-[#efe4d6]/40 to-transparent" />

      {/* SUBTLE LIGHT GLOW (DEPTH) */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#efe4d6]/30 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl px-12">

        {/* SIGNATURE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[18px] md:text-[24px] font-light tracking-[0.2em] text-black/70 mb-6"
        >
          Eshan Dubey
        </motion.p>

        

        
        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="mt-10 px-8 py-3 border border-black/20 
                     rounded-full text-sm tracking-wide 
                     hover:bg-black hover:text-white 
                     transition-all duration-300"
        >
          Explore Performances
        </motion.button>

      </div>
    </section>
  );
}