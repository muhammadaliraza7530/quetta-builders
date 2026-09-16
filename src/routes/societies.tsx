import { createFileRoute, Link } from "@tanstack/react-router";
import { OG_IMAGE } from "@/lib/site-url";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { CONTACT, SOCIETIES } from "@/lib/site-content";

export const Route = createFileRoute("/societies")({
  head: () => ({
    meta: [
      { title: "Societies We Work In — Bahria Town, DHA, Capital Smart City, ICHS, TopCity-1" },
      {
        name: "description",
        content:
          "A detailed guide to the master-planned societies of Islamabad and Rawalpindi where Quetta Builders & Associates buys, sells and builds — approvals, location advantages and investment outlook.",
      },
      { property: "og:title", content: "Societies — Quetta Builders & Associates" },
      {
        property: "og:description",
        content:
          "Bahria Town, DHA Islamabad-Rawalpindi, Capital Smart City, ICHS Town and TopCity-1 — vision, approvals and what makes each one worth your investment.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:url", content: "/societies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/societies" }],
  }),
  component: SocietiesPage,
});

function SocietiesPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="scene-3d relative overflow-hidden border-b border-border">
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-36">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.28em] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" /> Islamabad &amp; Rawalpindi
          </span>
          <h1 className="animate-rise ember-text mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Where we buy, sell &amp; build
          </h1>
          <p className="animate-rise mt-5 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base">
            The master-planned communities of Islamabad and Rawalpindi we work in every day — their
            vision, approvals and what makes each one worth your investment. We deal, develop and
            construct inside these societies, so the guidance you receive comes from files we have
            personally transferred and sites we have personally built on.
          </p>

          <div className="mt-9 flex flex-wrap gap-2">
            {SOCIETIES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {s.name.split(" — ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Societies */}
      <section className="relative overflow-hidden border-b border-border bg-card/40">
        <div className="animate-float-slow absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="scene-3d relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <div className="space-y-8">
            {SOCIETIES.map((s, idx) => (
              <article
                key={s.slug}
                id={s.slug}
                className="card-3d glass animate-rise grid scroll-mt-28 gap-10 rounded-4xl p-7 sm:p-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]"
                style={{ animationDelay: `${idx * 90}ms` }}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-border bg-background/60 p-2">
                      <img
                        src={s.logo}
                        alt={`${s.name} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </span>
                    <div>
                      <h2 className="text-2xl sm:text-3xl">{s.name}</h2>
                      <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                        {s.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 space-y-4">
                    {s.paragraphs.map((p) => (
                      <p
                        key={p.slice(0, 24)}
                        className="text-sm font-medium leading-relaxed text-muted-foreground"
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {s.stats.map((st) => (
                      <div
                        key={st.label}
                        className="rounded-3xl border border-border bg-background/40 px-5 py-4"
                      >
                        <p className="font-display text-2xl font-extrabold text-primary">
                          {st.value}
                        </p>
                        <p className="mt-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                          {st.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <aside className="rounded-4xl border border-border bg-background/40 p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-primary">
                    {"pointsTitle" in s && s.pointsTitle ? s.pointsTitle : "Highlights"}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {s.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 text-sm font-medium text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-accent"
                  >
                    Enquire about {s.name.split(" ")[0]} <ArrowRight className="h-4 w-4" />
                  </a>
                </aside>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="scene-3d mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <div className="card-3d glass relative overflow-hidden rounded-4xl p-10 text-center sm:p-14">
          <h2 className="text-3xl sm:text-4xl">Not sure which society fits your budget?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-muted-foreground">
            Tell us your investment horizon and the amount you are ready to commit. We will compare
            current rates, development status and expected returns across these societies and give
            you a straight recommendation — including the plots and units we would avoid.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
            >
              Request a consultation
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-primary" /> {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
