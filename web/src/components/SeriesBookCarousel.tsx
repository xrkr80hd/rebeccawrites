"use client";

import type { SeriesBook } from "@/lib/mock-cms";
import { useRef } from "react";

type SeriesBookCarouselProps = {
  books: SeriesBook[];
};

export function SeriesBookCarousel({ books }: SeriesBookCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollTrack(direction: "previous" | "next") {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const distance = Math.max(track.clientWidth * 0.82, 220);

    track.scrollBy({
      behavior: "smooth",
      left: direction === "next" ? distance : -distance,
    });
  }

  return (
    <div className="series-carousel">
      <button
        aria-label="Previous book"
        className="series-carousel-control previous"
        onClick={() => scrollTrack("previous")}
        type="button"
      >
        {"<"}
      </button>
      <div className="series-book-grid" ref={trackRef}>
        {books.map((book) => (
          <article className="series-book-card" key={book.volume} tabIndex={0}>
            <div className="series-book-art" style={{ backgroundImage: `url(${book.image})` }} />
            <div>
              <span>{book.volume}</span>
              <h3>{book.title}</h3>
            </div>
          </article>
        ))}
      </div>
      <button
        aria-label="Next book"
        className="series-carousel-control next"
        onClick={() => scrollTrack("next")}
        type="button"
      >
        {">"}
      </button>
    </div>
  );
}
