"use client";
import { HTMLMotionProps, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
} & HTMLMotionProps<"div">;

function MotionDiv({ children, ...rest }: Props) {
  return (
    <motion.div viewport={{ once: true }} {...rest}>
      {children}
    </motion.div>
  );
}

export default MotionDiv;
