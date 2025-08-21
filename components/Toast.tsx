"use client";
import clsx from "clsx";
import React from "react";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
export default function Toast() {
  const contextClassNames: { [k: string]: string } = {
    success: "border-success",
    error: "border-error",
    warning: "border-warning",
    info: "border-info",
    default: "border-white",
  };
  return (
    <ToastContainer
      autoClose={5000}
      limit={1}
      closeButton={false}
      position="bottom-center"
      hideProgressBar
      closeOnClick
      toastClassName={(context) =>
        contextClassNames[context?.type || "default"] +
        ` flex items-center justify-center bg-black rounded-full p-3.5 text-sm shadow-[0_0_8px_0_rgba(0,0,0,0.4)] border`
      }
      pauseOnHover
      theme="dark"
      icon={({ type }) => {
        switch (type) {
          case "info":
            return (
              <Icon
                containerClass="bg-info"
                iconClass="icon-[hugeicons--information-circle]"
              />
            );

          case "error":
            return (
              <Icon
                containerClass="bg-error"
                iconClass="icon-[hugeicons--information-circle]"
              />
            );

          case "success":
            return (
              <Icon
                containerClass="bg-success"
                iconClass="icon-[hugeicons--checkmark-badge-01]"
              />
            );

          case "warning":
            return (
              <Icon
                containerClass="bg-warning"
                iconClass="icon-[hugeicons--danger]"
              />
            );

          default:
            return null;
        }
      }}
    />
  );
}

function Icon({
  iconClass,
  containerClass,
}: {
  iconClass: string;
  containerClass: string;
}) {
  return (
    <span
      className={clsx(
        "flex aspect-square h-full w-full items-center justify-center rounded-full",
        containerClass,
      )}
    >
      <i className={clsx("text-2xl", iconClass)}></i>
    </span>
  );
}
