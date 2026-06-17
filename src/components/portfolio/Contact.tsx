import { useState } from "react";
import { Copy, Check, Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";
import Reveal, { SectionHeader } from "./Reveal";

const EMAIL = "roopshaghosh074@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's <span className="italic text-violet">connect.</span></>}
          description="Have a role, project, or just want to say hi? I'd love to hear from you."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-border bg-card p-7 shadow-soft">
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group flex w-full items-center justify-between rounded-2xl border border-border bg-secondary/60 p-4 text-left transition-colors hover:bg-secondary"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet text-background">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</p>
                      <p className="font-medium">{EMAIL}</p>
                    </div>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-card text-muted-foreground transition-colors group-hover:text-foreground">
                    {copied ? <Check className="h-4 w-4 text-violet" /> : <Copy className="h-4 w-4" />}
                  </span>
                </button>
                <a
                  href="https://www.linkedin.com/in/roopsha-ghosh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/60 p-4 transition-colors hover:bg-secondary"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">LinkedIn</p>
                    <p className="font-medium">in/roopsha-ghosh</p>
                  </div>
                </a>
                <a
                  href="https://github.com/roopshaghosh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/60 p-4 transition-colors hover:bg-secondary"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background">
                    <Github className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">GitHub</p>
                    <p className="font-medium">@roopshaghosh</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/60 p-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-soft text-violet">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Location</p>
                    <p className="font-medium">Jabalpur, Madhya Pradesh · India</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name">
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
                  />
                </Field>
                <Field label="Your email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
                  />
                </Field>
              </div>
              <Field label="Message">
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me a bit about your project, role, or idea…"
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-violet"
                />
              </Field>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-soft"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}