"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      name: "StudioSpace",
      category: "Studio Booking Platform",
      description:
        "A studio booking platform where users can explore studios and book spaces for different creative activities.",
      technologies: ["Next.js", "Express.js", "MongoDB"],
      link: "https://studio-space-client-psi.vercel.app/",
      linkText: "Live Demo",
      icon: "🎬",
      gradient: "from-orange-100 to-amber-50",
      color: "text-orange-500",
    },
    {
      name: "FitLog",
      category: "Fitness Tracking Application",
      description:
        "A fitness tracking application to explore workouts and manage personal workout plans.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/Torikul45/my-a6-fitlog",
      linkText: "GitHub Repository",
      icon: "💪",
      gradient: "from-lime-100 to-green-50",
      color: "text-lime-700",
    },
    {
      name: "Bazar Dor",
      category: "Grocery Price Website",
      description:
        "A Bangla grocery price website that helps users explore essential product prices in one place.",
      technologies: ["Next.js", "Tailwind CSS", "API"],
      link: "https://github.com/Torikul45/my-a7-bazar-dor",
      linkText: "GitHub Repository",
      icon: "🛒",
      gradient: "from-emerald-100 to-green-50",
      color: "text-green-700",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#f5f8fc] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-orange-500">
            My Portfolio
          </p>

          <h2 className="text-3xl font-bold text-[#1e2125] sm:text-4xl md:text-5xl">
            My Recent Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            Here are some projects I have built during my learning journey.
            Each project helped me improve my development skills.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Project Preview */}
              <div
                className={`relative mb-7 flex h-52 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white" />
                  <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white" />
                </div>

                <div className="relative text-center transition duration-500 group-hover:scale-110">
                  <span className="text-6xl">
                    {project.icon}
                  </span>

                  <h3
                    className={`mt-4 text-2xl font-bold ${project.color}`}
                  >
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Project Details */}
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-orange-500">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold text-[#1e2125] transition group-hover:text-orange-500">
                {project.name}
              </h3>

              <p className="mt-4 min-h-24 leading-7 text-gray-500">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-[#f5f8fc] px-3 py-2 text-xs font-semibold text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              <div className="mt-7 border-t border-gray-100 pt-5">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-[#1e2125] transition duration-300 hover:gap-4 hover:text-orange-500"
                >
                  {project.linkText}

                  <span className="text-xl">↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
