import { Link } from "@tanstack/react-router";
import { Clock, MessageCircle, Phone } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { CONTACT } from "@/lib/site-content";

export function ComingSoon({ title, blurb }: { title: string; blurb: string }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />

      <main className="scene-3d relative flex flex-1 items-center overflow-hidden px-4 pb-16 pt-28 sm:px-5 sm:pb-24 sm:pt-36">
        <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="animate-float-slow absolute -right-16 bottom-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

        <div className="glass card-3d relative mx-auto w-full max-w-2xl rounded-4xl px-6 py-14 text-center sm:px-12">
          <BrandLogo className="mx-auto h-24" />
          <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.28em] text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-primary" /> Coming soon
          </span>
          <h1 className="ember-text mt-5 text-4xl sm:text-5xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-md text-sm font-medium text-muted-foreground sm:text-base">
            {blurb}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-ember)] transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold hover:bg-secondary"
            >
              <Phone className="h-4 w-4 text-primary" /> {CONTACT.phoneDisplay}
            </a>
            <Link
              to="/"
              className="text-sm font-bold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
