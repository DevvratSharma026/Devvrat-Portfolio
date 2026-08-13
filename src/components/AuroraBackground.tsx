export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.22_0.06_290)_0%,oklch(0.14_0.03_275)_50%,oklch(0.1_0.02_270)_100%)]" />

      {/* Aurora blobs */}
      <div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-60 blur-3xl animate-aurora-drift"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.22 300 / 0.55), transparent 60%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full opacity-50 blur-3xl animate-aurora-drift"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.16 200 / 0.45), transparent 60%)", animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full opacity-40 blur-3xl animate-aurora-drift"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.24 340 / 0.4), transparent 60%)", animationDelay: "-14s" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
