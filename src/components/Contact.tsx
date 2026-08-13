import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Github, Linkedin, Loader2, Mail, Phone } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { sendContactMessage } from "@/lib/contact.functions";

const clientSchema = z.object({
  name: z.string().trim().min(1, "Please tell me your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Add a subject").max(150, "Subject is too long"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000, "Message is too long"),
});

type FieldErrors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const inputBase =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-[var(--aurora-cyan)]/60 focus:bg-white/[0.05]";

export function Contact() {
  const send = useServerFn(sendContactMessage);
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const update = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const parsed = clientSchema.safeParse(values);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setStatus("submitting");
    try {
      await send({ data: parsed.data });
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setServerError(err instanceof Error ? err.message : "Something went wrong. Try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-md md:p-20">
          <div
            className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.72 0.22 300 / 0.6), transparent 60%)" }}
          />
          <div
            className="absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.78 0.16 200 / 0.5), transparent 60%)" }}
          />

          <div className="relative grid gap-14 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <Reveal>
                <div className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[var(--aurora-cyan)]">
                  06 — Let's build
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display text-5xl font-semibold tracking-tighter md:text-7xl">
                  Got a wild <span className="text-gradient">idea?</span>
                  <br />
                  Let's ship it.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                  I'm open to full-stack, middleware and AI-integration collaborations —
                  consulting, side projects, or just a good conversation.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:devsharma.pcm.2003@gmail.com"
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[var(--aurora-violet)] via-[var(--aurora-magenta)] to-[var(--aurora-cyan)] p-[1.5px]"
                  >
                    <span className="relative flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium transition-all group-hover:bg-transparent group-hover:text-background">
                      devsharma.pcm.2003@gmail.com
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                    </span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2">
                  {[
                    { icon: Mail, label: "Email", value: "devsharma.pcm.2003@gmail.com", href: "mailto:devsharma.pcm.2003@gmail.com" },
                    { icon: Phone, label: "Phone", value: "+91 82874 09792", href: "tel:+918287409792" },
                    { icon: Github, label: "GitHub", value: "@devvrat", href: "https://github.com/DevvratSharma026" },
                    { icon: Linkedin, label: "LinkedIn", value: "Devvrat Sharma", href: "https://linkedin.com/in/devvrat-sharma" },
                  ].map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="group block"
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                        {c.label}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-foreground transition-colors group-hover:text-[var(--aurora-cyan)]">
                        <c.icon className="h-4 w-4" />
                        <span className="truncate text-sm">{c.value}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative rounded-2xl border border-white/10 bg-background/40 p-6 backdrop-blur-md md:p-8">
                {status === "success" ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--aurora-violet)]/30 to-[var(--aurora-cyan)]/30">
                      <CheckCircle2 className="h-8 w-8 text-[var(--aurora-cyan)]" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">Message launched 🚀</h3>
                    <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                      Thanks for reaching out — I'll get back to you within a day or two.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-8 rounded-full border border-white/15 px-5 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition hover:border-white/40 hover:text-foreground"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-5">
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                      Send a message
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Name" error={errors.name}>
                        <input
                          type="text"
                          value={values.name}
                          onChange={update("name")}
                          maxLength={100}
                          className={inputBase}
                          placeholder="Ada Lovelace"
                          aria-invalid={!!errors.name}
                        />
                      </Field>
                      <Field label="Email" error={errors.email}>
                        <input
                          type="email"
                          value={values.email}
                          onChange={update("email")}
                          maxLength={255}
                          className={inputBase}
                          placeholder="you@domain.com"
                          aria-invalid={!!errors.email}
                        />
                      </Field>
                    </div>

                    <Field label="Subject" error={errors.subject}>
                      <input
                        type="text"
                        value={values.subject}
                        onChange={update("subject")}
                        maxLength={150}
                        className={inputBase}
                        placeholder="Let's build something"
                        aria-invalid={!!errors.subject}
                      />
                    </Field>

                    <Field label="Message" error={errors.message}>
                      <textarea
                        value={values.message}
                        onChange={update("message")}
                        maxLength={2000}
                        rows={5}
                        className={`${inputBase} resize-none`}
                        placeholder="Tell me about the idea, timeline, stack…"
                        aria-invalid={!!errors.message}
                      />
                    </Field>

                    {serverError && (
                      <p className="text-xs text-red-400" role="alert">
                        {serverError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group relative w-full overflow-hidden rounded-full bg-linear-to-r from-[var(--aurora-violet)] via-[var(--aurora-magenta)] to-[var(--aurora-cyan)] p-[1.5px] disabled:opacity-70"
                    >
                      <span className="relative flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium transition-all group-hover:bg-transparent group-hover:text-background">
                        {status === "submitting" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                          </>
                        ) : (
                          <>
                            Send message
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row">
          <div>© 2026 Devvrat Sharma</div>
          <div className="font-mono uppercase tracking-widest">React · Tailwind · Motion</div>
        </footer>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs text-red-400" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
