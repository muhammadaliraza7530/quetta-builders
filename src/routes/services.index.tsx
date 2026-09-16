import { createFileRoute, Link } from "@tanstack/react-router";
import { OG_IMAGE } from "@/lib/site-url";
import { ArrowRight, Check, Hammer, HandCoins, Handshake, KeyRound, Phone } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SocialLinks } from "@/components/social-links";
import { CONTACT, SERVICES } from "@/lib/site-content";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Quetta Builders & Associates (SMC-PVT) LTD" },
      {
        name: "description",
        content:
          "Buying and selling of property, financial and investment consultancy, residential and commercial construction, and rental services across Bahria Town, DHA and ICHS.",
      },
      { property: "og:title", content: "Services — Quetta Builders & Associates (SMC-PVT) LTD" },
      {
        property: "og:description",
        content:
          "Property transactions, investment consultancy, turnkey construction and rentals — everything under one roof in Islamabad & Rawalpindi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const serviceIcons = [Handshake, HandCoins, Hammer, KeyRound];

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="scene-3d relative overflow-hidden border-b border-border">
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-36">
          <p className="animate-rise text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
            Our services
          </p>
          <h1 className="animate-rise ember-text mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Everything under one roof
          </h1>
          <p className="animate-rise mt-5 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base">
            Quetta Builders &amp; Associates (SMC-PVT) LTD handles property transactions, investment
            consultancy, construction and rentals for residential and commercial clients across the
            twin cities.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-full border border-border px-4 py-2 text-xs font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {s.title}
              </Link>
            ))}

          </div>
        </div>
      </section>

      {SERVICES.map((s, idx) => {
        const Icon = serviceIcons[idx] ?? Handshake;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-28 border-b border-border ${idx % 2 === 1 ? "bg-card/40" : ""}`}
          >
            <div className="scene-3d mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-14 sm:px-5 sm:py-20 lg:grid-cols-2">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.24em] text-accent">
                  {s.scope}
                </p>
                <h2 className="mt-2 text-3xl sm:text-4xl">{s.title}</h2>
                <p className="mt-5 text-sm font-medium text-muted-foreground sm:text-base">
                  {s.summary}
                </p>

                <div className="mt-8 grid gap-4">
                  {s.points.map((p) => (
                    <div
                      key={p.title}
                      className="rounded-3xl border border-border bg-background/40 p-6"
                    >
                      <h3 className="flex items-center gap-2 text-lg">
                        <Check className="h-4 w-4 shrink-0 text-accent" /> {p.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">{p.text}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.2em] text-accent"
                >
                  View full details <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

              <div
                className={`card-3d overflow-hidden rounded-4xl border border-border ${
                  idx % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={s.image}
                  alt={`${s.title} by Quetta Builders & Associates`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        );
      })}

      <section className="scene-3d mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
        <div className="card-3d glass relative overflow-hidden rounded-4xl p-10 text-center sm:p-16">
          <div className="animate-float-slow absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <h2 className="text-3xl sm:text-4xl">Not sure which service you need?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-muted-foreground">
            Send us your details and our team will advise you on the best route for your budget and
            goals.
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
          <SocialLinks className="mt-8 justify-center" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
