import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Sparkles, MapPin, Github, Linkedin, ArrowUpRight, Code2, Star } from "lucide-react";
import roopshaAsset from "@/assets/roopsha-photo.png.asset.json";

const roopsha = roopshaAsset.url;

const roles = [
  "Frontend Developer",
  "Problem Solver",
  "CS Student @ VIT Bhopal",
  "React Enthusiast",
];

function useTyping(words: string[], speed = 70, pause = 1500) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";
    const delay = done ? pause : cleared ? 250 : deleting ? speed / 2 : speed;
    const t = setTimeout(() => {
      if (done) setDeleting(true);
      else if (cleared) {
        setDeleting(false);
        setI((v) => v + 1);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(roles);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 md:pt-44">
      {/* Background shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[30rem] w-[30rem] rounded-full bg-violet-soft opacity-70 blur-3xl" />
        <div className="absolute top-40 -right-20 h-[26rem] w-[26rem] rounded-full bg-accent opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-violet/20 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-10">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
            </span>
            Available for internships · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-[14vw] leading-[0.95] tracking-tight sm:text-7xl md:text-[88px] lg:text-[104px]"
          >
            Hi, I'm <br />
            <span className="italic">Roopsha</span>
            <span className="text-violet">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            A Computer Science Engineering student at VIT Bhopal University with a passion for
            frontend development, problem-solving, and creating modern web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 flex h-7 items-center gap-2 text-sm text-foreground/80"
          >
            <Sparkles className="h-4 w-4 text-violet" />
            <span className="font-medium">{typed}</span>
            <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-foreground/70" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:scale-[1.03] hover:shadow-soft"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              View Skills →
            </a>
          </motion.div>
        </div>

        {/* Right — bento */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative grid grid-cols-2 grid-rows-[200px_180px_140px] gap-3 sm:gap-4"
        >
          {/* Photo */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="group relative col-span-1 row-span-2 overflow-hidden rounded-[28px] bg-gradient-to-br from-violet/30 via-secondary to-accent/40 shadow-soft ring-1 ring-border/60"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--violet)/0.35),transparent_60%)]" />
            <img
              src={roopsha}
              alt="Portrait of Roopsha Ghosh"
              width={1024}
              height={1024}
              className="relative h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
              <Star className="h-3 w-3 fill-violet text-violet" /> Aspiring SDE
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl bg-background/85 px-3 py-2 text-xs backdrop-blur">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="h-3.5 w-3.5 text-violet" /> Jabalpur, India
              </span>
              <span className="rounded-full bg-violet/15 px-2 py-0.5 font-medium text-violet">CS '28</span>
            </div>
          </motion.div>

          {/* Stat card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[28px] bg-foreground p-5 text-background shadow-soft"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/30 blur-2xl" />
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] opacity-70">Currently</span>
              <Code2 className="h-4 w-4 opacity-70" />
            </div>
            <div className="relative">
              <p className="font-display text-2xl leading-tight sm:text-3xl">Building<br /> frontend skills.</p>
              <p className="mt-2 text-xs opacity-70">React · Tailwind · DSA in C++</p>
            </div>
          </motion.div>

          {/* Gradient brand card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative col-span-1 row-span-1 overflow-hidden rounded-[28px] p-5 text-foreground shadow-soft gradient-violet"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(255,255,255,0.25),transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <p className="text-xs font-medium uppercase tracking-wider text-background/80">Stack I love</p>
              <p className="font-display text-xl leading-tight text-background sm:text-2xl">
                React · JS · Tailwind
              </p>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="col-span-2 flex items-center justify-between rounded-[28px] border border-border/70 bg-card/80 p-4 shadow-soft backdrop-blur"
          >
            <div className="text-sm">
              <p className="flex items-center gap-1.5 font-medium">
                Let's connect <ArrowUpRight className="h-3.5 w-3.5 text-violet" />
              </p>
              <p className="text-xs text-muted-foreground">Open to roles & collaborations</p>
            </div>
            <div className="flex items-center gap-2">
              {[
                { href: "https://github.com/roopshaghosh", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/roopsha-ghosh", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:roopshaghosh074@gmail.com", icon: Mail, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-foreground transition-all hover:-translate-y-0.5 hover:bg-violet hover:text-background"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}