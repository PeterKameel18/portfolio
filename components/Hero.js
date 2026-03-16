"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MotionButton from "./MotionButton";
import SectionReveal from "./SectionReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative overflow-hidden px-6 py-16 sm:py-20 lg:px-8 lg:py-36"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_58%)]" />
      <div className="absolute left-[8%] top-24 -z-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-[8%] top-36 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <SectionReveal className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-sm text-slate-200 shadow-[0_0_0_1px_rgba(14,165,233,0.06)]">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
            Available for internships, junior roles, and freelance work
          </div>

          <div className="mt-8 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-cyan-300">
              Backend &amp; Full-Stack Developer
            </p>

            <h1 className="max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl xl:text-[5.5rem] xl:leading-[0.95]">
              Building scalable APIs, real-time systems, and modern mobile
              applications.
            </h1>

            <p className="w-full max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              I&apos;m Peter Kameel Thabet Boles, a Computer Engineering student
              at Cairo University. I build real-world applications with a focus
              on clean architecture, reliable backend systems, and practical
              solutions that scale.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MotionButton
              href="#projects"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(34,211,238,0.22)] transition hover:from-cyan-300 hover:to-sky-300 sm:w-auto"
            >
              View Projects
            </MotionButton>
            <MotionButton
              href="https://github.com/PeterKameel18"
              target="_blank"
              rel="noreferrer"
              className="glass-panel inline-flex w-full items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/8 sm:w-auto"
            >
              GitHub Profile
            </MotionButton>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <div>
              <p className="text-2xl font-semibold text-white">3+</p>
              <p>Core backend technologies</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">Real-time</p>
              <p>Systems, chat, and live tracking</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-x-8 top-12 -z-10 h-72 rounded-full bg-cyan-400/12 blur-[90px]" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass-panel relative w-full max-w-[24rem] rounded-3xl p-4 shadow-xl sm:p-5"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.32em] text-cyan-300">
                  Featured Project
                </p>
                <h2 className="mt-3 text-lg font-semibold text-white">
                  Tariqi - Ride Sharing Platform
                </h2>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                Mobile
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.96))] p-3 shadow-inner shadow-black/30">
              <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_70%)]" />

              <div className="mx-auto w-full max-w-[15rem] rounded-[2.2rem] border border-white/10 bg-slate-950/95 p-2.5 shadow-[0_20px_50px_rgba(2,12,27,0.5)]">
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,15,30,0.96),rgba(15,23,42,0.92))]">
                  <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-4">
                    <div className="h-1.5 w-16 rounded-full bg-white/10" />
                  </div>

                  <Image
                    src="/tariqi-map.png"
                    alt="Tariqi app map screen"
                    width={600}
                    height={1200}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionReveal>
    </section>
  );
}
