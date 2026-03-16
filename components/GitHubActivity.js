import Image from "next/image";
import SectionReveal from "./SectionReveal";

const username = "PeterKameel18";

const cards = [
  {
    title: "Contribution Streak",
    description: "Consistency over time with a focus on steady contribution.",
    src: `https://github-readme-streak-stats.herokuapp.com?user=${username}&theme=transparent&hide_border=true&stroke=0F172A&ring=22d3ee&fire=38bdf8&currStreakLabel=e2e8f0&sideLabels=94a3b8&currStreakNum=f8fafc&sideNums=f8fafc&dates=64748b`,
    alt: "GitHub streak statistics",
  },
  {
    title: "Commits and Repositories",
    description: "Overview of public activity, repository count, and commit history.",
    src: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&theme=transparent&title_color=f8fafc&text_color=94a3b8&icon_color=22d3ee&ring_color=38bdf8&include_all_commits=true&count_private=true`,
    alt: "GitHub stats showing commits and repositories",
  },
  {
    title: "Top Languages",
    description: "A quick snapshot of the technologies used most often in public repos.",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&theme=transparent&title_color=f8fafc&text_color=94a3b8`,
    alt: "GitHub top languages statistics",
  },
];

export default function GitHubActivity() {
  return (
    <section id="github" className="section-shell px-6 py-20 lg:px-8">
      <SectionReveal className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              GitHub Activity
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Contribution history presented in the same premium language as the
              rest of the portfolio.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            A quick look at streaks, commit volume, and repository activity from
            my GitHub profile.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card, index) => (
            <SectionReveal
              key={card.title}
              delay={index * 0.08}
              className={`glass-panel overflow-hidden rounded-3xl border border-white/10 p-5 shadow-xl shadow-black/20 transition duration-[250ms] ease-out hover:scale-[1.03] hover:border-cyan-300/35 hover:shadow-[0_18px_45px_rgba(34,211,238,0.14)] ${
                index === 2 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">
                    {card.description}
                  </p>
                </div>
                <span className="rounded-full border border-cyan-400/15 bg-cyan-400/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
                  Live
                </span>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-slate-950/70 p-3 sm:p-4">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={900}
                  height={360}
                  unoptimized
                  className="h-auto w-full rounded-[1rem]"
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
