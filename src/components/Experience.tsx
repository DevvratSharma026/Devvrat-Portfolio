import { Reveal, SectionHeader } from "./Reveal";

const jobs = [
  {
    company: "IBM India",
    role: "Associate System Engineer",
    time: "Apr 2026 — Present",
    location: "Bengaluru",
    tags: ["Oracle OIC", "SOA Suite", "WebLogic", "BPEL", "REST/SOAP"],
    points: [
      "Building and deploying integration flows on Oracle Integration Cloud connecting enterprise apps via REST and SOAP adapters.",
      "Orchestrating end-to-end SOA composites — BPEL, Mediator, OSB — across the middleware stack.",
      "Administering WebLogic environments: managed servers, datasources, deployments, monitoring.",
      "Owning integration fault analysis, adapter debugging and incident-driven resolutions.",
    ],
  },
  {
    company: "BlueStock Fintech",
    role: "Frontend Developer Intern",
    time: "Jun 2025 — Aug 2025",
    location: "Remote",
    tags: ["React", "Dashboards", "Realtime", "Component systems"],
    points: [
      "Shipped a React admin dashboard on live platform data — retired spreadsheet-based ops workflows.",
      "Built a real-time IPO listings page with optimised client-side state, zero backend round-trips.",
      "Introduced a reusable component architecture adopted across multiple pages.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="02 — Experience"
          title={<>Where I've been shipping.</>}
        />

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:block md:left-[140px]" />

          <div className="space-y-16">
            {jobs.map((job, idx) => (
              <Reveal key={job.company} delay={idx * 0.1}>
                <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-12">
                  <div className="relative">
                    <div className="font-mono text-md uppercase tracking-widest text-muted-foreground">
                      {job.time}
                    </div>
                    <div className="mt-1 text-md text-muted-foreground/70">
                      {job.location}
                    </div>
                    <div className="absolute -right-[7px] top-1 hidden h-3 w-3 rounded-full bg-background ring-2 ring-[var(--aurora-violet)] md:block" />
                  </div>

                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--aurora-violet)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-3xl font-semibold">
                        {job.role}
                      </h3>
                      <span className="text-aurora font-display text-xl font-medium">
                        {job.company}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-2.5 text-muted-foreground">
                      {job.points.map((p) => (
                        <li key={p} className="flex text-lg items-start gap-2">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--aurora-cyan)]" />
                          <span className="flex-1">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[15px] uppercase tracking-wider text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
