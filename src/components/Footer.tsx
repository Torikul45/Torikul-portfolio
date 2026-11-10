"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#1e2125] px-6 py-14 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Footer Main */}
        <div className="grid gap-10 border-b border-gray-700 pb-10 md:grid-cols-3">

          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">
              Md Torikul <span className="text-orange-500">Islam.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Junior Frontend Developer passionate about building
              modern, responsive and user-friendly web applications.
            </p>

            <p className="mt-5 text-sm font-semibold text-orange-500">
              Let&apos;s build something amazing!
            </p>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              <a href="#home" className="transition hover:text-orange-500">
                Home
              </a>

              <a href="#about" className="transition hover:text-orange-500">
                About
              </a>

              <a href="#projects" className="transition hover:text-orange-500">
                Projects
              </a>

              <a href="#skills" className="transition hover:text-orange-500">
                Skills
              </a>

              <a href="#contact" className="transition hover:text-orange-500">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold">
              Find Me On
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-400">
              Connect with me through my social profiles.
            </p>

            <div className="flex gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/Torikul45"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2b3036] text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/torikul-islam45/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2b3036] text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 text-center sm:flex-row">
          <p className="text-sm text-gray-400">
            © 2026{" "}
            <span className="font-semibold text-white">
              Md Torikul Islam
            </span>
            . All Rights Reserved.
          </p>

          <a
            href="#home"
            className="text-sm font-semibold text-gray-300 transition hover:text-orange-500"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
