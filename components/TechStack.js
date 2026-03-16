import SectionReveal from "./SectionReveal";

export default function TechStack({ stacks }) {
  return (
    <section id="tech-stack" className="section-shell px-6 py-16 sm:py-20 lg:px-8">
      <SectionReveal className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Tech Stack
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The technologies I use to build modern, reliable applications.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stacks.map((group, index) => (
            <article
              key={group.title}
              className="glass-panel rounded-[1.9rem] p-6 transition duration-[250ms] ease-out hover:scale-[1.03] hover:border-cyan-300/35 hover:bg-white/[0.08] hover:shadow-[0_18px_45px_rgba(34,211,238,0.14)]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <span className="text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/10 bg-slate-950/70 px-3 py-2 text-sm text-slate-200 shadow-inner shadow-black/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
