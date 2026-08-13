import { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled
            ? "glass rounded-full py-3 shadow-[0_8px_40px_-8px_oklch(0_0_0/0.6)]"
            : ""
        }`}
        style={scrolled ? { maxWidth: "56rem" } : undefined}
      >
        <a href="#top" className="group flex items-center gap-2">

          <span className="hidden font-display text-2xl font-medium tracking-tight sm:block">
            Devvrat Sharma
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-4 py-2 text-lg text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute inset-0 scale-90 rounded-full bg-white/5 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur-md transition-all hover:border-white/20"
        >
          <span className="relative z-10 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-[var(--aurora-emerald)] shadow-[0_0_8px_oklch(0.78_0.17_165)]" />
            Available
          </span>
        </a>
      </div>
    </motion.header>
  );
}
