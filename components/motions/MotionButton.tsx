import { HTMLMotionProps } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

type Props = { children: React.ReactNode } & HTMLMotionProps<"button">;

function MotionButton({ children, ...rest }: Props) {
  return <motion.button {...rest}>{children}</motion.button>;
}

export default MotionButton;
