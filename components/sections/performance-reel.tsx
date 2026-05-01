"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image"; // 🔥 IMPORTANT

const shows = [
  { image: "/gallery/image1.png" },
  { image: "/gallery/image2.png" },
  { image: "/gallery/image3.png" },
  { image: "/gallery/image4.png" },
  { image: "/gallery/image5.png" },
  { image: "/gallery/image6.png" },
];

export default function PerformanceReel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative bg-[#f5efe6] py-16 overflow-hidden">

      {/* LIGHT BACKGROUND (optimized) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[250px] h-[250px] bg-[#e8dccb] blur-[80px] opacity-25 rounded-full" />
        <div className="absolute bottom-[-20%] right-[10%] w-[250px] h-[250px] bg-[#d8cbb7] blur-[80px] opacity-25 rounded-full" />
      </div>

      {/* HEADING */}
      <div className="relative z-10 text-center mb-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-6xl font-semibold
          bg-[linear-gradient(90deg,#8c6a4a,#d4af7f,#f5e6cc,#c9975c,#8c6a4a)]
          bg-[length:250%_100%]
          bg-clip-text text-transparent animate-gradientMove"
        >
          Gallery of Eshan Dubey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-base md:text-xl font-semibold text-[#3f2f23]"
        >
          हर मंच पर एक नई कहानी, हर शब्द में एक एहसास —
          ये सिर्फ तस्वीरें नहीं, जज़्बातों की दुनिया है।
        </motion.p>
      </div>

      {/* ---------------- MOBILE ---------------- */}
      {isMobile && (
        <div className="relative z-10 flex flex-col gap-5 px-4">

          {shows.map((show, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="relative w-full h-[240px] rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">

                {/* 🔥 OPTIMIZED IMAGE */}
                <Image
                  src={show.image}
                  alt="gallery"
                  fill
                  sizes="(max-width: 768px) 100vw"
                  quality={60}
                  priority={i === 0} // first loads instantly
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          ))}

        </div>
      )}

      {/* ---------------- DESKTOP ---------------- */}
      {!isMobile && (
        <motion.div
          drag="x"
          dragDirectionLock
          style={{ touchAction: "pan-y" }}
          dragConstraints={{ left: -1100, right: 0 }}
          dragElastic={0.25}
          dragMomentum
          dragTransition={{
            power: 0.9,
            timeConstant: 160,
            bounceStiffness: 140,
            bounceDamping: 16,
          }}
          className="relative z-10 flex gap-10 px-16 cursor-grab active:cursor-grabbing"
        >
          {shows.map((show, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`flex-shrink-0 ${
                i % 2 === 0 ? "translate-y-4" : "-translate-y-4"
              }`}
            >
              <div className="relative w-[320px] h-[380px] rounded-[28px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.16)] group">

                {/* 🔥 OPTIMIZED IMAGE */}
                <Image
  src={show.image}
  alt="gallery"
  fill
  sizes="(max-width: 768px) 100vw"
  className="object-cover"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition duration-200" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

    </section>
  );
}