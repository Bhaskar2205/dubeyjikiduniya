"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Performances", href: "/performances" },
  { name: "Shayari", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <div className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 flex-col items-center">

        {/* ✍️ Signature */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[20px] tracking-[0.15em] font-light text-black/70 mb-2"
        >
          Eshan Dubey
        </motion.span>

        {/* Navbar */}
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            flex items-center gap-14
            px-14 py-4
            rounded-full
            bg-white/25 backdrop-blur-lg
            border border-black/10
            shadow-[0_10px_40px_rgba(0,0,0,0.06)]
          "
        >
          <span className="text-[15px] tracking-[0.3em] uppercase text-black/80">
            Dubey Ji
          </span>

          <div className="flex items-center gap-12">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] tracking-wide text-black/70 hover:text-black transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.nav>
      </div>

      {/* ================= MOBILE HAMBURGER ================= */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          md:hidden
          fixed top-5 right-5 z-50

          w-12 h-12
          rounded-full

          bg-black/20 backdrop-blur-md
          border border-white/20

          flex items-center justify-center
        "
      >
        {/* Premium hamburger */}
        <div className="space-y-1">
          <span className="block w-5 h-[2px] bg-white"></span>
          <span className="block w-5 h-[2px] bg-white"></span>
          <span className="block w-5 h-[2px] bg-white"></span>
        </div>
      </button>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/80 backdrop-blur-xl
            flex flex-col items-center justify-center
          "
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

          {/* Links */}
          <div className="flex flex-col items-center gap-8">
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl tracking-wide hover:opacity-70 transition"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}