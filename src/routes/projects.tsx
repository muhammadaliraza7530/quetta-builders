import { createFileRoute, Link } from "@tanstack/react-router";
import { OG_IMAGE } from "@/lib/site-url";
import { ArrowRight, Building2, Check, MapPin, Sparkles } from "lucide-react";

import { LocalVideo } from "@/components/local-video";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { VideoWall } from "@/components/video-wall";
import { GALLERY, PROJECT_VIDEO, PROJECTS } from "@/lib/site-content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Quetta Builders & Associates (SMC-PVT) LTD" },
      {
        name: "description",
        content:
          "Quetta Icon, Quetta Icon 2 and completed residential villas in Bahria Town Phase 8, Rawalpindi — commercial and residential projects by Quetta Builders & Associates (SMC-PVT) LTD.",
      },
      { property: "og:title", content: "Projects — Quetta Builders & Associates (SMC-PVT) LTD" },
      {
        property: "og:description",
        content:
          "Explore completed and upcoming commercial and residential projects in Bahria Town, Rawalpindi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="scene-3d relative overflow-hidden border-b border-border">
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-36">
          <p className="animate-rise text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
            Our portfolio
          </p>
          <h1 className="animate-rise ember-text mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Completed &amp; upcoming projects
          </h1>
          <p className="animate-rise mt-5 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base">
            Commercial and residential developments delivered by Quetta Builders &amp; Associates
            (SMC-PVT) LTD in Bahria Town, Rawalpindi.
          </p>
        </div>
      </section>

      {PROJECTS.map((p, idx) => (
        <section
          key={p.name}
          className={`border-b border-border ${idx % 2 === 1 ? "bg-card/40" : ""}`}
        >
          <div className="scene-3d mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div
                className={`card-3d overflow-hidden rounded-4xl border border-border ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.kind} project in ${p.location}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
                    {p.status}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-xs font-bold text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5 text-accent" /> {p.kind}
                  </span>
                </div>
                <h2 className="mt-5 text-3xl sm:text-4xl">{p.name}</h2>
                <p className="mt-2 text-sm font-bold text-accent">{p.tagline}</p>
                <p className="mt-3 inline-flex items-start gap-2 text-sm font-medium text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p.location}
                </p>
                <p className="mt-5 text-sm font-medium text-muted-foreground sm:text-base">
                  {p.intro}
                </p>

                {"highlights" in p && p.highlights ? (
                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-bold text-muted-foreground"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-accent" /> {h}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            {"apartmentFacilities" in p && p.apartmentFacilities ? (
              <div className="mt-12 grid gap-5 lg:grid-cols-2">
                <div className="card-3d rounded-4xl border border-border bg-background/40 p-8">
                  <h3 className="text-xl">Apartment facilities</h3>
                  <ul className="mt-5 space-y-2.5">
                    {p.apartmentFacilities.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm font-medium text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-3d rounded-4xl border border-border bg-background/40 p-8">
                  <h3 className="text-xl">Communal facilities</h3>
                  <ul className="mt-5 space-y-2.5">
                    {p.communalFacilities?.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm font-medium text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="border-b border-border">
        <div className="scene-3d mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
                {PROJECT_VIDEO.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl">{PROJECT_VIDEO.title}</h2>
              <p className="mt-2 text-sm font-bold text-accent">{PROJECT_VIDEO.note}</p>
              <p className="mt-5 text-sm font-medium text-muted-foreground sm:text-base">
                {PROJECT_VIDEO.description}
              </p>
            </div>
            <LocalVideo
              src={PROJECT_VIDEO.src}
              title={PROJECT_VIDEO.title}
              className="card-3d"
            />
          </div>
        </div>
      </section>

      <section className="scene-3d mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
        <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
          From our channel
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Project walkthroughs on YouTube</h2>
        <VideoWall />
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="scene-3d mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
            Interiors
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Delivered work in detail</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((g, idx) => (
              <figure
                key={g.src}
                className="card-3d animate-rise overflow-hidden rounded-4xl border border-border bg-card"
                style={{ animationDelay: `${idx * 70}ms` }}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <figcaption className="p-5 text-sm font-bold text-muted-foreground">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
          >
            Book a site visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
