import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { SHOWREEL } from "@/lib/site-content";

export function ShowreelPhone() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [muted, setMuted] = useState(false);
  const [videoOk, setVideoOk] = useState(true);

  // Play (with sound) while the section is on screen, pause when it leaves.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) setInView(entry.isIntersecting && entry.intersectionRatio > 0.5);
      },
      { threshold: [0, 0.5, 0.75, 1] },
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!inView) {
      video.pause();
      return;
    }

    let cancelled = false;
    video.muted = false;
    video.volume = 1;
    video
      .play()
      .then(() => {
        if (!cancelled) setMuted(false);
      })
      .catch(() => {
        // Autoplay with audio blocked by the browser — fall back to muted playback.
        if (cancelled) return;
        video.muted = true;
        setMuted(true);
        void video.play().catch(() => undefined);
      });

    return () => {
      cancelled = true;
    };
  }, [inView]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
    if (!next) video.volume = 1;
    void video.play().catch(() => undefined);
  };

  return (
    <div ref={wrapRef} className="relative mx-auto w-full max-w-[330px]">
      <div className="animate-float-slow absolute -inset-10 -z-10 rounded-full bg-primary/25 blur-3xl" />
      <div className="relative rounded-[2.75rem] border border-border bg-card p-2.5 shadow-[var(--shadow-lift)]">
        <div className="absolute left-1/2 top-4 z-10 h-1.5 w-20 -translate-x-1/2 rounded-full bg-background/70" />
        <div className="relative overflow-hidden rounded-[2.2rem] bg-background">
          {videoOk ? (
            <video
              ref={videoRef}
              src={SHOWREEL.video}
              poster={SHOWREEL.poster}
              className="block aspect-[9/16] h-full w-full object-cover"
              playsInline
              loop
              preload="metadata"
              onError={() => setVideoOk(false)}
            />
          ) : (
            <img
              src={SHOWREEL.poster}
              alt="Quetta Builders & Associates project showreel"
              className="block aspect-[9/16] h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          )}
          {videoOk ? (
            <button
              type="button"
              onClick={toggleSound}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="glass absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full text-foreground"
            >
              {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
