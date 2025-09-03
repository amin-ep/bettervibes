import MotionLink from "@/components/motions/MotionLink";
import clsx from "clsx";
import Image from "next/image";
import styles from "./MusicCard.module.css";
import MusicCarouselCardPlayButton from "./MusicCarouselCardPlayButton";
import { AnchorHTMLAttributes } from "react";
import { HTMLMotionProps } from "framer-motion";

type Props = { music: Music } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> &
  HTMLMotionProps<"a">;

function MusicCarouselCard({ music, ...rest }: Props) {
  return (
    <MotionLink
      href={`/musics/${music._id}`}
      className={clsx(
        "keen-slider__slide relative z-3 overflow-hidden rounded-xl p-2.5",
        "after:transition-height after:absolute after:inset-0 after:-z-1 after:h-0 after:w-full after:bg-white/2 after:duration-200 hover:after:h-full",
        styles.card,
      )}
      {...rest}
    >
      <div className="relative overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_FILE_BASE_URL}/${music.coverImageUrl}`}
          alt={music.name}
          width={170}
          height={170}
          className="aspect-square w-full rounded-xl"
          unoptimized
        />
        <MusicCarouselCardPlayButton
          className={styles.play}
          musicId={music._id}
        />
      </div>
      <div className="mt-2 md:mt-4">
        <p className="line-clamp-1">{music.name}</p>
      </div>
    </MotionLink>
  );
}

export default MusicCarouselCard;
