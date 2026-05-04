"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const books = [
  {
    title: "“आओ! निन्दा–निन्दा खेलें”",
    author: "सुरेन्द्र दुबे",
    image: "/books/book1.jpeg",
  },
  {
    title: "“श्रीमद्भगवद्गीता हिन्दी पद्यानुवाद (सम्पूर्ण 18 अध्याय)”",
    author: "“सुरेन्द्र दुबे”",
    image: "/books/book2.jpeg",
  },
  {
    title: "“बातों–बातों में”",
    author: "डॉ. कीर्ति काले",
    image: "/books/book3.jpeg",
  },
  {
    title: "वनवासी अवधेश",
    author: "“आर. एल. दीपक”",
    image: "/books/book4.jpeg",
  },
  {
    title: "“मन कहता है”",
    author: "“आर. एल. दीपक”",
    image: "/books/book5.jpeg",
  },
  {
    title: "“कुर्सी तू बड़भागिनी”",
    author: "“सुरेन्द्र दुबे”",
    image: "/books/book6.jpeg",
  },
];

export default function BooksSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#efe6dc] to-[#e4d6c3]">

      {/* 🧠 HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="
          text-4xl md:text-6xl font-semibold tracking-tight
          bg-gradient-to-r from-[#8c6a4a] via-[#caa97a] to-[#8c6a4a]
          bg-clip-text text-transparent
        ">
          A World of Words
        </h2>

        <p className="mt-8 text-[#3e2f23] text-lg md:text-xl leading-relaxed font-medium">
          हर किताब सिर्फ शब्द नहीं —
          <br />
          एक जीता हुआ एहसास है।
        </p>
      </motion.div>

      {/* 📚 GRID */}
      <div className="
        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3
        gap-8 md:gap-12
        max-w-6xl mx-auto
      ">

        {books.map((book, i) => (
          <Link key={i} href="/shop">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="group cursor-pointer"
            >
              <div className="
                relative w-full h-[260px] md:h-[380px]
                rounded-[20px] md:rounded-[28px]
                overflow-hidden
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              ">

                {/* IMAGE */}
                <img
                  src={book.image}
                  alt={book.title}
                  loading="lazy"
                  className="
                    absolute inset-0 w-full h-full object-cover
                    group-hover:scale-105
                    transition duration-500
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="
                    text-sm md:text-lg font-semibold leading-tight
                  ">
                    {book.title}
                  </h3>

                  <p className="text-xs md:text-sm opacity-80 mt-1">
                    {book.author}
                  </p>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition duration-500" />

              </div>
            </motion.div>
          </Link>
        ))}

      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-center mt-16"
      >
        <Link href="/shop">
          <button className="
            px-10 py-3 rounded-full
            bg-[#8c6a4a] text-white
            hover:bg-[#6e543c]
            transition duration-300
            shadow-[0_10px_30px_rgba(0,0,0,0.2)]
          ">
            Explore Collection
          </button>
        </Link>
      </motion.div>

    </section>
  );
}