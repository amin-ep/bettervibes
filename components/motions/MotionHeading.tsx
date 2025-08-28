"use client";

import clsx from "clsx";
import { HTMLAttributes } from "react";
import { motion } from "framer-motion";

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
        .split(" ")
        .map((str, idx) => (
          <motion.span
            initial={{
              opacity: 0,
              transform: "translateY(16px)",
              backdropFilter: "blur(5px)",
            }}
            whileInView={{
              opacity: 1,

              transform: "translateY(0)",
              backdropFilter: "blur(0)",
            }}
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
