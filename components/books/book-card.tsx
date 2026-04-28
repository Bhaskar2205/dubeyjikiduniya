"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  title: string;
  price: string;
  description: string;
  image: string;
  hoverImage: string;
};

export default function BookCard({
  title,
  price,
  description,
  image,
  hoverImage,
}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-[280px] h-[420px] rounded-2xl overflow-hidden 
                 bg-[#efe4d6] shadow-[0_20px_50px_rgba(0,0,0,0.08)] 
                 cursor-pointer"
    >
      {/* IMAGE */}
      <motion.img
        src={hovered ? hoverImage : image}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col justify-end p-6"
      >
        <h3 className="text-white text-xl font-medium">{title}</h3>

        <p className="text-white/80 text-sm mt-2">
          {description}
        </p>

        <span className="mt-4 text-white font-semibold">
          {price}
        </span>
      </motion.div>
    </motion.div>
  );
}