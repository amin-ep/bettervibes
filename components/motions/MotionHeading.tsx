"use client";

import clsx from "clsx";
import { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations/fade";

type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLAttributes<HTMLHeadElement>;

function MotionHeading({ tag, children, className, ...rest }: Props) {
  const Tag = tag;
  return (
    <Tag
      {...rest}
      className={clsx(
        "flex flex-wrap items-center justify-start gap-1 overflow-hidden",
        className,
      )}
    >
      {children
        ?.toString()
        .split(",")
        .map((str, idx) => (
          <motion.span
            viewport={{
              once: true,
            }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{
              delay: (idx + 1) * 0.1,
            }}
            key={idx}
          >
            {str}
          </motion.span>
        ))}
    </Tag>
  );
}

export default MotionHeading;
