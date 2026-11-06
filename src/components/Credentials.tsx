import { Award, GraduationCap } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const certs = [
  {
    title: "AWS Generative AI",
    issuer: "Amazon Web Services",
    time: "Apr 2024",
    icon: Award,
  },
  {
    title: "IBM Data Science Professional",
    issuer: "IBM",
    time: "2023 · Apprenticeship",
    icon: Award,
  },
  {
    title: "B.Tech · Information Technology",
    issuer: "GGSIPU — ADGIPS",
    time: "2021 — 2025 · CGPA 8.64",
    icon: GraduationCap,
  },
];

export function Credentials() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="05 — Credentials"
          title={<>Certified &amp; educated.</>}
        />
        <div className="grid gap-4 md:grid-cols-3">
          {certs.map((c, idx) => (
            <Reveal key={c.title} delay={idx * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--aurora-violet)]/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-(--aurora-violet)/20 to-(--aurora-cyan)/20 text-aurora-cyan">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{c.title}</h3>
                  <p className="mt-1 text-lg text-muted-foreground">{c.issuer}</p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    {c.time}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
