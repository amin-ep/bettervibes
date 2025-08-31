"use client";
import { fadeUp } from "@/lib/animations/fade";
import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionParagraph({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & HTMLMotionProps<"p">) {
  return (
    <motion.p
      variants={fadeUp}
      viewport={{
        once: true,
      }}
      initial="hidden"
      whileInView="visible"
      {...rest}
    >
      {children}
    </motion.p>
  );
}
