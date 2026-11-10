"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
      level: 90,
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-500",
      level: 85,
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-500",
      level: 75,
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-500",
      level: 75,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-black",
      level: 70,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-600",
      level: 65,
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-500",
      level: 85,
    },
    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-orange-600",
      level: 70,
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color: "text-gray-900",
      level: 75,
    },
  ];

  return (
    <section id="skills" className="bg-[#f5f8fc] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-orange-500">
            My Skills
          </p>

          <h2 className="text-3xl font-bold text-[#1e2125] sm:text-4xl md:text-5xl">
            My Technical Skills
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            Technologies and tools I use to build modern and responsive
            web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Icon and Name */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#f5f8fc] transition duration-300 group-hover:bg-orange-50">
                    <Icon className={`text-3xl ${skill.color}`} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1e2125]">
                      {skill.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">
                      Technical Skill
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3 flex justify-between text-sm">
                  <span className="font-medium text-gray-500">
                    Skill Level
                  </span>

                  <span className="font-bold text-orange-500">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-orange-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
