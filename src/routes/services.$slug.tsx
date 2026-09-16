import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Hammer, HandCoins, Handshake, KeyRound, Phone } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SocialLinks } from "@/components/social-links";
import { CONTACT, SERVICES } from "@/lib/site-content";
import { OG_IMAGE } from "@/lib/site-url";

const ICONS: Record<string, typeof Handshake> = {
  "buying-selling": Handshake,
  consultancy: HandCoins,
  construction: Hammer,
  rental: KeyRound,
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found — Quetta Builders & Associates" }, { name: "robots", content: "noindex" }],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} — Quetta Builders & Associates`;
    return {
      meta: [
        { title },
        { name: "description", content: service.summary.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: service.summary.slice(0, 155) },
        { property: "og:type", content: "website" },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <div className="mx-auto w-full max-w-3xl px-5 pb-24 pt-40 text-center">
        <h1 className="ember-text text-4xl">Service not found</h1>
        <p className="mt-4 text-sm font-medium text-muted-foreground">
          The page you are looking for is not available. Browse everything we offer instead.
        </p>
        <Link
          to="/services"
          className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground"
        >
          All services
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = ICONS[service.slug] ?? Handshake;
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="scene-3d relative overflow-hidden border-b border-border">
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-36 lg:grid-cols-2">
          <div>
            <Link
              to="/services"
              className="text-xs font-extrabold uppercase tracking-[0.24em] text-muted-foreground hover:text-foreground"
            >
              ← All services
            </Link>
            <span className="mt-6 grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.24em] text-accent">
              {service.scope}
            </p>
            <h1 className="ember-text mt-3 text-4xl sm:text-5xl">{service.title}</h1>
            <p className="mt-5 text-sm font-medium text-muted-foreground sm:text-base">
              {service.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
              >
                Enquire about this service
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-primary" /> {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="card-3d overflow-hidden rounded-4xl border border-border">
            <img
              src={service.image}
              alt={`${service.title} by Quetta Builders & Associates`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-5 sm:py-20">
          <h2 className="text-3xl sm:text-4xl">How we deliver it</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {service.points.map((p) => (
              <div
                key={p.title}
                className="card-3d rounded-3xl border border-border bg-background/40 p-7"
              >
                <h3 className="flex items-center gap-2 text-lg">
                  <Check className="h-4 w-4 shrink-0 text-accent" /> {p.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <h2 className="text-2xl sm:text-3xl">Other services</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {others.map((s) => {
            const OtherIcon = ICONS[s.slug] ?? Handshake;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="card-3d group rounded-3xl border border-border bg-card/40 p-7 transition-colors hover:bg-secondary"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <OtherIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg">{s.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-accent">
                  View details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
        <SocialLinks className="mt-12 justify-center" />
      </section>

      <SiteFooter />
    </div>
  );
}
