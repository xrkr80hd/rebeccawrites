"use client";

import type { Character } from "@/lib/mock-cms";
import { useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

type CharacterCarouselProps = {
  characters: Character[];
};

export function CharacterCarousel({ characters }: CharacterCarouselProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [openCharacter, setOpenCharacter] = useState<Character | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const didSwipeRef = useRef(false);
  const dragStateRef = useRef({
    isPointerDown: false,
    scrollLeft: 0,
    x: 0,
    y: 0,
  });

  function stopDragging(element: HTMLDivElement, pointerId: number) {
    dragStateRef.current.isPointerDown = false;
    setIsDragging(false);

    if (element.hasPointerCapture(pointerId)) {
      element.releasePointerCapture(pointerId);
    }

    window.setTimeout(() => {
      didSwipeRef.current = false;
    }, 0);
  }

  function startMouseDrag(event: ReactMouseEvent<HTMLDivElement>) {
    if (event.button !== 0) {
      return;
    }

    const element = event.currentTarget;
    const startX = event.clientX;
    const startScrollLeft = element.scrollLeft;

    didSwipeRef.current = false;
    dragStateRef.current.isPointerDown = true;

    function handleMouseMove(moveEvent: MouseEvent) {
      const distanceX = moveEvent.clientX - startX;

      if (Math.abs(distanceX) > 4) {
        didSwipeRef.current = true;
        setIsDragging(true);
        element.scrollLeft = startScrollLeft - distanceX;
        moveEvent.preventDefault();
      }
    }

    function handleMouseUp() {
      dragStateRef.current.isPointerDown = false;
      setIsDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      window.setTimeout(() => {
        didSwipeRef.current = false;
      }, 0);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  return (
    <>
      <div
        className={`character-grid ${isDragging ? "dragging" : ""}`}
        aria-label="Character carousel"
        onMouseDown={startMouseDrag}
        onPointerCancel={(event) => stopDragging(event.currentTarget, event.pointerId)}
        onPointerDown={(event) => {
          if (event.pointerType === "mouse" && event.button !== 0) {
            return;
          }

          didSwipeRef.current = false;
          dragStateRef.current = {
            isPointerDown: true,
            scrollLeft: event.currentTarget.scrollLeft,
            x: event.clientX,
            y: event.clientY,
          };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!dragStateRef.current.isPointerDown) {
            return;
          }

          const distanceX = event.clientX - dragStateRef.current.x;
          const distanceY = event.clientY - dragStateRef.current.y;
          const absDistanceX = Math.abs(distanceX);
          const absDistanceY = Math.abs(distanceY);

          if (absDistanceX > 8 && absDistanceX > absDistanceY) {
            didSwipeRef.current = true;
            setIsDragging(true);
            event.currentTarget.scrollLeft = dragStateRef.current.scrollLeft - distanceX;
            event.preventDefault();
          }
        }}
        onPointerUp={(event) => stopDragging(event.currentTarget, event.pointerId)}
      >
        {characters.map((character) => (
          <button
            className={`character-card ${activeSlug === character.slug ? "active" : ""}`}
            key={character.slug}
            onClick={() => {
              if (didSwipeRef.current) {
                didSwipeRef.current = false;
                return;
              }

              if (activeSlug === character.slug) {
                setOpenCharacter(character);
                return;
              }

              setActiveSlug(character.slug);
            }}
            type="button"
          >
            <div className={`character-art character-art-${character.slug}`}>
              <img draggable={false} src={character.portraitImage} alt={`${character.name} character artwork`} />
            </div>
            <div className="character-meta">
              <h3>{character.name}</h3>
              <span>{character.descriptor}</span>
            </div>
          </button>
        ))}
      </div>

      {openCharacter ? (
        <div className="character-dialog" role="dialog" aria-modal="true" aria-label={`${openCharacter.name} character card`}>
          <button className="character-dialog-backdrop" onClick={() => setOpenCharacter(null)} type="button" aria-label="Close character card" />
          <article className="character-dialog-card">
            <button className="character-dialog-close" onClick={() => setOpenCharacter(null)} type="button" aria-label="Close character card">
              X
            </button>
            <div className={`character-art character-art-${openCharacter.slug}`}>
              <img draggable={false} src={openCharacter.portraitImage} alt={`${openCharacter.name} character artwork`} />
            </div>
            <div className="character-meta">
              <h3>{openCharacter.name}</h3>
              <span>{openCharacter.descriptor}</span>
            </div>
          </article>
        </div>
      ) : null}
    </>
  );
}
