"use client";

import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
type Props = {
  title?: { enabled: boolean; href: string; text: string };
  children: React.ReactNode;
};

function CardCarousel({ title, children }: Props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.2,
      spacing: 4,
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
      {title && title.enabled && (
        <Link href={title.href} className="mb-2 w-fit hover:underline">
          <h2 className="w-fit pl-2 text-2xl md:text-3xl">{title.text}</h2>
        </Link>
      )}
      <div className="keen-slider" ref={sliderRef}>
        {children}
      </div>
    </div>
  );
}

export default CardCarousel;
