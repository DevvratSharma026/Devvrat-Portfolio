import { Reveal, SectionHeader } from "./Reveal";

const groups = [
  {
    title: "Middleware & Integration",
    items: ["Oracle Integration Cloud", "SOA Suite", "WebLogic Server", "BPEL", "REST/SOAP Adapters", "OSB"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Socket.io"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Cloud & AI",
    items: ["AWS S3", "Groq LLaMA-3 70B", "GenAI APIs", "Claude API", "Oracle Cloud"],
  },
  {
    title: "Languages & Tools",
    items: ["JavaScript ES6+", "TypeScript", "C++", "Python", "Git", "Docker", "Postman", "Vite"],
  },
];

const marquee = [
  "Oracle Integration Cloud", "SOA Suite", "WebLogic", "BPEL", "REST", "SOAP",
  "React", "TypeScript", "Node.js", "MongoDB", "Groq LLaMA-3", "AWS GenAI",
  "Redux Toolkit", "Tailwind", "Framer Motion", "Socket.io", "Docker",
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="04 — Toolbelt"
          title={<>The stack behind the ships.</>}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, idx) => (
            <Reveal key={g.title} delay={idx * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--aurora-cyan)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--aurora-cyan)]">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-md text-foreground/90"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="relative mt-20 flex overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8 font-display text-4xl font-semibold text-muted-foreground/40 md:text-6xl">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                {m}
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--aurora-violet)]" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
