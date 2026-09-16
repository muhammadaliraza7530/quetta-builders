import { Play } from "lucide-react";
import { useState } from "react";

import { VIDEOS } from "@/lib/site-content";

export function VideoWall() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-3">
      {VIDEOS.map((v, idx) => (
        <article
          key={v.id}
          className="card-3d animate-rise group overflow-hidden rounded-4xl border border-border bg-card"
          style={{ animationDelay: `${idx * 110}ms` }}
        >
          <div className="relative aspect-video w-full overflow-hidden bg-secondary">
            {active === v.id ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setActive(v.id)}
                aria-label={`Play ${v.title}`}
                className="absolute inset-0 h-full w-full"
              >
                <img
                  src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-background/35">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-ember)] transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6" />
                  </span>
                </span>
              </button>
            )}
          </div>
          <div className="p-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-accent">
              {v.note}
            </p>
            <h3 className="mt-2 text-lg">{v.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
