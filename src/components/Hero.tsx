import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import TextPressure from "./TextPressure";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pt-32 pb-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--aurora-emerald)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--aurora-emerald)]" />
          </span>
          <span className="text-muted-foreground">
            Application Developer @ IBM · Bengaluru
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,10vw,8.5rem)] font-semibold leading-[0.9] tracking-tighter h-full ">
          <div style={{position: 'relative'}}>
            <TextPressure
              text="Devvrat Sharma"
              flex
              alpha={false}
              stroke={false}
              width
              weight
              italic
              textColor="#ffffff"
              strokeColor="#5227FF"
              gradientColors={["#ffffff", "#DCFFBD", "#CC86D1"]}
              gradientDirection="to right"
              minFontSize={36}
            />
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
        >
          Middleware engineer crafting resilient{" "}
          <span className="text-foreground">Oracle Integration Cloud</span> flows by day,
          building <span className="text-foreground">AI-native full-stack</span> products
          with the MERN stack and LLMs by night.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group relative overflow-hidden rounded-full bg-linear-to-r from-aurora-violet via-aurora-magenta to-aurora-cyan p-[1.5px] transition-transform hover:scale-[1.02]"
          >
            <span className="relative flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium transition-all group-hover:bg-transparent group-hover:text-background">
              View selected work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-md transition-all hover:border-white/25 hover:bg-white/10"
          >
            Get in touch
          </a>

          <div className="ml-2 flex items-center gap-1">
            {[
              { icon: Github, href: "https://github.com/DevvratSharma026", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/devvrat-sharma", label: "LinkedIn" },
              { icon: Mail, href: "mailto:devsharma.pcm.2003@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-white/25 hover:text-foreground"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md sm:grid-cols-4"
        >
          {[
            { k: "IBM", v: "Middleware · OIC" },
            { k: "8.64", v: "B.Tech IT CGPA" },
            { k: "2×", v: "AWS · IBM Certs" },
            { k: "LLM", v: "Groq LLaMA-3 · GenAI" },
          ].map((s) => (
            <div key={s.k} className="bg-background/40 p-5">
              <div className="font-display text-2xl font-semibold text-foreground">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span className="animate-float-slow inline-block">scroll ↓</span>
      </motion.div>
    </section>
  );
}
