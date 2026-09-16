import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { SocialLinks } from "@/components/social-links";
import { COMPANY, CONTACT } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo className="h-16" />
            <span className="font-display text-lg font-extrabold leading-tight">
              Quetta Builders &amp; Associates
              <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                (SMC-PVT) LTD
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm font-medium text-muted-foreground">
            A property management, construction and investment firm serving the twin cities for
            almost 13 years — Bahria Town, DHA, ICHS, Capital Smart City, Top City, Mumtaz City, PWD
            and Ghauri Town.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-[0.24em] text-muted-foreground">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm font-bold">
            <li>
              <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" /> {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {CONTACT.address}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-extrabold uppercase tracking-[0.24em] text-muted-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm font-bold">
            <li>
              <Link to="/projects" className="text-muted-foreground hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-muted-foreground hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/guidance" className="text-muted-foreground hover:text-primary">
                Construction guidance
              </Link>
            </li>
            <li>
              <Link to="/societies" className="text-muted-foreground hover:text-primary">
                Societies
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-primary">
                About us
              </Link>
            </li>
            <li>
              <Link to="/ceo" className="text-muted-foreground hover:text-primary">
                CEO message
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-bold transition-colors hover:bg-secondary"
          >
            <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs font-bold text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
        </p>
        <p className="mt-1.5">
          Design and develop by <span className="text-primary">BrandUp</span>
        </p>
      </div>
    </footer>
  );
}
