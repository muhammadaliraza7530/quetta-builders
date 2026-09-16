import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Linkedin, Mail, Phone, Quote } from "lucide-react";

import ceoPhoto from "@/assets/hanif-gujjar.png";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { CEO, CONTACT } from "@/lib/site-content";
import { OG_IMAGE } from "@/lib/site-url";

export const Route = createFileRoute("/ceo")({
  head: () => ({
    meta: [
      { title: "M. Hanif Gujjar — Founder & CEO | Quetta Builders & Associates" },
      {
        name: "description",
        content:
          "Message from M. Hanif Gujjar, Founder & Chief Executive Officer of Quetta Builders & Associates (SMC-PVT) LTD — leadership, delivery standards and client-first approach in Islamabad & Rawalpindi.",
      },
      { property: "og:title", content: "M. Hanif Gujjar — Founder & CEO" },
      {
        property: "og:description",
        content:
          "Fourteen years of leadership across property, construction and investment in the twin cities.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:url", content: "/ceo" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ceo" }],
  }),
  component: CeoPage,
});

const focus = [
  {
    title: "Verified documentation",
    text: "Every file, NOC and transfer paper is checked before a client commits a single rupee.",
  },
  {
    title: "Engineered construction",
    text: "Structural drawings, specified materials and daily site supervision from excavation to handover.",
  },
  {
    title: "Transparent pricing",
    text: "Costs, timelines and realistic market rates shared upfront — no hidden additions later.",
  },
  {
    title: "Long-term relationships",
    text: "Clients are educated, not sold to, so decisions rest on facts rather than speculation.",
  },
];

function CeoPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="scene-3d relative overflow-hidden border-b border-border">
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-36 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="animate-rise relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-accent/20 to-transparent blur-2xl" />
            <div className="card-3d relative overflow-hidden rounded-4xl border border-border bg-background shadow-[var(--shadow-ember)]">
              <img
                src={ceoPhoto}
                alt={`${CEO.name} — ${CEO.role} of Quetta Builders & Associates`}
                className="aspect-[4/5] w-full object-cover object-top"
                width={900}
                height={1046}
                decoding="async"
              />
            </div>
            <span className="glass absolute -right-3 top-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em]">
              <Award className="h-4 w-4 text-primary" /> Since 2010
            </span>
          </div>

          <div>
            <p className="animate-rise text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
              Leadership
            </p>
            <h1 className="animate-rise ember-text mt-4 text-4xl sm:text-5xl">{CEO.name}</h1>
            <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.24em] text-accent">
              {CEO.role}
            </p>
            <p className="mt-3 text-sm font-bold text-muted-foreground">{CEO.qualification}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={CEO.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" /> {CEO.phoneDisplay}
              </a>
              <a
                href={`mailto:${CEO.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold hover:bg-secondary"
              >
                <Mail className="h-4 w-4 text-primary" /> {CEO.email}
              </a>
              {CEO.socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold hover:bg-secondary"
                >
                  <Linkedin className="h-4 w-4 text-primary" /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-5 sm:py-20">
          <Quote className="h-10 w-10 text-primary" />
          <h2 className="ember-text mt-5 text-3xl sm:text-4xl">Message from our CEO</h2>
          <div className="mt-8 grid gap-6">
            {CEO.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-sm font-medium leading-relaxed text-muted-foreground sm:text-base">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-10 font-display text-xl font-extrabold">{CEO.name}</p>
          <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-accent">
            {CEO.role}
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-card/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <h2 className="text-3xl sm:text-4xl">What he insists on</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {focus.map((f) => (
              <div key={f.title} className="card-3d rounded-3xl border border-border bg-background/40 p-7">
                <h3 className="text-lg">{f.title}</h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scene-3d mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
        <div className="card-3d glass relative overflow-hidden rounded-4xl p-10 text-center sm:p-16">
          <h2 className="text-3xl sm:text-4xl">Speak with our team</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-muted-foreground">
            Share your plot, budget or investment goal and we will advise you on the right route.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
            >
              Contact us
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold hover:bg-secondary"
            >
              Our services <ArrowRight className="h-4 w-4" />
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
