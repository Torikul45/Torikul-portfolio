"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const title = "A Junior Frontend Developer";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let pause = 0;

    const timer = setInterval(() => {
      if (pause > 0) {
        pause--;
        return;
      }

      if (!deleting) {
        index++;
        setDisplayText(title.slice(0, index));

        if (index >= title.length) {
          deleting = true;
          pause = 12;
        }
      } else {
        index--;
        setDisplayText(title.slice(0, index));

        if (index <= 0) {
          deleting = false;
          pause = 3;
        }
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-[#f5f8fc]">
      <div className="mx-auto grid min-h-[calc(100vh-70px)] max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-2 md:py-20">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[4px] text-orange-500">
            Welcome to my world
          </p>

          {/* Name */}
          <h1 className="whitespace-nowrap text-[clamp(1.65rem,4.5vw,3.75rem)] font-bold leading-tight text-[#1e2125]">
            Hi, I&apos;m{" "}
            <span className="text-orange-500">
              Md Torikul Islam
            </span>
          </h1>

          {/* Typing Animation */}
          <h2 className="mt-6 min-h-10 text-xl font-bold text-orange-500 sm:text-3xl">
            {displayText.split("").map((letter, index) => (
              <motion.span
                key={`${index}-${letter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05 }}
              >
                {letter}
              </motion.span>
            ))}

            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              |
            </motion.span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 md:text-lg">
            I build responsive, modern and user-friendly websites
            using React, Next.js, JavaScript and Tailwind CSS.
            I love learning new technologies and turning ideas
            into real-world web applications.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-md border border-gray-300 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#1e2125] transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:text-orange-500"
            >
              Contact Me
            </a>

            {/* Download CV Button */}
            <a
              href="/Torikul-Islam-CV.pdf"
              download="Md-Torikul-Islam-CV.pdf"
              className="rounded-md border border-orange-500 bg-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              ↓ Download CV
            </a>
          </div>

          {/* Find Me On + Best Skills */}
          <div className="mt-12 grid grid-cols-2 gap-6">

            {/* Find Me On */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Find Me On
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/Torikul45"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-gray-700 shadow-md transition duration-300 hover:-translate-y-2 hover:text-orange-500"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/torikul-islam45/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-14 w-14 items-center justify-center rounded-lg bg-white text-gray-700 shadow-md transition duration-300 hover:-translate-y-2 hover:text-orange-500"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Best Skills */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Best Skills
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Next.js", icon: "▲" },
                  { name: "Tailwind", icon: "🌊" },
                  { name: "JavaScript", icon: "🟨" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="flex h-14 items-center gap-2 rounded-lg bg-white px-3 text-sm font-semibold text-gray-600 shadow-md transition duration-300 hover:-translate-y-1 hover:text-orange-500"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-105"
          >
            <div className="absolute inset-x-0 bottom-0 top-28 rounded-md bg-[#e5eaee] shadow-xl" />

            <div className="relative mx-auto w-full overflow-hidden rounded-md bg-white shadow-[0_10px_30px_rgba(30,50,80,0.12)]">
              <Image
                src="/profile.png"
                alt="Md Torikul Islam"
                width={450}
                height={550}
                priority
                className="h-111.25 w-full object-cover object-top sm:h-130"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
