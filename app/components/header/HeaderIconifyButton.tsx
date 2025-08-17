import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function HeaderIconifyButton({ children, className, ...rest }: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "flex aspect-square cursor-pointer items-center justify-center rounded-md p-1 text-white hover:scale-[1.05] hover:bg-white/10",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default HeaderIconifyButton;
