import { createFileRoute, Link } from "@tanstack/react-router";
import { OG_IMAGE } from "@/lib/site-url";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Twitter,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SocialLinks } from "@/components/social-links";
import { AREAS, CEO, COMPANY, CONTACT, IMAGES, VALUES } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Quetta Builders & Associates (SMC-PVT) LTD — 13 Years in the Twin Cities" },
      {
        name: "description",
        content:
          "Founded in Islamabad / Rawalpindi almost 13 years ago, Quetta Builders & Associates (SMC-PVT) LTD is a trusted property management, construction and investment firm operating across Bahria Town, DHA, ICHS and more.",
      },
      { property: "og:title", content: "About Quetta Builders & Associates (SMC-PVT) LTD" },
      {
        property: "og:description",
        content:
          "Professionalism, integrity, accountability and quality service — the working standards behind Quetta Builders & Associates (SMC-PVT) LTD, led by CEO M. Hanif Gujjar.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const ceoIcons: Record<string, typeof Facebook> = {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn: Linkedin,
};

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="scene-3d relative overflow-hidden border-b border-border">
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-36">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.28em] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" /> {COMPANY.foundedText}
          </span>
          <h1 className="animate-rise ember-text mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            About Quetta Builders &amp; Associates (SMC-PVT) LTD
          </h1>
          <p className="animate-rise mt-5 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base">
            A property management, construction and investment firm founded in Islamabad /
            Rawalpindi almost 13 years ago — today a trusted name across the twin cities for
            residential and commercial investment.
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="scene-3d mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-5 sm:py-24 lg:grid-cols-2">
        <div className="card-3d overflow-hidden rounded-4xl border border-border">
          <img
            src={IMAGES.aboutUs}
            alt="Quetta Builders & Associates team working in Rawalpindi"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
            Who we are
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">A firm the twin cities trust</h2>
          <p className="mt-5 text-sm font-medium text-muted-foreground sm:text-base">
            Quetta Builders &amp; Associates (SMC-PVT) LTD is a property management company founded
            in Islamabad / Rawalpindi almost 13 years ago. Since then it has emerged as a trusted
            firm in the twin cities, assisting clients with residential and commercial investments.
          </p>
          <p className="mt-4 text-sm font-medium text-muted-foreground sm:text-base">
            Almost every real estate investor desires a satisfactory income from their property
            without the inconvenience of having to manage and attend to it. We offer our expertise
            and personalised techniques of managing your property. Our management concept is founded
            on professionalism, integrity, accountability and quality service that guarantees the
            maximum return from your investment — property management expertise that gives our
            clients unparalleled peace of mind.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border px-4 py-1.5 text-xs font-bold text-muted-foreground"
              >
                {a}
              </span>
            ))}
          </div>
          <SocialLinks className="mt-7" />
        </div>
      </section>

      {/* CEO */}
      <section className="border-y border-border bg-card/40">
        <div className="scene-3d mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
            Leadership
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Message from our CEO</h2>

          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_2fr]">
            <div className="card-3d glass h-fit rounded-4xl p-8">
              <h3 className="text-2xl">{CEO.name}</h3>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.22em] text-accent">
                {CEO.role}
              </p>
              <p className="mt-3 text-sm font-bold text-muted-foreground">{CEO.qualification}</p>

              <ul className="mt-7 space-y-3 text-sm font-bold">
                <li>
                  <a href={CEO.phoneHref} className="flex items-center gap-2 hover:text-primary">
                    <Phone className="h-4 w-4 text-primary" /> {CEO.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CEO.email}`}
                    className="flex items-center gap-2 break-all hover:text-primary"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-primary" /> {CEO.email}
                  </a>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {CEO.socials.map((s) => {
                  const Icon = ceoIcons[s.label] ?? Facebook;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${CEO.name} on ${s.label}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <Icon className="h-4 w-4 text-primary" /> {s.handle}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="card-3d rounded-4xl border border-border bg-background/40 p-8 sm:p-10">
              {CEO.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className="mb-4 text-sm font-medium text-muted-foreground last:mb-0 sm:text-base"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="scene-3d mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
        <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
          Our values
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Our working standards</h2>
        <p className="mt-4 max-w-2xl text-sm font-medium text-muted-foreground">
          There are standard ways we focus on while dealing with our clients — from the first call
          to the final handover.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, idx) => (
            <div
              key={v.title}
              className="card-3d animate-rise rounded-4xl border border-border bg-card p-7"
              style={{ animationDelay: `${idx * 90}ms` }}
            >
              <ShieldCheck className="h-6 w-6 text-accent" />
              <h3 className="mt-5 text-xl">{v.title}</h3>
              <p className="mt-3 text-sm font-medium text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="scene-3d mx-auto w-full max-w-6xl px-5 pb-24">
        <div className="card-3d glass relative overflow-hidden rounded-4xl p-10 text-center sm:p-16">
          <div className="animate-float-slow absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <h2 className="text-3xl sm:text-4xl">Work with our team</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-muted-foreground">
            Tell us your goal — investment, purchase, rental or a full build — and we will guide you
            from first call to handover.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
            >
              Contact us
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold hover:bg-secondary"
            >
              View projects <ArrowRight className="h-4 w-4 text-accent" />
            </Link>
          </div>
          <p className="mt-6 text-xs font-bold text-muted-foreground">{CONTACT.address}</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
