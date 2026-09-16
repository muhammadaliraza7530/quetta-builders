import { createFileRoute, Link } from "@tanstack/react-router";
import { OG_IMAGE } from "@/lib/site-url";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Hammer,
  HandCoins,
  Handshake,
  HardHat,
  KeyRound,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Timer,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";

import ceoPhoto from "@/assets/hanif-gujjar.png";
import { BrandLogo } from "@/components/brand-logo";
import { CountUp } from "@/components/count-up";
import { InteriorGallery } from "@/components/interior-gallery";
import { ShowreelPhone } from "@/components/showreel-phone";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AREAS,
  CEO,
  CONTACT,
  FAQS,
  ICON_SPOTLIGHT,
  IMAGES,
  PARTNERS,
  SERVICES,
  SOCIETIES,
  VALUES,
  WHY_CHOOSE,
} from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quetta Builders & Associates — Property, Construction, Investment" },
      {
        name: "description",
        content:
          "Quetta Builders & Associates: 13 years of trusted property management, construction and investment consultancy in Bahria Town, DHA, ICHS and across Islamabad & Rawalpindi.",
      },
      {
        property: "og:title",
        content: "Quetta Builders & Associates — Property, Construction, Investment",
      },
      {
        property: "og:description",
        content:
          "Buying, selling, rentals, construction and investment consultancy in the twin cities. Home of Quetta Icon and Quetta Icon 2, Bahria Town Rawalpindi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const heroSlides = [
  { image: "/images/carousel-01.jpeg", caption: "Quetta Builders project view 1" },
  { image: "/images/carousel-02.jpeg", caption: "Quetta Builders project view 2" },
  { image: "/images/carousel-03.jpeg", caption: "Quetta Builders project view 3" },
  { image: "/images/carousel-04.jpeg", caption: "Quetta Builders project view 4" },
  { image: "/images/carousel-05.jpeg", caption: "Quetta Builders project view 5" },
  { image: "/images/carousel-06.jpeg", caption: "Quetta Builders project view 6" },
  { image: "/images/carousel-07.jpeg", caption: "Quetta Builders project view 7" },
  { image: "/images/carousel-08.jpeg", caption: "Quetta Builders project view 8" },
  { image: "/images/carousel-09.jpeg", caption: "Quetta Builders project view 9" },
  { image: "/images/carousel-10.jpeg", caption: "Quetta Builders project view 10" },
  { image: "/images/carousel-11.jpeg", caption: "Quetta Builders project view 11" },
  { image: "/images/carousel-12.jpeg", caption: "Quetta Builders project view 12" },
];

const serviceIcons = [Handshake, HandCoins, Hammer, KeyRound];

const whyIcons = [
  HardHat,
  Timer,
  FileCheck2,
  Ruler,
  HandCoins,
  ClipboardCheck,
  ShieldCheck,
  Sparkles,
  KeyRound,
];

const stats = [
  { value: 13, suffix: "+", decimals: 0, label: "Years in the twin cities" },
  { value: 8, suffix: "", decimals: 0, label: "Societies we operate in" },
  { value: 3, suffix: "", decimals: 0, label: "Signature projects" },
  { value: 100, suffix: "%", decimals: 0, label: "Financial accountability" },
];

const process = [
  {
    step: "01",
    title: "Share your goal",
    text: "Investment, plot purchase, rental or a build — tell us the brief and budget.",
  },
  {
    step: "02",
    title: "Market study",
    text: "We compare society trends, rates and returns before recommending anything.",
  },
  {
    step: "03",
    title: "Secure the deal",
    text: "Documentation, negotiation and transfer handled with full transparency.",
  },
  {
    step: "04",
    title: "Manage & build",
    text: "Construction, rentals and ongoing property management under one roof.",
  },
];

const highlights = [
  { icon: Building2, label: "Commercial", slug: "buying-selling" },
  { icon: Ruler, label: "Construction", slug: "construction" },
  { icon: HandCoins, label: "Investment", slug: "consultancy" },
  { icon: KeyRound, label: "Rentals", slug: "rental" },
];


