import React, { useState } from "react";
import Section from "./ui/Section";
import Card from "./ui/Card";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "../constants";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";

const Contact: React.FC = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "54e4b387-2238-493c-806d-345a22f91b8d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResult("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="pb-0 py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 mb-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-10 tracking-tight leading-[1.05]">
            Let&apos;s build <br /> something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              extraordinary
            </span>
            .
          </h2>
          <p className="text-gray-400 text-xl mb-12 leading-relaxed font-sans max-w-xl">
            I&apos;m currently open to new opportunities for senior roles and
            impactful freelance collaborations.
          </p>

          <div className="space-y-10">
            <div className="flex items-center gap-6 group">
              <div className="p-5 glass rounded-[1.5rem] text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 scale-110">
                <Mail size={28} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500 font-black uppercase tracking-[0.2em] font-sans">
                  Email Me
                </p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="p-5 glass rounded-[1.5rem] text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 scale-110">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-500 font-black uppercase tracking-[0.2em] font-sans">
                  Based In
                </p>
                <p className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                  {CONTACT_INFO.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card className="p-4 bg-transparent border-0" hoverEffect={false}>
            <form
              onSubmit={onSubmit}
              className="glass-card p-10 lg:p-12 space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-400 font-sans tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-[1rem] px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all duration-300 font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-gray-400 font-sans tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-[1rem] px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all duration-300 font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 font-sans tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[1rem] px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all duration-300 font-sans"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-400 font-sans tracking-wide">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-[1rem] px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all duration-300 font-sans resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-white text-black font-black text-xl rounded-[1rem] hover:bg-white/90 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 font-sans uppercase tracking-widest shadow-2xl shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Sending <Loader2 className="w-6 h-6 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={22} strokeWidth={2.5} />
                    </>
                  )}
                </button>

                {result && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center font-bold font-sans ${
                      result.includes("successfully")
                        ? "text-accent"
                        : "text-red-400"
                    }`}
                  >
                    {result}
                  </motion.p>
                )}
              </div>
            </form>
          </Card>
        </motion.div>
      </div>

      <footer className="border-t border-white/5 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-gray-500 text-sm font-sans font-medium">
          © {new Date().getFullYear()} RAJNISH Pratap Singh. All rights
          reserved.
        </p>
        <div className="flex gap-10">
          <a
            href="#"
            className="text-gray-500 hover:text-white text-xs font-bold font-sans uppercase tracking-[0.2em] transition-colors"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white text-xs font-bold font-sans uppercase tracking-[0.2em] transition-colors"
          >
            Terms
          </a>
        </div>
      </footer>
    </Section>
  );
};

export default Contact;
