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
    <div className="fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center w-[calc(100%-1rem)] md:w-auto max-w-full">

      {/* ✍️ Signature (Main Writer) */}
     <motion.span
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 0.8, y: 0 }}
  transition={{ duration: 1 }}
  className="
    text-[18px] md:text-[22px]
    tracking-[0.15em]
    font-light
    text-black/70
    mb-2
  "
>
  Eshan Dubey
</motion.span>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-auto"
      >
        <div className="md:hidden rounded-2xl bg-white/25 backdrop-blur-lg border border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between px-5 py-3">
            <span className="text-[13px] tracking-[0.2em] uppercase text-black/80">
              Dubey Ji
            </span>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-black/20 text-black/80"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="text-lg leading-none">{isOpen ? "X" : "☰"}</span>
            </button>
          </div>
          {isOpen && (
            <div className="px-5 pb-4 pt-1 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[14px] tracking-wide text-black/70 hover:text-black transition duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div
          className="
          hidden md:flex items-center gap-14
          px-14 py-4
          rounded-full
          bg-white/25
          backdrop-blur-lg
          border border-black/10
          shadow-[0_10px_40px_rgba(0,0,0,0.06)]
          w-auto
          whitespace-nowrap
        "
        >
          {/* Logo */}
          <span className="text-[15px] tracking-[0.3em] uppercase text-black/80 shrink-0">
            Dubey Ji
          </span>

          {/* Links */}
          <div className="flex items-center gap-12 shrink-0">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  text-[15px]
                  tracking-wide
                  text-black/70
                  hover:text-black
                  transition duration-300
                "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}