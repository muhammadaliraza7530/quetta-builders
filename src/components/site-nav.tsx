import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/brand-logo";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/guidance", label: "Guidance" },
  { to: "/societies", label: "Societies" },
  { to: "/about", label: "About" },
  { to: "/ceo", label: "CEO" },
  { to: "/contact", label: "Contact" },
];


export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-5 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <BrandLogo className="h-11 shrink-0 sm:h-14" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-extrabold tracking-tight sm:text-base">
              Quetta Builders &amp; Associates
            </span>
            <span className="block truncate text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px] sm:tracking-[0.28em]">
              (SMC-PVT) LTD
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href="tel:+923321503141"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105 lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          +92 332 1503141
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mt-3 max-h-[70vh] overflow-y-auto rounded-2xl p-4 sm:mx-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-bold text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+923321503141"
              className="mt-2 rounded-xl bg-primary px-3 py-3 text-center text-sm font-bold text-primary-foreground"
            >
              Call +92 332 1503141
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
