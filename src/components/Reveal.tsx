import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-16 max-w-3xl">
      <Reveal>
        <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[var(--aurora-cyan)]">
          <span className="h-px w-8 bg-[var(--aurora-cyan)]/50" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
