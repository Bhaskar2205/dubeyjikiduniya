"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] md:h-[85vh] overflow-hidden">

      {/* DESKTOP IMAGE */}
      <motion.img
        src="/images/hero-bg.png"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="
          hidden md:block
          absolute inset-0 w-full h-full

          object-cover object-center

          brightness-[1.02]
          contrast-[1.15]
          saturate-[1.1]
          sharpen-[1.1]

          will-change-transform
        "
      />

      {/* MOBILE IMAGE */}
      <motion.img
        src="/images/hero-mobile.png"
        initial={{ scale: 1.03 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="
          block md:hidden
          absolute inset-0 w-full h-full

          object-cover object-center

          brightness-[1.03]
          contrast-[1.12]
          saturate-[1.08]

          will-change-transform
        "
      />

      {/* ✨ VERY SUBTLE DEPTH (no white wash) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      {/* 🌟 LIGHT GLOW (reduced, not overpowering) */}
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-[#efe4d6]/20 blur-[140px]" />

    </section>
  );
}