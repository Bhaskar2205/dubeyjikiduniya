"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react"; 


// sahdhasd

const shows = [
  { image: "/gallery/image1.jpg" },
  { image: "/gallery/image2.jpg" },
  { image: "/gallery/image3.jpg" },
  { image: "/gallery/image4.jpg" },
  { image: "/gallery/image5.jpg" },
  { image: "/gallery/image6.jpg" },
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

      {/* BACKGROUND (lighter for performance) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[300px] h-[300px] bg-[#e8dccb] blur-[100px] opacity-30 rounded-full" />
        <div className="absolute bottom-[-20%] right-[10%] w-[300px] h-[300px] bg-[#d8cbb7] blur-[100px] opacity-30 rounded-full" />
      </div>

      {/* HEADING */}
      <div className="relative z-10 text-center mb-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            text-3xl md:text-6xl font-semibold
            bg-[linear-gradient(90deg,#8c6a4a,#d4af7f,#f5e6cc,#c9975c,#8c6a4a)]
            bg-[length:250%_100%]
            bg-clip-text text-transparent
            animate-gradientMove
          "
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
              className="w-full"
            >
              <div className="
                relative w-full h-[240px]
                rounded-[20px] overflow-hidden
                shadow-[0_12px_40px_rgba(0,0,0,0.12)]
              ">
                <img
                  src={show.image}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
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
          dragListener={true}
          style={{ touchAction: "pan-y", willChange: "transform" }}

          dragConstraints={{ left: -1200, right: 0 }}
          dragElastic={0.22}
          dragMomentum={true}

          dragTransition={{
            power: 0.9,
            timeConstant: 180,
            bounceStiffness: 140,
            bounceDamping: 16,
          }}

          className="
            relative z-10 flex gap-10 px-16
            cursor-grab active:cursor-grabbing
            will-change-transform
          "
        >
          {shows.map((show, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}   // lighter hover
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={`flex-shrink-0 ${
                i % 2 === 0 ? "translate-y-4" : "-translate-y-4"
              }`}
            >
              <div className="
                relative w-[340px] h-[400px]
                rounded-[28px] overflow-hidden
                shadow-[0_20px_60px_rgba(0,0,0,0.16)]
                group
              ">
                <img
                  src={show.image}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
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