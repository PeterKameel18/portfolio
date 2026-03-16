import About from "../components/About";
import AnimatedGlowBackground from "../components/AnimatedGlowBackground";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GitHubActivity from "../components/GitHubActivity";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack";
import { projects, techStacks } from "../components/portfolioData";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <AnimatedGlowBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <TechStack stacks={techStacks} />
        <Projects projects={projects} />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
