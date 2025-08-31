"use client";

import { HTMLMotionProps, motion } from "framer-motion";

function MotionHeader({
  children,
  ...rest
}: { children: React.ReactNode } & HTMLMotionProps<"header">) {
  return <motion.header {...rest}>{children}</motion.header>;
}

export default MotionHeader;
