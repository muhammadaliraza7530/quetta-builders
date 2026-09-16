import { MessageCircle } from "lucide-react";

import { CONTACT } from "@/lib/site-content";

export function WhatsappFab() {
  return (
    <a
      href={`${CONTACT.whatsapp}?text=${encodeURIComponent(
        "Hello Quetta Builders & Associates, I'd like to know more about your projects and services.",
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Quetta Builders on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.17_150)] px-4 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_40px_-12px_oklch(0.62_0.17_150_/_0.7)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
