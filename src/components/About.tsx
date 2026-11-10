"use client";

import { motion } from "framer-motion";

export default function About() {
  const focusAreas = [
    {
      icon: "💻",
      title: "Frontend Development",
      description:
        "Building modern and user-friendly web interfaces with React and Next.js.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Creating websites that work smoothly on mobile, tablet and desktop.",
    },
    {
      icon: "🔗",
      title: "API Integration",
      description:
        "Connecting frontend applications with REST APIs and backend services.",
    },
  ];

  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-orange-500">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-[#1e2125] sm:text-4xl md:text-5xl">
            Know More About Me
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            A little introduction about my journey, passion and goals
            in web development.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-orange-500">
              My Introduction
            </p>

            <h3 className="mb-6 text-3xl font-bold leading-tight text-[#1e2125] md:text-4xl">
              I&apos;m Md Torikul Islam, an Aspiring Frontend Developer.
            </h3>

            <p className="mb-5 leading-8 text-gray-500">
              I am passionate about building responsive, modern and
              user-friendly web applications. I enjoy turning ideas
              into functional websites using modern web technologies.
            </p>

            <p className="mb-5 leading-8 text-gray-500">
              I have been developing my skills in HTML, CSS, JavaScript,
              React, Next.js and Tailwind CSS through practical projects
              and continuous learning.
            </p>

            <p className="mb-8 leading-8 text-gray-500">
              My goal is to start my career as a Junior Frontend Developer,
              contribute to real-world projects and grow as a professional
              web developer.
            </p>

            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-md bg-orange-500 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Explore My Projects
              <span className="text-lg">↗</span>
            </a>
          </motion.div>

          {/* Right Side */}
          <div className="space-y-5">
            {focusAreas.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group flex gap-5 rounded-xl border border-gray-100 bg-[#f8fafc] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white text-3xl shadow-md transition duration-300 group-hover:bg-orange-500">
                  <span className="transition group-hover:scale-110">
                    {item.icon}
                  </span>
                </div>

                <div>
                  <h4 className="mb-2 text-lg font-bold text-[#1e2125] transition group-hover:text-orange-500">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
