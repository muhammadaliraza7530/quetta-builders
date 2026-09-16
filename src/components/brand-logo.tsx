const logoSrc = "/images/logo-full.png";

export function BrandLogo({ className = "h-12" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-xl border border-border bg-[oklch(0.99_0_0)] px-2 py-1.5 shadow-[var(--shadow-ember)] ${className}`}
    >
      <img
        src={logoSrc}
        alt="Quetta Builders &amp; Associates (SMC-PVT) LTD logo"
        className="h-full w-auto object-contain"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}
