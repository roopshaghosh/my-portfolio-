import Reveal, { SectionHeader } from "./Reveal";
import { Layout, Smartphone } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Frontend Web Development",
    desc: "Building responsive, modern, and user-friendly websites using current frontend technologies like React, JavaScript and Tailwind CSS.",
  },
  {
    icon: Smartphone,
    title: "Responsive Website Design",
    desc: "Designing websites that work seamlessly across desktops, tablets, and mobile devices with careful attention to detail.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title={<>What I <span className="italic text-violet">can do.</span></>}
        />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-violet/40 hover:shadow-glow">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet/10 blur-2xl transition-all group-hover:scale-125" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground text-background">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-3xl leading-tight">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.desc}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-violet"
                  >
                    Let's work together →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}