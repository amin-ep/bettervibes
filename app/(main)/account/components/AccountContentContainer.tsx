import MotionDiv from "@/components/motions/MotionDiv";
import clsx from "clsx";
import { HTMLMotionProps } from "framer-motion";
import React from "react";

type Props = { children: React.ReactNode } & HTMLMotionProps<"div">;

function AccountContentContainer({ children, className, ...rest }: Props) {
  return (
    <MotionDiv
      {...rest}
      className={clsx("bg-base-300 rounded-xl p-2 shadow-md md:p-4", className)}
    >
      {children}
    </MotionDiv>
  );
}

export default AccountContentContainer;
