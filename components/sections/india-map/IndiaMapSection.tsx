"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import DesktopMap from "./DesktopMap";
import MobileMap from "./MobileMap";

/* 🎯 Same positions (kept yours) */
const cities = [
  {
    id: 1,
    name: "Delhi",
    top: "24%",
    left: "44%",
    images: ["/gallery/gurgaon1.jpg", "/gallery/gurgaon2.jpg"],
  },
  {
    id: 2,
    name: "Jaipur",
    top: "33%",
    left: "40%",
    images: ["/gallery/jaipur1.jpg", "/gallery/jaipur2.jpg"],
  },
  {
    id: 3,
    name: "Mumbai",
    top: "53%",
    left: "37.5%",
    images: ["/gallery/mumbai1.jpg", "/gallery/mumbai2.jpg"],
  },
];

type City = (typeof cities)[number];


export default function IndiaMapSection() {
  const [selected, setSelected] = useState<City | null>(null);
  const [activeCity, setActiveCity] = useState<number | null>(null);

  return (
    <section className="relative py-28 bg-[#2b2118] text-[#f5efe6] overflow-hidden">

      {/* ✨ BACKGROUND PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-[#caa97a] blur-[180px] opacity-10 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
      </div>

      {/* 🌟 HEADING */}
      <div className="text-center mb-16 px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#e6d3b3] via-[#caa97a] to-[#e6d3b3] bg-clip-text text-transparent">
          Events Conducted Till Now
        </h2>

        <p className="mt-4 text-[#d6c7b2] text-lg">
          हर शहर में बसी है एक कहानी, हर मंच पर जगा है एक एहसास।
        </p>
      </div>

      {/* 🌍 MAP WRAPPER */}
      {/* 🧠 RESPONSIVE MAP SWITCH */}
<div className="relative z-10">

  {/* Desktop */}
  <div className="hidden md:block">
<DesktopMap
  cities={cities}
  setSelected={setSelected}
  activeCity={activeCity}
  setActiveCity={setActiveCity}
/>  </div>

  {/* Mobile */}
  <div className="block md:hidden">
    <MobileMap cities={cities} setSelected={setSelected} />
  </div>

</div>

      {/* 📸 MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#2b2118]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-[90vw] max-w-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{selected.name}</h3>
              <button onClick={() => setSelected(null)}>✕</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {selected.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-[140px] object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}