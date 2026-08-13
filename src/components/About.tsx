import { Reveal, SectionHeader } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="01 — About" title={<>Between the enterprise stack<br />and the AI frontier.</>} />

        <div className="grid gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm an <span className="text-foreground">Application Developer at IBM</span>,
                working on Oracle Integration Cloud, SOA Suite and WebLogic — designing the
                integration flows that quietly move data between the world's largest enterprises.
              </p>
              <p>
                Off the clock, I build <span className="text-foreground">production-grade full-stack apps</span> that
                fuse the MERN stack with LLMs — Groq LLaMA-3, AWS GenAI, Claude — turning
                repositories into insights and notes into conversations.
              </p>
              <p>
                Graduated from <span className="text-foreground">GGSIPU (ADGIPS)</span> with 8.64 CGPA in Information
                Technology. Currently based in Bengaluru, endlessly curious about integration
                patterns, generative systems, and the seams where they meet.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--aurora-violet)]/30 blur-3xl" />
              <div className="relative space-y-4 text-sm">
                {[
                  ["Base", "Bengaluru, India"],
                  ["Role", "Associate System Engineer · IBM"],
                  ["Domain", "Oracle Integration Cloud (OIC)"],
                  ["Side stack", "MERN + LLM tooling"],
                  ["Education", "B.Tech IT · GGSIPU · 2021–25"],
                  ["Focus", "Middleware · GenAI · DX"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {k}
                    </span>
                    <span className="text-right text-foreground">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
