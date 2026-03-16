import ProjectCard from "./ProjectCard";
import SectionReveal from "./SectionReveal";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-shell px-6 py-16 sm:py-20 lg:px-8">
      <SectionReveal className="mx-auto max-w-6xl space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              Projects
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Real-world products designed around backend depth and smooth user
              flows.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Selected work focused on reliability, live interactions, and
            product experiences that feel modern without sacrificing structure.
          </p>
        </div>

        <div className="flex justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
