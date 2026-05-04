"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const blogs = [
  {
    id: "1",
    title: "शब्दों में छुपा एक एहसास",
    content:
      "हर लफ़्ज़ एक कहानी कहता है। कभी वो दर्द बनकर उभरता है, कभी मोहब्बत बनकर दिल में उतरता है। यही तो कविता की असली ताकत है।",
  },
  {
    id: "2",
    title: "मंच और मोहब्बत",
    content:
      "जब शब्द मंच पर जीवित होते हैं, तो सिर्फ सुनाई नहीं देते — महसूस होते हैं। हर तालियों में छुपी होती है एक कहानी।",
  },
  {
    id: "3",
    title: "कवि का सफर",
    content:
      "हर कवि का सफर आसान नहीं होता। दर्द, यादें और एहसास मिलकर शब्द बनते हैं और वही शब्द दुनिया तक पहुँचते हैं।",
  },
];

export default function BlogSection() {
  const [comments, setComments] = useState<{ [key: string]: string[] }>({});
  const [input, setInput] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const saved = localStorage.getItem("blogComments");
    if (saved) setComments(JSON.parse(saved));
  }, []);

  const addComment = (id: string) => {
    if (!input[id]) return;

    const updated = {
      ...comments,
      [id]: [...(comments[id] || []), input[id]],
    };

    setComments(updated);
    localStorage.setItem("blogComments", JSON.stringify(updated));

    setInput({ ...input, [id]: "" });
  };

  return (
    <section className="py-32 px-6 bg-[#f5efe6]">

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl mx-auto mb-20"
      >
        <h2 className="
          text-4xl md:text-6xl font-semibold tracking-tight
          bg-gradient-to-r from-[#8c6a4a] via-[#caa97a] to-[#8c6a4a]
          bg-clip-text text-transparent
        ">
          Thoughts & Writings
        </h2>

        <p className="mt-5 text-[#5c4633] text-lg leading-relaxed">
          हर लफ़्ज़ में एक दुनिया छुपी है —
          बस उसे महसूस करने की देर है।
        </p>
      </motion.div>

      {/* BLOGS */}
      <div className="max-w-3xl mx-auto space-y-20">

        {blogs.map((blog, i) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="border-b border-black/10 pb-10"
          >

            {/* TITLE */}
            <h3 className="text-2xl md:text-3xl font-semibold text-[#2f241b]">
              {blog.title}
            </h3>

            {/* CONTENT */}
            <p className="mt-4 text-[#4b3a2b] leading-relaxed text-lg">
              {blog.content}
            </p>

            {/* COMMENTS DISPLAY */}
            <div className="mt-6 space-y-2">
              {(comments[blog.id] || []).map((c, index) => (
                <p
                  key={index}
                  className="text-sm text-[#6e5a45] bg-white/40 px-3 py-2 rounded-md"
                >
                  {c}
                </p>
              ))}
            </div>

            {/* INPUT */}
            <div className="mt-4 flex gap-3">
              <input
                type="text"
                placeholder="अपना विचार लिखें..."
                value={input[blog.id] || ""}
                onChange={(e) =>
                  setInput({ ...input, [blog.id]: e.target.value })
                }
                className="
                  flex-1 px-4 py-2 rounded-full
                  bg-white/60 backdrop-blur-md
                  border border-black/10
                  outline-none
                  text-sm
                "
              />

              <button
                onClick={() => addComment(blog.id)}
                className="
                  px-5 py-2 rounded-full
                  bg-[#8c6a4a] text-white
                  text-sm
                  hover:bg-[#6e543c]
                  transition
                "
              >
                Post
              </button>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}