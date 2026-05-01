"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#2b2118] text-[#e8dccb] overflow-hidden">

      {/* ✨ Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[400px] h-[400px] bg-[#caa97a]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] bg-[#caa97a]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">

        {/* 🧠 MAIN SECTION */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-semibold tracking-wide">
              Dubey Ji Ki Duniya
            </h2>

        <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
    mt-6

    text-base md:text-lg
    font-semibold
    leading-relaxed tracking-wide

    bg-gradient-to-r from-[#e6d3b3] via-[#caa97a] to-[#e6d3b3]
    bg-[length:200%_100%]
    bg-clip-text text-transparent

    animate-[gradientMove_6s_linear_infinite]

    drop-shadow-[0_2px_10px_rgba(202,169,122,0.25)]
  "
>
  शब्द नहीं, एहसास है —  
  <br />
  एक ऐसी दुनिया जहाँ हर लफ़्ज़ जीता है।
</motion.p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm tracking-widest text-[#a8937a] uppercase">
              Explore
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              {["Home", "About", "Performances", "Shayari", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm tracking-widest text-[#a8937a] uppercase">
              Connect
            </h3>

            <p className="mt-4 text-sm text-[#cbbca7]">
              For collaborations & bookings
            </p>

            <p className="mt-2 text-sm">eshandubey@gmail.com</p>

            {/* Social */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              {["Instagram", "YouTube"].map((s, i) => (
                <span
                  key={i}
                  className="text-sm text-[#cbbca7] hover:text-white cursor-pointer transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ✨ Divider */}
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-[#caa97a]/30 to-transparent" />

        {/* 🪶 POETIC LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 1 }}
          className="text-center mt-8 text-sm text-[#b8a48a] italic"
        >
          “हर अंत एक नई शुरुआत की खामोश आहट है…”
        </motion.p>

        {/* 🧾 COPYRIGHT */}
        <div className="mt-6 text-center text-xs text-[#8f7a63]">
          © {new Date().getFullYear()} Eshan Dubey. All rights reserved.
        </div>

      </div>
    </footer>
  );
}