function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 3500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="scene-3d relative flex min-h-[100svh] items-end overflow-hidden">
        <img
          key={heroSlides[slide].image}
          src={heroSlides[slide].image}
          alt={heroSlides[slide].caption}
          className="hero-slide-left-to-right absolute inset-0 h-full w-full scale-110 object-cover object-center blur-[5px]"
        />
        <div className="veil absolute inset-0" />
        <div className="absolute inset-0 bg-background/55" />
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-36">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.28em] backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-primary" /> Bahria Town, Rawalpindi
          </span>

          <h1
            className="animate-rise mt-7 max-w-4xl leading-[1.05]"
            style={{ animationDelay: "80ms" }}
          >
            <span className="block text-lg font-extrabold uppercase tracking-[0.3em] text-muted-foreground sm:text-xl">
              Since 2013
            </span>
            <span className="ember-text mt-2 block text-[11vw] leading-[1.02] sm:text-6xl lg:text-7xl">
              Quetta Builders
              <span className="block text-foreground/90">&amp; Associates</span>
            </span>
            <span className="mt-3 block text-base font-extrabold uppercase tracking-[0.32em] text-muted-foreground sm:text-lg">
              (SMC-PVT) LTD
            </span>
          </h1>

          <p
            className="animate-rise mt-5 max-w-xl text-base font-medium text-muted-foreground sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Property acquisition, turnkey construction and investment advisory across Islamabad and
            Rawalpindi — verified files, engineered drawings, specified materials and a documented
            handover on every project we accept.
          </p>

          <div
            className="animate-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "260ms" }}
          >
            <Link
              to="/projects"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
            >
              View our projects
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-bold backdrop-blur transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map((h, idx) => (
              <Link
                key={h.label}
                to="/services/$slug"
                params={{ slug: h.slug }}
                className="glass card-3d animate-rise flex flex-col items-center gap-2 rounded-2xl px-3 py-4 text-center transition-transform hover:scale-105"
                style={{ animationDelay: `${320 + idx * 90}ms` }}
              >
                <h.icon className="h-5 w-5 text-accent" />
                <span className="text-xs font-extrabold uppercase tracking-wider">{h.label}</span>
              </Link>
            ))}
          </div>


          <div className="mt-10 flex items-center gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.image}
                type="button"
                aria-label={`Show ${s.caption}`}
                onClick={() => setSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === slide ? "w-10 bg-primary" : "w-4 bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Showreel */}
      <section className="relative overflow-hidden border-b border-border bg-card/40 py-20">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
              Showreel
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Step inside a Quetta&nbsp;build
            </h2>
            <p className="mt-5 text-sm font-medium text-muted-foreground sm:text-base">
              A walkthrough of a delivered residence in Bahria Town — false ceilings and cove
              lighting, concealed services, imported sanitary ware and joinery, all executed by our
              own finishing team. Sound plays automatically while you are on this section.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Turnkey construction", "Interior finishing", "Handover ready"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-4 py-1.5 text-xs font-bold text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <ShowreelPhone />
        </div>
      </section>

      {/* Signature project spotlight — Quetta Icon */}
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={IMAGES.slider1}
          alt="Quetta Icon, Bahria Town Phase 8, Rawalpindi"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center blur-[6px]"
          loading="lazy"
        />
        <div className="veil absolute inset-0" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="animate-float-slow absolute -right-24 top-10 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="scene-3d relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.28em] backdrop-blur">
            <Trophy className="h-3.5 w-3.5 text-primary" /> {ICON_SPOTLIGHT.eyebrow}
          </span>

          <div className="mt-8 grid items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <h2 className="animate-rise text-4xl leading-[1.04] sm:text-5xl lg:text-6xl">
                <span className="ember-text block">{ICON_SPOTLIGHT.name}</span>
                <span className="mt-3 block text-lg font-extrabold uppercase tracking-[0.24em] text-muted-foreground sm:text-xl">
                  {ICON_SPOTLIGHT.headline}
                </span>
              </h2>
              <p className="mt-6 flex items-start gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {ICON_SPOTLIGHT.location}
              </p>
              <p className="mt-6 text-base font-medium text-muted-foreground sm:text-lg">
                {ICON_SPOTLIGHT.lead}
              </p>
              <div className="mt-8 space-y-4">
                {ICON_SPOTLIGHT.body.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="text-sm font-medium text-muted-foreground sm:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {ICON_SPOTLIGHT.metrics.map((m, idx) => (
                  <div
                    key={m.label}
                    className="glass card-3d animate-rise rounded-3xl px-5 py-5"
                    style={{ animationDelay: `${idx * 90}ms` }}
                  >
                    <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                      {m.value}
                      <span className="text-lg">{m.suffix}</span>
                    </p>
                    <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
                >
                  See the full project
                </Link>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-bold backdrop-blur transition-colors hover:bg-secondary"
                >
                  <Phone className="h-4 w-4 text-accent" /> Build with our team
                </a>
              </div>
            </div>

            <div className="space-y-5">
              <div className="card-3d relative overflow-hidden rounded-4xl border border-border bg-background shadow-[var(--shadow-ember)]">
                <img
                  src={IMAGES.slider1}
                  alt="Quetta Icon completed commercial building in Bahria Town Phase 8"
                  className="aspect-[4/3] w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6 pt-16">
                  <p className="font-display text-2xl font-extrabold">
                    One of the finest buildings in Bahria Town
                  </p>
                  <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.22em] text-accent">
                    Completed &amp; fully approved
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {ICON_SPOTLIGHT.proof.map((p, idx) => (
                  <div
                    key={p.title}
                    className="card-3d glass animate-rise rounded-4xl p-6"
                    style={{ animationDelay: `${idx * 90}ms` }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <h3 className="mt-4 text-base">{p.title}</h3>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
              Construction timeline
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl">How eighteen months was enough</h3>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {ICON_SPOTLIGHT.timeline.map((t, idx) => (
                <div
                  key={t.phase}
                  className="animate-rise rounded-3xl border border-border bg-background/50 p-6 backdrop-blur"
                  style={{ animationDelay: `${idx * 90}ms` }}
                >
                  <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-accent">
                    <CalendarCheck className="h-4 w-4" /> {t.phase}
                  </span>
                  <h4 className="mt-3 text-lg font-extrabold">{t.title}</h4>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Who we are */}
      <section className="scene-3d mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-5 sm:py-24 lg:grid-cols-2">
        <div className="card-3d overflow-hidden rounded-4xl border border-border">
          <img
            src={IMAGES.whoWeAre}
            alt="Quetta Builders team at work in Rawalpindi"
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
            Quetta Builders and Associates SMC PVT LTD was founded in Islamabad and Rawalpindi over
            a decade ago and has since grown into a full-service property, construction and
            investment firm. We deal in verified files, build under our own supervision and manage
            completed assets for owners who cannot be on site every day.
          </p>
          <p className="mt-4 text-sm font-medium text-muted-foreground sm:text-base">
            The work is deliberately unglamorous: documents checked before payment, rates
            benchmarked against recorded transactions, materials procured to a named specification
            and every construction stage inspected before the next one starts. That discipline is
            why most of our work now comes from repeat clients and their referrals.
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
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.2em] text-accent"
          >
            More about us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CEO short intro */}
      <section className="relative overflow-hidden border-y border-border bg-card/40">
        <div className="animate-float-slow absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

        <div className="scene-3d relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-14 sm:px-5 sm:py-20 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
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
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6 pt-16">
                <p className="font-display text-xl font-extrabold">{CEO.name}</p>
                <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.24em] text-accent">
                  {CEO.role}
                </p>
              </div>
            </div>
            <span className="glass absolute -right-3 top-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em]">
              <Award className="h-4 w-4 text-primary" /> Since 2010
            </span>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
              Leadership
            </p>
            <h2 className="ember-text mt-3 text-3xl sm:text-4xl">Led from the site, not the desk</h2>
            <p className="mt-5 text-sm font-medium text-muted-foreground sm:text-base">
              {CEO.paragraphs[0]}
            </p>
            <Link
              to="/ceo"
              className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.2em] text-accent"
            >
              Read the CEO message <ArrowRight className="h-4 w-4" />
            </Link>

          </div>
        </div>
      </section>


      {/* Stats */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-5 py-14 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <CountUp
                value={s.value}
                suffix={s.suffix}
                decimals={s.decimals}
                className="font-display text-4xl font-extrabold text-primary sm:text-5xl"
              />
              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services teaser */}
      <section className="scene-3d mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
              Our services
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Construction, end to end</h2>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              Grey structure, MEP, finishing and handover — plus the property and investment support
              around it. Full details live on the services page.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent" /> Residential &amp; commercial
          </span>
        </div>

        <div className="mt-9 flex flex-wrap gap-2">
          {SERVICES.map((s, idx) => {
            const Icon = serviceIcons[idx] ?? Handshake;
            return (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Icon className="h-4 w-4 text-primary" /> {s.title}
              </Link>
            );
          })}
        </div>

        <Link
          to="/services"
          className="mt-9 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
        >
          View all services
        </Link>
      </section>


      {/* Projects link */}
      <section className="border-y border-border bg-card/40">
        <div className="scene-3d mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-12 sm:px-5 sm:py-16">
          <div className="max-w-xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
              Projects
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">More of our completed work</h2>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              Quetta Icon is our signature delivery. See the rest of our commercial and residential
              construction portfolio on the projects page.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
          >
            Explore all projects
          </Link>
        </div>
      </section>


      {/* Values */}
      <section className="scene-3d mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
        <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
          Our values
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">How we deal with clients</h2>
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

      {/* Why choose Quetta Builders & Associates */}
      <section className="relative overflow-hidden border-y border-border bg-card/40">
        <div className="animate-float-slow absolute -left-24 top-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="animate-float-slow absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

        <div className="scene-3d relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
              {WHY_CHOOSE.eyebrow}
            </p>
            <h2 className="ember-text mt-3 text-3xl sm:text-4xl lg:text-5xl">
              {WHY_CHOOSE.headline}
            </h2>
            <p className="mt-5 text-sm font-medium text-muted-foreground sm:text-base">
              {WHY_CHOOSE.lead}
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.reasons.map((r, idx) => {
              const Icon = whyIcons[idx % whyIcons.length] ?? HardHat;
              return (
                <div
                  key={r.title}
                  className="card-3d glass animate-rise group rounded-4xl p-7"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg">{r.title}</h3>
                  <p className="mt-3 text-sm font-medium text-muted-foreground">{r.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
            >
              Our construction services
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-bold transition-colors hover:bg-secondary"
            >
              Discuss your build
            </a>
          </div>
        </div>
      </section>


      {/* Interior gallery */}
      <section className="scene-3d w-full overflow-hidden border-y border-border bg-card/40 py-20">
        <div className="mx-auto w-full max-w-6xl px-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
            Finished work
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Interiors we handed over</h2>
          <p className="mt-4 max-w-xl text-sm font-medium text-muted-foreground">
            Drag to browse — living rooms, bedrooms, kitchens and baths finished by our own
            construction and interior team.
          </p>
        </div>
        <InteriorGallery />
      </section>

      {/* Working standards */}

      <section className="border-y border-border bg-card/40">
        <div className="scene-3d mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-14 sm:px-5 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
              Our working standards
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Four steps, fully handled</h2>
            <p className="mt-4 text-sm font-medium text-muted-foreground">
              From the first site visit to the final snag list, each project runs on the same
              sequence — brief, feasibility, documentation, execution and handover — with a named
              point of contact and written progress reporting at every stage.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {process.map((j) => (
                <div key={j.step} className="rounded-3xl border border-border bg-background/40 p-6">
                  <span className="font-display text-4xl font-extrabold text-primary/25">
                    {j.step}
                  </span>
                  <h3 className="mt-2 text-lg">{j.title}</h3>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{j.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-3d overflow-hidden rounded-4xl border border-border">
            <img
              src={IMAGES.standards}
              alt="Quetta Builders working standards on a construction site"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>


      {/* Partners marquee */}
      <section className="border-y border-border bg-card/40 py-14">
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.34em] text-muted-foreground">
          Societies &amp; authorities we work with
        </p>
        <div className="mt-9 flex w-full overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-14 pl-14">
            {[...PARTNERS, ...PARTNERS].map((p, idx) => (
              <img
                key={`${p.name}-${idx}`}
                src={p.src}
                alt={p.name}
                className="h-14 w-auto shrink-0 object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Societies teaser */}
      <section className="relative overflow-hidden border-y border-border bg-card/40">
        <div className="animate-float-slow absolute -right-24 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="scene-3d relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
              Societies
            </p>
            <h2 className="ember-text mt-3 text-3xl sm:text-4xl lg:text-5xl">Where we build</h2>
            <p className="mt-4 text-sm font-medium text-muted-foreground sm:text-base">
              Our construction and finishing teams work inside the master-planned communities of
              Islamabad and Rawalpindi.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {SOCIETIES.map((s) => (
              <span
                key={s.slug}
                className="rounded-full border border-border px-4 py-1.5 text-xs font-bold text-muted-foreground"
              >
                {s.name}
              </span>
            ))}
          </div>

          <Link
            to="/societies"
            className="mt-9 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
          >
            Explore all societies
          </Link>
        </div>
      </section>


      {/* FAQ */}
      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-5 sm:py-24">
        <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">FAQ</p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Before you invest</h2>
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border">
              <AccordionTrigger className="text-left text-base font-extrabold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-medium text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="scene-3d mx-auto w-full max-w-6xl px-5 pb-24">
        <div className="card-3d glass relative overflow-hidden rounded-4xl p-10 text-center sm:p-16">
          <div className="animate-float-slow absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
          <div className="animate-float-slow absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <BrandLogo className="mx-auto h-24" />
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">Get started today</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-muted-foreground">
            Send us the society, plot size, budget or drawings you are working with. You will
            receive an honest assessment of what it will cost, how long it will take and what it is
            likely to be worth — before you commit anything.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
            >
              Request a consultation
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-bold hover:bg-secondary"
            >
              <span className="inline-flex items-center gap-2">
                <ClipboardCheck className="h-4 w-4 text-accent" /> WhatsApp us
              </span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
