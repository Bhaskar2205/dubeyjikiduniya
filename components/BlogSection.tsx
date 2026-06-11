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


      {/* POETRY UNIVERSE CTA */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative mt-24 md:mt-40 px-4"
>
  <div
    className="
      relative
      overflow-hidden
      rounded-[32px] md:rounded-[48px]
      border border-[#d9c7b0]/40
      bg-gradient-to-br
      from-[#faf7f2]
      via-[#f5efe6]
      to-[#efe3d3]
      shadow-[0_25px_80px_rgba(0,0,0,0.08)]
    "
  >
    {/* Luxury Ambient Lights */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#caa97a]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#8c6a4a]/10 blur-[100px]" />
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-white/30 blur-[80px]" />
    </div>

    <div className="relative z-10 px-6 md:px-16 py-16 md:py-24">

      {/* Quote Mark */}
      <div className="text-center">
        <span className="text-[70px] md:text-[110px] leading-none text-[#caa97a]/40 font-serif">
          "
        </span>
      </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <h3
          className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            font-semibold
            leading-[1.15]
            tracking-tight
            text-[#2f241b]
          "
        >
          कुछ एहसास
          <span className="block mt-2">
            पढ़े नहीं जाते...
          </span>

          <span
            className="
              block
              mt-4
              bg-gradient-to-r
              from-[#8c6a4a]
              via-[#caa97a]
              to-[#8c6a4a]
              bg-clip-text
              text-transparent
            "
          >
            महसूस किए जाते हैं।
          </span>
        </h3>

        <p
          className="
            mt-8
            text-base
            md:text-xl
            leading-relaxed
            text-[#5e4c3b]
            max-w-2xl
            mx-auto
          "
        >
          अगर मेरी कविताएँ आपके दिल तक पहुँची हैं,
          तो आइए इस सफर को आगे बढ़ाते हैं।
          मंच की आवाज़, अनकहे जज़्बात और नई रचनाएँ —
          सब कुछ YouTube पर आपका इंतज़ार कर रहा है।
        </p>
      </div>

      {/* Divider */}
      <div className="flex justify-center my-10 md:my-14">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#caa97a] to-transparent" />
      </div>

      {/* Subscribe Button */}
      <div className="flex justify-center">
        <motion.a
          href="https://www.youtube.com/@Eshandubeypoetry"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            inline-flex
            items-center
            gap-4
            rounded-full
            px-6
            md:px-10
            py-4
            md:py-5
            bg-[#8c6a4a]
            text-white
            font-medium
            shadow-[0_20px_40px_rgba(140,106,74,0.25)]
            transition-all
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white/15
              backdrop-blur-md
              group-hover:rotate-12
              transition
            "
          >
            ▶
          </div>

          <span className="text-sm md:text-base">
            Subscribe on YouTube
          </span>
        </motion.a>
      </div>

      {/* Small Elegant Footer Text */}
      <p
        className="
          text-center
          mt-8
          text-xs
          md:text-sm
          tracking-[0.25em]
          uppercase
          text-[#8c6a4a]
        "
      >
        Poetry • Stories • Live Performances
      </p>

    </div>
  </div>
</motion.section>

    </section>
  );
}