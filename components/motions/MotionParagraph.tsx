"use client";
import { fadeUp } from "@/lib/animations/fade";
import { motion } from "framer-motion";

export default function MotionParagraph({
  children,
}: {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <motion.p
      variants={fadeUp}
      viewport={{
        once: true,
      }}
      initial="hidden"
      whileInView="visible"
    >
      {children}
    </motion.p>
  );
}
