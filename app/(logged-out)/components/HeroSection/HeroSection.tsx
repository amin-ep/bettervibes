import MotionHeading from "@/components/motions/MotionHeading";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./HeroSection.module.css";
import MotionParagraph from "@/components/motions/MotionParagraph";
import MotionDiv from "@/components/motions/MotionDiv";
import { fadeUp } from "@/lib/animations/fade";

function HeroSection() {
  return (
    <section className="flex min-h-screen items-center py-4 md:py-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <article className="flex flex-col gap-2 sm:gap-4 md:gap-6">
          <MotionHeading
            tag="h1"
            className="w-full !justify-center text-center text-5xl sm:text-6xl md:!justify-start md:text-left md:text-7xl xl:text-8xl"
          >
            Improve Your Music Taste
          </MotionHeading>
          <MotionParagraph
            transition={{
              delay: 0.3,
            }}
            className="w-full text-center text-sm md:text-left md:text-base"
          >
            Discover new artists and genres with our curated playlists, all
            available at no cost to you.
          </MotionParagraph>
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: 0.3,
            }}
            className={clsx(
              styles["circle-col"],
              "relative mx-auto flex w-60 items-center justify-start overflow-hidden md:w-full",
            )}
          >
            <div className="bg-soft-lavender aspect-square w-30 overflow-hidden rounded-full">
              <Image
                src="/images/girl-listening-music-1.png"
                alt="girl is listening to music"
                width={70}
                height={70}
                className="aspect-square w-full"
                unoptimized
              />
            </div>
            <div
              className={clsx(
                "bg-accent absolute left-30 aspect-square w-30",
                styles.semicircle,
              )}
            ></div>
            <div
              className={clsx(
                "bg-secondary absolute left-43 z-1 aspect-square w-30",
                styles.semicircle,
              )}
            ></div>
          </MotionDiv>
        </article>

        <section className="flex flex-col gap-2 sm:gap-4 md:gap-6">
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="flex items-center justify-center"
            transition={{
              delay: 0.3,
            }}
          >
            <button className="hover:text-accent-dark max-w-50 flex-1 cursor-pointer rounded-full border border-white p-2 px-4 hover:-translate-y-[2px] hover:bg-white active:translate-y-[1px] md:p-3 md:px-6">
              Explore
            </button>
            <button className="hover:text-accent-dark max-w-50 flex-1 cursor-pointer rounded-full border border-white p-2 px-4 hover:-translate-y-[2px] hover:bg-white active:translate-y-[1px] md:p-3 md:px-6">
              Play
            </button>
          </MotionDiv>
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:gap-6"
            transition={{
              delay: 0.3,
            }}
          >
            <div
              className={clsx(
                styles["join-col-image-wrapper"],
                "from-primary to-error-content w-full overflow-y-visible bg-gradient-to-r",
              )}
            >
              <Image
                src="/images/girl-listening-music-2.png"
                alt="girl is listening to music"
                width={70}
                height={210}
                unoptimized
                className="z-1 w-full"
              />
            </div>
            <MotionDiv
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              className="flex items-center justify-center"
              transition={{
                delay: 0.3,
              }}
            >
              <Link
                href="/auth"
                className={clsx(
                  "relative flex h-50 w-50 flex-col items-center justify-center rounded-md border border-neutral-500 p-2 py-6 hover:border-neutral-400 hover:bg-white/10 md:h-60 md:w-60",
                  styles["join-link"],
                )}
              >
                <Image
                  src="/images/headphone.png"
                  alt="headphone"
                  width={100}
                  height={100}
                  className="w-40 md:w-50"
                  unoptimized
                />
                <span className="font-playfair text-xl md:text-2xl">
                  Join For Free
                </span>
                <i className="icon-[mdi--arrow-right] absolute top-2 right-2 text-2xl md:text-3xl"></i>
              </Link>
            </MotionDiv>
          </MotionDiv>
        </section>
      </div>
    </section>
  );
}

export default HeroSection;
