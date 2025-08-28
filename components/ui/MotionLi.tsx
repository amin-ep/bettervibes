"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

type Props = { children: React.ReactNode } & HTMLMotionProps<"li">;

function MotionLi({ children, ...rest }: Props) {
  return <motion.li {...rest}>{children}</motion.li>;
}

export default MotionLi;
