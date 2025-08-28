"use client";

import {
  animate,
  useMotionValue,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = { countNum: number };

export default function MusicGenresListCount({ countNum }: Props) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (val) => Math.round(val));
  const countRef = useRef(null);
  const isInView = useInView(countRef);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, countNum, {
        duration: 5,
        ease: "easeOut",
      });

      return () => controls.stop();
    }
  }, [countNum, count, isInView]);

  return (
    <div
      className="text-base-100 text-xs sm:text-sm md:text-base lg:text-lg"
      ref={countRef}
    >
      <motion.span
        initial={{
          scale: 0.8,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {rounded}
      </motion.span>
      <span>Music</span>
    </div>
  );
}
