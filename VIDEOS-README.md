# Where to put your videos

Copy your .mp4 files into the `public/videos` folder using EXACTLY these names.
No code changes needed — the video appears automatically once the file is there.

## 1) Home page showreel (Home → "Showreel" section)

    public/videos/showreel.mp4

## 2) Projects page video (Projects → "Project film" section)

    public/videos/projects/project-fast-track.mp4

## 3) Construction Guidance & Consultation page (CEO videos)

Page address: /guidance  (also in the top menu as "Guidance")

    public/videos/guidance/guidance-1-before-you-buy.mp4
    public/videos/guidance/guidance-2-construction-cost.mp4
    public/videos/guidance/guidance-3-quality-control.mp4
    public/videos/guidance/guidance-4-timeline-handover.mp4

Video 1 — Before you buy: file, NOC and real market rate
Video 2 — What construction really costs (grey structure to finishing)
Video 3 — Quality control on site
Video 4 — Realistic timelines, snag list and handover

## Notes

- Until a file is added, that spot shows a neat "Video space reserved" box with the path.
- Use .mp4 encoded as H.264 video with AAC audio for reliable Vercel and browser playback.
- Keep each video reasonably compressed before adding it so Vercel deployment and page loading stay fast.
- Preserve these exact lowercase folder names and filenames.
- Texts, headings and descriptions can be edited in `src/lib/site-content.ts`
  (`PROJECT_VIDEO` and `GUIDANCE_VIDEOS`).
