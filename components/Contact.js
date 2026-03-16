import MotionButton from "./MotionButton";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  return (
    <section id="contact" className="section-shell px-6 py-16 sm:py-20 lg:px-8">
      <SectionReveal className="glass-panel mx-auto max-w-4xl rounded-[2.2rem] p-8 text-center shadow-2xl shadow-black/20 sm:p-12">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Contact
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Open to internships, junior roles, and freelance opportunities.
          </h2>
          <p className="mx-auto max-w-2xl leading-8 text-slate-300">
            Open to internships, junior roles, and freelance opportunities. If
            you&apos;re looking for a backend or full-stack developer to
            contribute to your team, feel free to reach out.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MotionButton
            href="mailto:pkthabet@gmail.com"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-[0_10px_35px_rgba(34,211,238,0.2)] transition hover:from-cyan-300 hover:to-sky-300 sm:w-auto"
          >
            Email Me
          </MotionButton>
          <MotionButton
            href="https://github.com/PeterKameel18"
            target="_blank"
            rel="noreferrer"
            className="glass-panel inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
          >
            GitHub
          </MotionButton>
          <MotionButton
            href="https://www.linkedin.com/in/peter-boles-9514321aa/"
            target="_blank"
            rel="noreferrer"
            className="glass-panel inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 sm:w-auto"
          >
            LinkedIn
          </MotionButton>
        </div>
      </SectionReveal>
    </section>
  );
}
