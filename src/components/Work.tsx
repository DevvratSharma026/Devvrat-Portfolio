import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const projects = [
  {
    n: "01",
    name: "RepoLensAI",
    tagline: "AI-powered code-review platform.",
    blurb:
      "Ingests GitHub repos and ZIP uploads, runs LLM-driven analysis via Groq LLaMA-3 70B, and returns structured, recruiter- and developer-ready feedback — collapsing hours of review into seconds.",
    stack: ["Node.js", "React", "AWS S3", "Groq LLaMA-3", "Multer"],
    accent: "from-[var(--aurora-violet)] to-[var(--aurora-magenta)]",
  },
  {
    n: "02",
    name: "AI Notes Web App",
    tagline: "Notes that summarize and answer back.",
    blurb:
      "Full-stack MERN note manager with JWT auth, CRUD, AI summarisation and contextual chat powered by Groq LLaMA-3 70B. Redux Toolkit keeps auth, note flows and AI responses predictable — zero prop-drilling.",
    stack: ["React", "Redux Toolkit", "Express", "MongoDB", "Groq LLaMA-3"],
    accent: "from-[var(--aurora-cyan)] to-[var(--aurora-emerald)]",
  },

];

export function Work() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="03 — Selected work"
          title={
            <>
              Things I've built<br />
              <span className="text-gradient">end to end.</span>
            </>
          }
        />

        <div className="space-y-8">
          {projects.map((p, idx) => (
            <Reveal key={p.name} delay={idx * 0.08}>
              <a
                href="#"
                className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:border-white/20 md:p-10"
              >
                <div
                  className={`absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br ${p.accent} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30`}
                />
                <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-start">
                  <div className="font-mono text-sm text-muted-foreground">{p.n}</div>

                  <div>
                    <h3 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                      {p.name}
                    </h3>
                    <p className="text-aurora mt-2 font-display text-lg">{p.tagline}</p>
                    <p className="mt-5 max-w-2xl text-muted-foreground">{p.blurb}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/25 group-hover:bg-white/10">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
