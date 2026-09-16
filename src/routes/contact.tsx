import { createFileRoute } from "@tanstack/react-router";
import { OG_IMAGE } from "@/lib/site-url";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { CONTACT, IMAGES, SOCIAL } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Quetta Builders & Associates — Bahria Town, Rawalpindi" },
      {
        name: "description",
        content:
          "Visit us at Plaza No.43, MCB Bank's Basement, Dolphin Chowk, C Junction Commercial, Phase 8, Bahria Town, Rawalpindi. Call +92 332 1503141, WhatsApp us or email info@quettabuilders.com.",
      },
      { property: "og:title", content: "Contact Quetta Builders & Associates" },
      {
        property: "og:description",
        content:
          "Call, WhatsApp, email or visit our Bahria Town Phase 8 office for property, construction and investment advice.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const subjects = [
  "Buying a property",
  "Selling a property",
  "Construction / build my home",
  "Interior & finishing",
  "Investment consultancy",
  "Rental services",
  "Other",
];

const socialLinks = [
  { label: "WhatsApp", href: CONTACT.whatsapp, Icon: MessageCircle },
  { label: "Facebook", href: SOCIAL.facebook, Icon: Facebook },
  { label: "Instagram", href: SOCIAL.instagram, Icon: Instagram },
  { label: "YouTube", href: SOCIAL.youtube, Icon: Youtube },
];

type Status = "idle" | "sending" | "sent" | "error";

const labelClass = "block text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground";

const inputClass =
  "mt-2 block h-12 w-full min-w-0 max-w-full rounded-2xl border border-border bg-background/60 px-4 text-sm font-medium text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/25";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [waLink, setWaLink] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const summary = [
      "New enquiry — Quetta Builders and Associates SMC PVT LTD",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Interested in: ${subject}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(summary)}`;
    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Website enquiry — ${subject} — ${name}`,
          _template: "table",
          _captcha: "false",
          Name: name,
          Phone: phone,
          Email: email || "not provided",
          "Interested in": subject,
          Message: message,
        }),
      });
      if (!response.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }

    setWaLink(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="scene-3d relative overflow-hidden border-b border-border">
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-28 sm:px-5 sm:pb-16 sm:pt-36">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.28em] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" /> Bahria Town Phase 8, Rawalpindi
          </span>
          <h1 className="animate-rise ember-text mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="animate-rise mt-5 max-w-2xl text-sm font-medium text-muted-foreground sm:text-base">
            Whether you are buying a plot, selling a completed unit, planning a grey structure or
            budgeting a turnkey build, our team will give you an honest assessment before you commit
            a rupee. Send the form below and it reaches our inbox and our WhatsApp at the same time.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="scene-3d mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-5 sm:py-20 lg:gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <div className="card-3d glass rounded-4xl p-6 sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-primary">
              Reach us directly
            </p>

            <ul className="mt-7 space-y-5 text-sm font-bold">
              <li>
                <a href={CONTACT.phoneHref} className="flex items-start gap-3 hover:text-primary">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    {CONTACT.phoneDisplay}
                    <span className="mt-1 block text-xs font-medium text-muted-foreground">
                      Office &amp; sales line
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-primary"
                >
                  <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    {CONTACT.phoneDisplay}
                    <span className="mt-1 block text-xs font-medium text-muted-foreground">
                      WhatsApp — fastest response
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 break-all hover:text-primary"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    {CONTACT.email}
                    <span className="mt-1 block text-xs font-medium text-muted-foreground">
                      Documentation &amp; formal enquiries
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 font-medium text-muted-foreground">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {CONTACT.address}
              </li>
              <li className="flex items-start gap-3 font-medium text-muted-foreground">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                Monday to Saturday, 10:00 AM – 8:00 PM · Sunday by appointment
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Quetta Builders & Associates on ${label}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Icon className="h-4 w-4 text-primary" /> {label}
                </a>
              ))}
            </div>
          </div>

          <div className="card-3d mt-6 overflow-hidden rounded-4xl border border-border">
            <img
              src={IMAGES.contactSide}
              alt="Quetta Builders & Associates office in Bahria Town Phase 8, Rawalpindi"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full max-w-full rounded-4xl border border-border bg-card/60 p-5 shadow-[var(--shadow-lift)] sm:p-8 lg:p-10">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-primary">
            Send an enquiry
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Tell us what you are planning</h2>
          <p className="mt-3 text-sm font-medium text-muted-foreground">
            Share a few details and our team will respond with rates, availability or a construction
            estimate — usually the same working day.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate={false}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label htmlFor="name" className={labelClass}>
                  Full name
                </label>
                <input
                  id="name"
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div className="min-w-0">
                <label htmlFor="phone" className={labelClass}>
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  required
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+92 3XX XXXXXXX"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="min-w-0">
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div className="min-w-0">
              <label htmlFor="subject" className={labelClass}>
                Interested in
              </label>
              <select
                id="subject"
                name="subject"
                defaultValue={subjects[0]}
                className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                }}
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="min-w-0">
              <label htmlFor="message" className={labelClass}>
                Your message
              </label>
              <textarea
                id="message"
                required
                name="message"
                rows={5}
                placeholder="Society, plot size, budget, timeline or anything else we should know."
                className={`${inputClass} h-auto resize-y py-3 leading-relaxed`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-[1.02] disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send enquiry
                </>
              )}
            </button>

            {status === "sent" && (
              <p className="rounded-2xl border border-border bg-background/50 px-5 py-4 text-sm font-medium text-muted-foreground">
                Thank you — your enquiry has been emailed to our team and opened in WhatsApp so you
                can send it there as well. We will get back to you shortly.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-4 text-sm font-medium text-muted-foreground">
                Your email could not be sent from the browser this time. Your message has been
                opened in WhatsApp instead — or write to us at{" "}
                <a href={`mailto:${CONTACT.email}`} className="font-bold text-primary">
                  {CONTACT.email}
                </a>
                .
              </p>
            )}

            {waLink && (
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-accent"
              >
                Open in WhatsApp again <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border bg-card/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-5 sm:py-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-primary">
            Visit the office
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl">Dolphin Chowk, C Junction Commercial</h2>
          <div className="card-3d mt-8 overflow-hidden rounded-4xl border border-border">
            <iframe
              title="Quetta Builders & Associates office location"
              src="https://maps.google.com/maps?q=33.4906378,73.072446&z=18&hl=en&output=embed"
              className="h-[260px] w-full border-0 sm:h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://maps.app.goo.gl/KqRErmRFx8XLR1Y8A"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold hover:bg-secondary"
          >
            <MapPin className="h-4 w-4 text-primary" /> Get directions on Google Maps
          </a>

        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
