import Reveal, { SectionHeader } from "./Reveal";
import { GraduationCap } from "lucide-react";

const items = [
  {
    title: "B.Tech in Computer Science & Engineering",
    org: "VIT Bhopal University",
    period: "Expected 2028",
    tag: "Undergraduate",
  },
  {
    title: "Class 12 — Senior Secondary",
    org: "St. Gabriel's Senior Secondary School, Jabalpur, MP",
    period: "2024",
    tag: "School",
  },
  {
    title: "Class 10 — Secondary",
    org: "St. Gabriel's Senior Secondary School",
    period: "2022",
    tag: "School",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 bg-secondary/40 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Education"
          title={<>An academic <span className="italic text-violet">journey.</span></>}
        />
        <div className="relative ml-3 sm:ml-6">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border sm:left-4" />
          <ul className="space-y-6">
            {items.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <li className="relative pl-10 sm:pl-14">
                  <span className="absolute left-0 top-4 grid h-7 w-7 place-items-center rounded-full border border-border bg-card shadow-soft sm:left-1">
                    <GraduationCap className="h-3.5 w-3.5 text-violet" />
                  </span>
                  <div className="group glass rounded-3xl p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-violet/10 px-2.5 py-0.5 text-xs font-medium text-violet">
                        {e.tag}
                      </span>
                      <span className="text-xs text-muted-foreground">{e.period}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl leading-snug">{e.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}