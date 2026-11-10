"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const mailtoLink = `mailto:ibrahimabdulla12651@gmail.com?subject=${encodeURIComponent(
      String(subject)
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
    form.reset();
  };

  return (
    <section id="contact" className="bg-[#f5f8fc] px-6 py-24">
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
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold text-[#1e2125] sm:text-4xl md:text-5xl">
            Contact With Me
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
            Have a project, job opportunity or any questions?
            Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-white p-8 shadow-md md:p-10"
          >
            <h3 className="mb-4 text-2xl font-bold text-[#1e2125]">
              Contact Information
            </h3>

            <p className="mb-8 leading-7 text-gray-500">
              I am open to Junior Frontend Developer opportunities
              and collaboration on interesting projects.
            </p>

            {/* Email */}
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-2xl">
                ✉️
              </div>

              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:ibrahimabdulla12651@gmail.com"
                  className="break-all font-semibold text-gray-800 transition hover:text-orange-500"
                >
                  ibrahimabdulla12651@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-2xl">
                📞
              </div>

              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a
                  href="tel:01300704253"
                  className="font-semibold text-gray-800 transition hover:text-orange-500"
                >
                  01300704253
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-2xl">
                📍
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold text-gray-800">
                  Bogura, Bangladesh
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-gray-100 pt-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-gray-500">
                Find Me On
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Torikul45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#f5f8fc] px-5 py-3 font-semibold text-gray-700 transition hover:-translate-y-1 hover:text-orange-500"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/torikul-islam45/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#f5f8fc] px-5 py-3 font-semibold text-gray-700 transition hover:-translate-y-1 hover:text-orange-500"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-white p-8 shadow-md md:p-10"
          >
            <h3 className="mb-3 text-2xl font-bold text-[#1e2125]">
              Send Me a Message
            </h3>

            <p className="mb-8 text-sm leading-7 text-gray-500">
              Fill out the form below to get in touch with me.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Enter subject"
                  className="w-full rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-gray-200 bg-[#f8fafc] px-4 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-orange-500 px-6 py-4 font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                Send Message ↗
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
