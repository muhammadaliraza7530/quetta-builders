import AutoScroll from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { GALLERY } from "@/lib/site-content";

export function InteriorGallery() {
  return (
    <Carousel
      opts={{ align: "start", loop: true, dragFree: true, containScroll: false }}
      plugins={[
        AutoScroll({
          speed: 4,
          direction: "backwards",
          startDelay: 0,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          stopOnFocusIn: false,
        }),
      ]}
      className="mt-12 cursor-grab active:cursor-grabbing"
    >
      <CarouselContent className="-ml-4">
        {[...GALLERY, ...GALLERY].map((g, idx) => (
          <CarouselItem
            key={`${g.src}-${idx}`}
            className="basis-[74%] pl-4 sm:basis-[44%] lg:basis-[28%]"
          >
            <figure className="card-3d group overflow-hidden rounded-4xl border border-border bg-card">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={g.src}
                  alt={g.caption}
                  draggable={false}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {g.caption}
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
