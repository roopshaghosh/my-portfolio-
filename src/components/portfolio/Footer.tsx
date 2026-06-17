import { Github, Linkedin, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-2xl leading-none">Roopsha Ghosh<span className="text-violet">.</span></p>
          <p className="mt-2 text-sm text-muted-foreground">
            © 2026 Roopsha Ghosh. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/roopshaghosh"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-violet hover:text-background"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/roopsha-ghosh"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card transition-colors hover:bg-violet hover:text-background"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
      </div>
    </footer>
  );
}