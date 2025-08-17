import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  tooltipOption?: {
    enabled: boolean;
    title: string;
  };
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function HeaderIconifyButton({
  children,
  className,
  tooltipOption,
  ...rest
}: Props) {
  return (
    <div
      className={clsx(
        tooltipOption?.enabled &&
          "tooltip tooltip-bottom tooltip-primary rounded-xl",
      )}
      data-tip={tooltipOption?.title}
    >
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
    </div>
  );
}

export default HeaderIconifyButton;
