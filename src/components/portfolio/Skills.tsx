import Reveal, { SectionHeader } from "./Reveal";
import { Code, Cpu, Wrench, Users } from "lucide-react";

type Skill = { name: string; level: number };

const groups: { title: string; icon: typeof Code; skills: Skill[] }[] = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "React.js", level: 70 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Programming",
    icon: Cpu,
    skills: [
      { name: "C++", level: 80 },
      { name: "Data Structures & Algorithms", level: 70 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 75 },
      { name: "GitHub", level: 80 },
    ],
  },
  {
    title: "Professional",
    icon: Users,
    skills: [
      { name: "Problem Solving", level: 80 },
      { name: "Team Collaboration", level: 85 },
      { name: "Communication", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title={<>The <span className="italic text-violet">toolkit</span> I build with.</>}
          description="A growing stack of frontend, programming, and collaboration skills — refined through coursework and self-driven projects."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.06}>
              <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-violet/40 hover:shadow-glow">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet/10 text-violet transition-colors group-hover:bg-violet group-hover:text-background">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl">{g.title}</h3>
                </div>
                <ul className="mt-5 space-y-3.5">
                  {g.skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-xs text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full gradient-violet transition-[width] duration-700"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}