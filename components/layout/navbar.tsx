"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Performances", href: "/performances" },
  { name: "Shayari", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">

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
      >
        <div
          className="
          flex items-center gap-14
          px-14 py-4
          rounded-full
          bg-white/25
          backdrop-blur-lg
          border border-black/10
          shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        "
        >
          {/* Logo */}
          <span className="text-[15px] tracking-[0.3em] uppercase text-black/80">
            Dubey Ji
          </span>

          {/* Links */}
          <div className="flex items-center gap-12">
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