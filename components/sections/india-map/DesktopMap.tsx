"use client";

import { motion } from "framer-motion";

export default function DesktopMap({ cities, setSelected, activeCity, setActiveCity }: any) {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-[420px] flex items-center justify-center">

      {/* 🌍 FLOATING MAP */}
      <motion.img
        src="/map/india-map.png"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[85%] object-contain pointer-events-none"
      />

      {/* ✨ TRAIL */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <motion.path
          d="M37.5% 53% Q42% 38% 44% 24%"
          stroke="#caa97a"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="6 8"
          animate={{
            strokeDashoffset: [0, -40],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* 📍 PINS */}
      {cities.map((city: any) => (
        <motion.div
          key={city.id}
          onClick={(e) => {
            e.stopPropagation();
            setSelected(city);
          }}
          onMouseEnter={() => setActiveCity(city.id)}
          onMouseLeave={() => setActiveCity(null)}
          className="absolute z-20 cursor-pointer"
          style={{
            top: city.top,
            left: city.left,
            transform: "translate(-50%, -50%)",
          }}
          whileHover={{ scale: 1.4 }}
        >
          {/* Pulse */}
          <div className="absolute w-6 h-6 bg-[#caa97a]/30 rounded-full animate-ping" />

          {/* Core */}
          <div className="w-3 h-3 bg-[#caa97a] rounded-full shadow-lg" />

          {/* Label */}
          {activeCity === city.id && (
            <div className="
              absolute -top-8 left-1/2 -translate-x-1/2
              bg-[#2b2118] text-[#e6d3b3]
              px-3 py-1 text-xs rounded-full
              border border-[#caa97a]/30
              shadow-lg whitespace-nowrap
            ">
              {city.name}
            </div>
          )}
        </motion.div>
      ))}

    </div>
  );
}