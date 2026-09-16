import { FileVideo, Play } from "lucide-react";
import { useRef, useState } from "react";

type Props = {
  src: string;
  poster?: string;
  title: string;
  /** 16/9 by default; pass "9/16" for portrait phone clips. */
  ratio?: "16/9" | "9/16";
  className?: string;
};

/**
 * Plays an .mp4 placed in the public folder.
 * If the file is not there yet, it renders a placeholder that shows the exact
 * path the file must be dropped at — so the layout is already finished.
 */
export function LocalVideo({ src, poster, title, ratio = "16/9", className = "" }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [missing, setMissing] = useState(false);
  const [started, setStarted] = useState(false);

  const aspect = ratio === "9/16" ? "aspect-[9/16]" : "aspect-video";
  // With no poster image, ask the browser for a frame from the video itself
  // (media fragment) so the still shown before play comes from the film.
  const mediaSrc = poster ? src : `${src}#t=1`;

  if (missing) {
    return (
      <div
        className={`relative grid ${aspect} w-full place-items-center overflow-hidden rounded-4xl border border-dashed border-border bg-secondary/40 p-6 text-center ${className}`}
      >
        {poster ? (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
        ) : null}
        <div className="relative">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary">
            <FileVideo className="h-6 w-6" />
          </span>
          <p className="mt-4 text-sm font-extrabold">Video space reserved</p>
          <p className="mt-1 text-xs font-medium text-muted-foreground">{title}</p>
          <code className="mt-3 inline-block break-all rounded-lg bg-background/80 px-3 py-1.5 text-[11px] font-bold text-accent">
            public{src}
          </code>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-4xl border border-border bg-secondary ${className}`}
    >
      <video
        ref={videoRef}
        src={mediaSrc}
        poster={poster}
        title={title}
        controls={started}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onError={() => setMissing(true)}
        onPlay={() => setStarted(true)}
      />
      {!started ? (
        <button
          type="button"
          aria-label={`Play ${title}`}
          onClick={() => {
            setStarted(true);
            void videoRef.current?.play().catch(() => undefined);
          }}
          className="absolute inset-0 grid place-items-center bg-background/30 transition-colors hover:bg-background/20"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-ember)]">
            <Play className="h-6 w-6" />
          </span>
        </button>
      ) : null}
    </div>
  );
}
