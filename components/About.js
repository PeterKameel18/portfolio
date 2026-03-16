import {
  Activity,
  Code,
  Layers,
  Server,
  Smartphone,
} from "lucide-react";
import SectionReveal from "./SectionReveal";

const highlights = [
  {
    title: "Backend Architecture",
    icon: Server,
  },
  {
    title: "Real-Time Systems",
    icon: Activity,
  },
  {
    title: "Mobile Applications",
    icon: Smartphone,
  },
  {
    title: "Clean Code",
    icon: Code,
  },
  {
    title: "Maintainable Systems",
    icon: Layers,
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell px-6 py-16 sm:py-20 lg:px-8">
      <SectionReveal className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-6 pt-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            About
          </p>

          <div className="space-y-5">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Engineering clean systems behind polished digital products.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I&apos;m a Computer Engineering student passionate about backend
              development, distributed systems, and building reliable APIs.
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I enjoy designing systems that are maintainable, scalable, and
              ready for real users. My work focuses on real-time applications,
              backend architecture, and modern mobile-backend integrations.
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
              Focus Areas
            </p>
            <span className="rounded-full border border-cyan-400/15 bg-cyan-400/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
              Core Skills
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ title, icon: Icon }, index) => (
              <SectionReveal
                key={title}
                delay={index * 0.08}
                className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-5 shadow-lg shadow-black/20 transition duration-[250ms] ease-out hover:scale-[1.03] hover:border-cyan-400/40 hover:shadow-[0_18px_45px_rgba(34,211,238,0.14)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10">
                  <Icon size={26} className="text-cyan-400" />
                </div>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Built with clarity, maintainability, and practical product
                  thinking in mind.
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
