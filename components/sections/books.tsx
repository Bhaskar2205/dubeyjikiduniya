"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const books = [
  { title: "Ehsaas", image: "/books/book1.jpg" },
  { title: "Dil Ki Baatein", image: "/books/book2.jpg" },
  { title: "Mohabbat", image: "/books/book3.jpg" },
  { title: "Raat Aur Alfaaz", image: "/books/book4.jpg" },
  { title: "Khamoshi", image: "/books/book5.jpg" },
];

export default function BooksSection() {
  return (
    <section className="py-40 px-6 bg-[#efe6dc]">

      {/* 🧠 HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto mb-20"
      >
        <h2 className="
          text-4xl md:text-6xl font-semibold tracking-tight
          bg-gradient-to-r from-[#8c6a4a] via-[#caa97a] to-[#8c6a4a]
          bg-clip-text text-transparent
        ">
          A World of Words
        </h2>

        <p className="mt-6 text-[#2f241b] text-xl md:text-2xl font-semibold leading-relaxed">
  हर लफ़्ज़ में छुपा है एक एहसास, हर किताब एक दुनिया —
  इन कहानियों में बसती है ज़िंदगी की सच्चाई।
</p>
      </motion.div>

      {/* 📚 BOOKS ROW */}
      <div className="flex justify-center gap-10 flex-wrap max-w-6xl mx-auto">

        {books.map((book, i) => (
          <Link key={i} href="/shop">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ y: -12, scale: 1.04 }}
              className="cursor-pointer"
            >
              <div className="
                relative w-[220px] md:w-[260px] h-[340px]
                rounded-[24px] overflow-hidden
                shadow-[0_30px_70px_rgba(0,0,0,0.15)]
                group
              ">

                {/* IMAGE */}
                <img
                  src={book.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* SOFT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* HOVER LIGHT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition duration-500" />

                {/* TITLE */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold tracking-wide">
                    {book.title}
                  </h3>
                </div>

              </div>
            </motion.div>
          </Link>
        ))}

      </div>

      {/* ✨ CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mt-20"
      >
        <Link href="/shop">
          <button className="
            px-8 py-3 rounded-full
            bg-[#8c6a4a] text-white
            hover:bg-[#6e543c]
            transition duration-300
            shadow-lg
          ">
            Explore All Books
          </button>
        </Link>
      </motion.div>

    </section>
  );
}