import { Code2, Lightbulb, GraduationCap, Sprout, Rocket } from "lucide-react";
import Reveal, { SectionHeader } from "./Reveal";

const highlights = [
  { icon: GraduationCap, label: "Computer Science Student" },
  { icon: Code2, label: "Frontend Development Enthusiast" },
  { icon: Lightbulb, label: "Problem Solver" },
  { icon: Sprout, label: "Continuous Learner" },
  { icon: Rocket, label: "Future Software Engineer" },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About me"
          title={<>A curious mind, <span className="italic text-violet">always building.</span></>}
        />
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm currently pursuing a <span className="text-foreground font-medium">B.Tech in Computer
                Science and Engineering</span> from VIT Bhopal University. My goal is to become a
                Software Developer and contribute to innovative technology solutions.
              </p>
              <p>
                I enjoy exploring new technologies, designing user-friendly interfaces, and
                continuously learning modern development practices. Right now I'm focused on{" "}
                <span className="text-foreground font-medium">frontend development</span> and
                strengthening my problem-solving abilities through Data Structures and Algorithms.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">What defines me</p>
              <ul className="mt-4 space-y-2">
                {highlights.map((h) => (
                  <li
                    key={h.label}
                    className="group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2.5 transition-all hover:border-border hover:bg-card"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet/10 text-violet transition-colors group-hover:bg-violet group-hover:text-background">
                      <h.icon className="h-4 w-4" />
                    </span>
                    <span className="font-medium">{h.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}