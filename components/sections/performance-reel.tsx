"use client";

import { motion } from "framer-motion";

const shows = [
  { image: "/gallery/image1.jpg", title: "" },
  { image: "/gallery/image2.jpg", title: "" },
  { image: "/gallery/image3.jpg", title: "" },
  { image: "/gallery/image4.jpg", title: "" },
  { image: "/gallery/image5.png", title: "" },
  { image: "/gallery/image6.jpg", title: "" },
];

export default function PerformanceReel() {
  return (
    <section className="relative min-h-screen bg-[#f5efe6] overflow-hidden py-24">

      {/* ✨ BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-[#e8dccb] blur-[120px] opacity-50 rounded-full" />
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-[#d8cbb7] blur-[120px] opacity-50 rounded-full" />
      </div>

      {/* 🧠 HEADING */}
      <div className="relative z-10 text-center mb-16 px-6">

       <motion.h2
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
    text-4xl md:text-6xl font-semibold tracking-tight

    bg-[linear-gradient(90deg,#8c6a4a,#d4af7f,#f5e6cc,#c9975c,#8c6a4a)]
    bg-[length:250%_100%]
    bg-clip-text text-transparent

    drop-shadow-[0_4px_25px_rgba(140,100,60,0.5)]

    animate-gradientMove
  "
>
  Gallery of Eshan Dubey
</motion.h2>
       <motion.p
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="
    mt-5 text-lg md:text-xl font-semibold
    text-[#3f2f23]
    max-w-2xl mx-auto leading-relaxed tracking-wide

    bg-[linear-gradient(90deg,#3f2f23,#8c6a4a,#3f2f23)]
    bg-[length:200%_100%]
    bg-clip-text text-transparent

    animate-hindiGlow
  "
>
  हर मंच पर एक नई कहानी, हर शब्द में एक एहसास —
  ये सिर्फ तस्वीरें नहीं, जज़्बातों की दुनिया है।
</motion.p>

      </div>

      {/* 🎯 DRAG AREA */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -1800, right: 0 }}
        dragElastic={0.12}
        dragMomentum={true}
        dragTransition={{
          power: 0.2,
          timeConstant: 300,
          bounceStiffness: 80,
          bounceDamping: 20,
        }}
        className="relative z-10 flex gap-16 px-20 cursor-grab active:cursor-grabbing touch-pan-y"
      >
        {shows.map((show, i) => {
          const offset = i % 2 === 0 ? 30 : -30;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06, y: -12 }}
              transition={{ duration: 0.4 }}
              className="flex-shrink-0"
              style={{ transform: `translateY(${offset}px)` }}
            >
              <div className="
                relative w-[300px] md:w-[420px] h-[460px]
                rounded-[36px] overflow-hidden
                shadow-[0_40px_120px_rgba(0,0,0,0.18)]
                group
              ">

                {/* IMAGE */}
                <img
                  src={show.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* HOVER LIGHT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#ffffff20] to-transparent transition duration-500" />

                {/* TEXT */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="
                    text-2xl md:text-3xl font-semibold tracking-tight
                    text-[#f3e9dc]
                    drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]
                  ">
                    {show.title}
                  </h3>
                </div>

              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}