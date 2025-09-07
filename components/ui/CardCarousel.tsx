"use client";

import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import clsx from "clsx";
import { useState } from "react";
type Props = {
  title?: {
    enabled: boolean;
    text: string;
    linked?: { enabled: boolean; href: string };
  };
  children: React.ReactNode;
  arrows?: boolean;
};

function CardCarousel({ title, children, arrows = true }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2.2,
      spacing: 4,
    },
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(min-width: 425px)": {
        slides: {
          perView: 3.2,
        },
      },
      "(min-width: 640px)": {
        slides: {
          perView: 4.2,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 5.5,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 7.3,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 8.3,
        },
      },
    },
  });

  return (
    <div className="flex flex-col">
      {title &&
        (title.linked?.enabled ? (
          <Link href={title.linked.href} className="w-fit hover:underline">
            <h2 className="mb-2 w-fit pl-2 text-2xl capitalize md:text-3xl">
              {title.text}
            </h2>
          </Link>
        ) : (
          <h2 className="mb-2 w-fit pl-2 text-2xl md:text-3xl">{title.text}</h2>
        ))}

      <div className="navigation-wrapper relative">
        <div className="keen-slider z-1" ref={sliderRef}>
          {children}
        </div>
        {loaded && instanceRef.current && arrows && (
          <>
            <Arrow
              onClick={() => instanceRef.current?.prev()}
              disabled={currentSlide === 0}
              side="left"
            />
            <Arrow
              onClick={() => instanceRef.current?.next()}
              disabled={
                instanceRef.current.track.details?.slides.length - 1 ===
                currentSlide
              }
              side="right"
            />
          </>
        )}
      </div>
    </div>
  );
}

function Arrow({
  side,
  disabled,
  onClick,
}: {
  side: "right" | "left";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={clsx(
        "to-accent-dark absolute top-0 bottom-0 z-2 items-center justify-center from-transparent",
        side == "left" ? "left-0 bg-gradient-to-l" : "right-0 bg-gradient-to-r",
        disabled ? "hidden" : "flex",
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className={clsx(
          "arrow hidden aspect-square cursor-pointer items-center justify-center rounded-full border border-white/50 bg-transparent p-1 text-3xl backdrop-blur-lg hover:border-white/70 hover:bg-white/10 active:scale-[0.9] md:flex",
          side == "left" ? "arrow--left" : "arrow--right",
        )}
      >
        {side === "left" ? (
          <i className="icon-[hugeicons--arrow-left-01]"></i>
        ) : (
          <i className="icon-[hugeicons--arrow-right-01]"></i>
        )}
      </button>
    </div>
  );
}

export default CardCarousel;
