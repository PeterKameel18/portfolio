"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  SiFirebase,
  SiFlutter,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import MotionButton from "./MotionButton";

const previewImages = [
  {
    src: "/tariqi-map.png",
    alt: "Tariqi app map screen",
  },
  {
    src: "/tariqi-menu.png",
    alt: "Tariqi app menu screen",
  },
  {
    src: "/tariqi-login.png",
    alt: "Tariqi app login screen",
  },
];

const architectureCards = [
  {
    title: "Flutter Mobile App",
    subtitle: "Client application",
    icon: SiFlutter,
    iconClassName: "text-sky-300",
  },
  {
    title: "Node.js + Express Backend",
    subtitle: "API and ride orchestration",
    icon: SiNodedotjs,
    iconClassName: "text-emerald-300",
  },
  {
    title: "MongoDB Database",
    subtitle: "Persistent ride and user data",
    icon: SiMongodb,
    iconClassName: "text-green-400",
  },
];

export default function ProjectCard({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % previewImages.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="glass-panel group relative mx-auto flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/85 via-slate-900/70 to-slate-950/85 p-4 shadow-[0_25px_80px_rgba(2,12,27,0.45)] transition duration-[250ms] ease-out hover:border-cyan-300/40 hover:shadow-[0_24px_70px_rgba(34,211,238,0.16)] sm:p-5 lg:p-6"
    >
      <div className="absolute left-10 top-0 h-px w-40 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
      <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/18" />

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:gap-8">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-4 sm:p-5">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),transparent_40%,rgba(59,130,246,0.1))]" />
          <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

          <div className="relative flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,0.94))] p-4 sm:min-h-[420px] sm:p-6">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/6 via-transparent to-blue-500/8" />

            <div className="relative w-full max-w-[15rem] rounded-[2.4rem] border border-white/10 bg-slate-950/95 p-2.5 shadow-[0_22px_60px_rgba(2,12,27,0.52)] sm:max-w-[17rem]">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-slate-950">
                <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-4">
                  <div className="h-1.5 w-16 rounded-full bg-white/10" />
                </div>

                <div className="relative aspect-[9/19]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={previewImages[activeIndex].src}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={previewImages[activeIndex].src}
                        alt={previewImages[activeIndex].alt}
                        fill
                        sizes="(max-width: 1024px) 80vw, 320px"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-center p-4 sm:p-8 lg:p-10">
          <div className="flex items-center justify-between gap-4">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Featured Project
            </span>
            <span className="text-sm text-slate-500">{project.year}</span>
          </div>

          <div className="mt-8 space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
              {project.category}
            </p>
            <h3 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {project.title}
            </h3>
            <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              {project.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/8 bg-slate-950/70 px-3 py-1.5 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MotionButton
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-5 py-4 text-sm font-semibold text-slate-950 shadow-[0_12px_35px_rgba(34,211,238,0.2)] transition hover:from-cyan-300 hover:to-sky-300 sm:w-auto"
            >
              View Demo
            </MotionButton>
            <MotionButton
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-4 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/10 group-hover:text-cyan-200 sm:w-auto"
            >
              GitHub Repository
            </MotionButton>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(2,6,23,0.72))] p-6 shadow-inner shadow-black/20 sm:p-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            System Architecture
          </p>
          <h4 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            A clean flow from mobile app to backend services and persistent
            storage.
          </h4>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_0.95fr] lg:items-center">
          {architectureCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div key={card.title} className="contents">
                <div className="glass-panel rounded-[1.5rem] border border-white/10 p-5 shadow-lg shadow-black/20">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                    <Icon size={24} className={card.iconClassName} />
                  </div>
                  <h5 className="text-base font-semibold text-white">
                    {card.title}
                  </h5>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {card.subtitle}
                  </p>
                </div>

                {index < architectureCards.length - 1 ? (
                  <>
                    <div className="hidden lg:flex items-center justify-center text-cyan-300">
                      <ArrowRight size={24} />
                    </div>
                    <div className="flex justify-center text-cyan-300 lg:hidden">
                      <ArrowDown size={24} />
                    </div>
                  </>
                ) : null}
              </div>
            );
          })}

          <div className="glass-panel rounded-[1.5rem] border border-white/10 p-5 shadow-lg shadow-black/20 lg:ml-2">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
              <SiFirebase size={24} className="text-amber-300" />
            </div>
            <h5 className="text-base font-semibold text-white">Firebase</h5>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Notifications and real-time services supporting ride updates.
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-8 text-slate-300 sm:text-base">
          The Flutter mobile application communicates with a Node.js backend
          API. The backend handles authentication, ride matching, and location
          updates, while MongoDB stores user and ride data. Firebase is used
          for notifications and real-time services.
        </p>
      </div>
    </motion.article>
  );
}
