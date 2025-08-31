import MotionHeading from "@/components/motions/MotionHeading";
import { categoriesArr } from "@/lib/constants";
import Image from "next/image";
import CategoriesCarousel from "./CategoriesCarousel";
import MotionParagraph from "@/components/motions/MotionParagraph";

export default function Categories() {
  return (
    <div className="py-4">
      <MotionHeading
        className="text-2xl sm:text-3xl md:gap-2 md:text-4xl lg:text-5xl"
        tag="h2"
      >
        With Many Categories
      </MotionHeading>
      <CategoriesCarousel>
        {categoriesArr.map((category) => (
          <div
            className="keen-slider__slide relative aspect-[16/9]"
            key={category.title}
          >
            <div className="absolute inset-0 z-1 flex items-center justify-center rounded-xl bg-gradient-to-b from-transparent to-black/50 p-4">
              <MotionParagraph className="text-lg sm:text-xl md:text-2xl">
                {category.title}
              </MotionParagraph>
            </div>
            <Image
              src={category.imagePath}
              alt={category.title}
              width={240}
              height={186}
              className="h-full w-full rounded-xl object-cover"
              unoptimized
            />
          </div>
        ))}
      </CategoriesCarousel>
    </div>
  );
}
