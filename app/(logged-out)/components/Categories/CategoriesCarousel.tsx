"use client";

import { useKeenSlider } from "keen-slider/react";
import React from "react";

type Props = { children: React.ReactNode };

function CategoriesCarousel({ children }: Props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.5,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  );
}

export default CategoriesCarousel;
