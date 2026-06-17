import Reveal, { SectionHeader } from "./Reveal";
import { Briefcase, CheckCircle2 } from "lucide-react";

const bullets = [
  "Built responsive web pages using HTML, CSS, and JavaScript.",
  "Developed user-friendly interfaces following responsive design principles.",
  "Improved understanding of modern frontend development workflows.",
  "Collaborated on development tasks and gained practical industry exposure.",
];

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 bg-secondary/40 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title={<>Where I've been <span className="italic text-violet">learning.</span></>}
        />
        <Reveal>
          <article className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-soft md:grid-cols-[200px_1fr] md:gap-10 md:p-8">
            <div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-foreground text-background">
                <Briefcase className="h-6 w-6" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">May – Jun 2026</p>
              <p className="mt-1 font-medium">Internspark</p>
              <span className="mt-2 inline-flex rounded-full bg-violet/10 px-2.5 py-0.5 text-xs font-medium text-violet">
                Internship
              </span>
            </div>
            <div>
              <h3 className="font-display text-3xl leading-tight">Frontend Developer Intern</h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}