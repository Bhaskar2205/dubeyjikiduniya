"use client";

import { motion } from "framer-motion";
import BookCard from "@/components/books/book-card";

const books = [
  {
    title: "Ehsaas",
    price: "₹299",
    description: "A collection of heartfelt shayari and emotions.",
    image: "/books/book1.jpg",
    hoverImage: "/books/book1-back.jpg",
  },
  {
    title: "Dil Ki Baatein",
    price: "₹349",
    description: "Words that speak what the heart cannot.",
    image: "/books/book2.jpg",
    hoverImage: "/books/book2-back.jpg",
  },
  {
    title: "Mohabbat",
    price: "₹399",
    description: "A journey through love and longing.",
    image: "/books/book3.jpg",
    hoverImage: "/books/book3-back.jpg",
  },
];

export default function BooksSection() {
  return (
    <section className="py-28 px-10 bg-[#f5efe6]">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-medium">
          Books by Eshan Dubey
        </h2>

        <p className="mt-4 text-black/60">
          Words that live beyond moments
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-12">
        {books.map((book, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <BookCard {...book} />
          </motion.div>
        ))}
      </div>

    </section>
  );
}