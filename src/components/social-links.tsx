import { Facebook, Instagram, Youtube } from "lucide-react";

import { SOCIAL } from "@/lib/site-content";

const pill =
  "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={SOCIAL.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quetta Builders & Associates on YouTube"
        className={pill}
      >
        <Youtube className="h-4 w-4 text-primary" /> YouTube
      </a>
      <a
        href={SOCIAL.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quetta Builders & Associates on Instagram"
        className={pill}
      >
        <Instagram className="h-4 w-4 text-accent" /> Instagram
      </a>
      <a
        href={SOCIAL.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quetta Builders & Associates on Facebook"
        className={pill}
      >
        <Facebook className="h-4 w-4 text-primary" /> Facebook
      </a>
    </div>
  );
}
