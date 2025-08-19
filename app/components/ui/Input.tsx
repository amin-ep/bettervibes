"use client";

import { useState } from "react";
import clsx from "clsx";

function Input(
  props: { iconClass?: string } & React.InputHTMLAttributes<HTMLInputElement>,
) {
  const { type = "text", iconClass, className, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = function () {
    setShowPassword((state) => !state);
  };

  return (
    <div className="relative w-full">
      {iconClass && (
        <i
          className={clsx(
            iconClass,
            "text-primary right absolute top-1/6 left-2 z-2 text-2xl font-bold",
          )}
        ></i>
      )}
      <input
        className={clsx("input", className, iconClass ? "pl-9" : "")}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        {...rest}
      />
      {type === "password" && (
        <button
          onClick={toggleShowPassword}
          type="button"
          className="absolute top-1/6 right-2 z-1 ml-1 flex aspect-square w-fit cursor-pointer items-center justify-center rounded-md p-0.5 text-2xl text-stone-900 hover:bg-stone-100 active:bg-white/50"
        >
          {!showPassword ? (
            <i className="icon-[hugeicons--view]"></i>
          ) : (
            <i className="icon-[hugeicons--view-off]"></i>
          )}
        </button>
      )}
    </div>
  );
}

export default Input;
