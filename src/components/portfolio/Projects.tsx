import Reveal, { SectionHeader } from "./Reveal";
import { Github, Hourglass, GitBranch, Star } from "lucide-react";

const upcoming = [
  { title: "Personal Dashboard", desc: "A React + Tailwind dashboard exploring data visualization and component design." },
  { title: "DSA Visualizer", desc: "Interactive visualizations of sorting and graph algorithms — built to deepen DSA intuition." },
  { title: "Mini SaaS Landing", desc: "A polished marketing page experimenting with motion, glassmorphism, and modern layouts." },
];

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 bg-secondary/40 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title={<>Projects & <span className="italic text-violet">learning journey.</span></>}
          description="Currently building frontend projects and expanding my portfolio. New projects will be added soon as I continue learning and developing real-world applications."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {upcoming.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-dashed border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-violet/50">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-violet/10 px-2.5 py-1 text-xs font-medium text-violet">
                    <Hourglass className="h-3 w-3" /> Coming soon
                  </span>
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex h-24 items-center justify-center rounded-2xl bg-gradient-to-br from-violet/10 to-accent text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet [animation-delay:0.15s]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet [animation-delay:0.3s]" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <a
            href="https://github.com/roopshaghosh"
            target="_blank"
            rel="noreferrer"
            className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow md:flex-row md:items-center md:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background">
                <Github className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl leading-tight">Follow my GitHub</p>
                <p className="text-sm text-muted-foreground">@roopshaghosh — code, learning logs, contributions.</p>
              </div>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5">
                <GitBranch className="h-3.5 w-3.5 text-violet" /> Active
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5">
                <Star className="h-3.5 w-3.5 text-violet" /> Learning in public
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}