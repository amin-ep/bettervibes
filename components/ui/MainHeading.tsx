"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

export default function MainHeading({
  children,
  className,
  ...rest
}: { children: React.ReactNode } & HTMLAttributes<HTMLHeadElement>) {
  return (
    <h2
      {...rest}
      className={clsx(
        "flex items-center justify-start gap-1 overflow-hidden text-2xl sm:text-3xl md:gap-2 md:text-4xl lg:text-5xl",
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
              transform: "translateY(16px) rotate(5deg)",
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
    </h2>
  );
}
