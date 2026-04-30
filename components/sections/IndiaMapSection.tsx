"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* 🎯 City data (tweak positions if needed) */
const cities = [
  {
    id: 1,
    name: "Jaipur",
    top: "42%",
    left: "45%",
    images: ["/gallery/jaipur1.jpg", "/gallery/jaipur2.jpg"],
  },
  {
    id: 2,
    name: "Mumbai",
    top: "60%",
    left: "42%",
    images: ["/gallery/mumbai1.jpg", "/gallery/mumbai2.jpg"],
  },
  {
    id: 3,
    name: "Delhi",
    top: "38%",
    left: "48%",
    images: ["/gallery/gurgaon1.jpg", "/gallery/gurgaon2.jpg"],
  },
];

/* ✨ Animated line between 2 points */
function Trail({
  from,
  to,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
}) {
  const path = `M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${
    from.y - 60
  } ${to.x} ${to.y}`;

  return (
    <motion.svg className="absolute inset-0 w-full h-full pointer-events-none">
      <motion.path
        d={path}
        stroke="#caa97a"
        strokeWidth="2"
        fill="transparent"
        strokeDasharray="200"
        strokeDashoffset="200"
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </motion.svg>
  );
}

export default function IndiaMapSection() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="relative py-24 bg-[#2b2118] text-[#f5efe6] overflow-hidden">

      {/* 🌟 Heading */}
      <div className="text-center mb-14 px-6">
        <h2 className="
          text-4xl md:text-5xl font-semibold
          bg-gradient-to-r from-[#e6d3b3] via-[#caa97a] to-[#e6d3b3]
          bg-clip-text text-transparent
        ">
          Events Conducted Till Now
        </h2>

        <p className="mt-4 text-[#d6c7b2] text-lg">
          हर शहर में बसी है एक कहानी, हर मंच पर जगा है एक एहसास।
        </p>
      </div>

      {/* 🌍 MAP CONTAINER */}
      <div className="relative w-full max-w-5xl mx-auto h-[420px]">

        {/* 🗺️ INDIA MAP (SVG IMAGE) */}
        <img
          src="/map/india-outline.svg"
          className="w-full h-full object-contain opacity-80"
        />

        {/* ✨ TRAILS */}
        <Trail from={{ x: 400, y: 150 }} to={{ x: 320, y: 250 }} />
        <Trail from={{ x: 400, y: 150 }} to={{ x: 420, y: 120 }} />

        {/* 📍 PINS */}
        {cities.map((city) => (
          <motion.div
            key={city.id}
            onClick={() => setSelected(city)}
            className="absolute cursor-pointer group"
            style={{ top: city.top, left: city.left }}
            whileHover={{ scale: 1.2 }}
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-[#caa97a] blur-md opacity-40" />

            {/* Dot */}
            <div className="w-3 h-3 bg-[#caa97a] rounded-full relative z-10" />

            {/* Label */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition text-white">
              {city.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 📸 POPUP */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="flex gap-6">
            {selected.images.map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                className="w-[300px] h-[200px] object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}