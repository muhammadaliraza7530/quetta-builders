import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle, Phone, ShieldCheck } from "lucide-react";

import { LocalVideo } from "@/components/local-video";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { CONTACT, GUIDANCE_VIDEOS } from "@/lib/site-content";
import { OG_IMAGE } from "@/lib/site-url";

export const Route = createFileRoute("/guidance")({
  head: () => ({
    meta: [
      { title: "Construction Guidance & Consultation | Quetta Builders & Associates" },
      {
        name: "description",
        content:
          "Free construction guidance from our CEO — file and NOC checks, real construction cost, on-site quality control, honest timelines and a clean handover. Book a consultation in Bahria Town, Rawalpindi.",
      },
      { property: "og:title", content: "Construction Guidance & Consultation" },
      {
        property: "og:description",
        content:
          "CEO video guidance on buying safely, budgeting a build, quality control on site and realistic delivery timelines.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:url", content: "/guidance" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/guidance" }],
  }),
  component: GuidancePage,
});

const consultationSteps = [
  {
    title: "Tell us the plot and the plan",
    text: "Share the society, plot size and category, and what you intend to build or buy. A short call is enough to start.",
  },
  {
    title: "Documents and rate check",
    text: "We verify the file, dues, NOC status and dimensions, and benchmark the price against genuine recent transactions.",
  },
  {
    title: "Costed drawings and BOQ",
    text: "You receive engineered drawings with a stage-wise bill of quantities, so the budget and the schedule are agreed before excavation.",
  },
  {
    title: "Supervised delivery",
    text: "Weekly written progress with photographs, stage sign-offs, then handover with as-built drawings, warranties and a closed snag list.",
  },
];

function GuidancePage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="scene-3d relative overflow-hidden border-b border-border">
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-36">
          <p className="animate-rise text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
            Guidance &amp; consultation
          </p>
          <h1 className="animate-rise ember-text mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Construction guidance from our CEO
          </h1>
          <p className="animate-rise mt-5 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base">
            Most construction losses in the twin cities come from three things — an unverified file,
            a budget that was never costed properly, and a site nobody checked. In this series M.
            Hanif Gujjar, Founder &amp; CEO of Quetta Builders &amp; Associates (SMC-PVT) LTD,
            explains each of them in plain language so you can make decisions on facts rather than
            speculation.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
            >
              <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4 text-accent" /> Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="scene-3d mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
        <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
          Video series
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">Four sessions, start to handover</h2>

        <div className="mt-12 space-y-16">
          {GUIDANCE_VIDEOS.map((v, idx) => (
            <article key={v.src} className="grid items-center gap-10 lg:grid-cols-2">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <LocalVideo src={v.src} title={v.title} className="card-3d" />
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-accent">
                  {v.note}
                </p>
                <h3 className="mt-3 text-2xl sm:text-3xl">{v.title}</h3>
                <p className="mt-4 text-sm font-medium text-muted-foreground sm:text-base">
                  {v.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="scene-3d mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
            How a consultation works
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">From first call to handover</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {consultationSteps.map((s, idx) => (
              <div
                key={s.title}
                className="card-3d rounded-4xl border border-border bg-background/40 p-8"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 text-sm font-extrabold text-primary">
                  {idx + 1}
                </span>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm font-medium text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              "Free first consultation",
              "Verified documents only",
              "Written stage-wise costing",
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-bold text-muted-foreground"
              >
                <Check className="h-3.5 w-3.5 text-accent" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="scene-3d mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
        <div className="card-3d rounded-4xl border border-border bg-card p-10 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl">Have a question about your build?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base">
            Bring your plot papers, drawings or a rough idea — our team will tell you honestly what
            it costs, how long it takes and what to watch out for, before you commit anything.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
          >
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
