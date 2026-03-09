import React, { useState } from "react";
import Section from "./ui/Section";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "../constants";
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  Linkedin,
  Github,
  Sparkles,
} from "lucide-react";

const Contact: React.FC = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "54e4b387-2238-493c-806d-345a22f91b8d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        form.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch {
      setResult("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="relative overflow-hidden pb-0 py-24 md:py-32">
      <div className="pointer-events-none absolute -top-20 left-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-8 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 mb-24 items-start">
        <motion.div
          initial={{ x: -30 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gray-300">
            <Sparkles size={14} />
            LET&apos;S CONNECT
          </span>

          <h2 className="mt-5 text-5xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.05]">
            Let&apos;s build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              something great
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mt-6 mb-10 leading-relaxed font-sans max-w-xl">
            Open to senior engineering roles and focused freelance projects. If
            you have a product challenge, I can help ship it.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-200">
                <Mail size={18} />
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">
                Email
              </p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="mt-2 block text-base md:text-lg font-display font-bold text-white hover:text-cyan-200 transition-colors break-all"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet-300/30 bg-violet-400/10 text-violet-200">
                <MapPin size={18} />
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">
                Location
              </p>
              <p className="mt-2 text-base md:text-lg font-display font-bold text-white uppercase tracking-tight">
                {CONTACT_INFO.location}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-primary/40 hover:text-white"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-primary/40 hover:text-white"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-secondary/25 blur-xl opacity-70" />

          <form
            onSubmit={onSubmit}
            className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 xl:p-10 space-y-6 shadow-[0_26px_70px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                Send a message
              </h3>
              <span className="text-xs font-semibold tracking-[0.2em] text-gray-500">
                CONTACT
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.18em]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.18em]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.18em]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300"
                placeholder="Project collaboration"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.18em]">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-300 resize-none"
                placeholder="Tell me about your product, goals, and timeline..."
              />
            </div>

            <div className="space-y-4 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-white py-4 text-black font-black text-sm md:text-base uppercase tracking-[0.18em] transition-all duration-300 hover:bg-white/90 active:scale-[0.99] flex items-center justify-center gap-2.5 shadow-2xl shadow-white/10 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    Sending
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} strokeWidth={2.4} />
                  </>
                )}
              </button>

              {result && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center font-semibold text-sm ${
                    result.includes("successfully")
                      ? "text-emerald-300"
                      : "text-red-300"
                  }`}
                >
                  {result}
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
