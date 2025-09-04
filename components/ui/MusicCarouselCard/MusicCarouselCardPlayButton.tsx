"use client";

import { usePlay } from "@/contexts/PlayContext";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type Props = { musicId: string } & ButtonHTMLAttributes<HTMLButtonElement>;

function MusicCarouselCardPlayButton({ musicId, className, ...rest }: Props) {
  const { togglePlay, currentPlayingMusic } = usePlay();

  return (
    <button
      {...rest}
      className={clsx(
        "hover:bg-primary absolute right-2 -bottom-10 z-1 flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full bg-white text-xl text-black transition hover:text-2xl hover:text-white",
        className,
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("play");
        togglePlay(musicId);
      }}
    >
      <i className="icon-[hugeicons--play]"></i>
    </button>
  );
}

export default MusicCarouselCardPlayButton;
