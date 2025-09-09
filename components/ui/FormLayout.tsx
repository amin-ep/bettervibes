"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import Input from "./Input";

// Types
type FormProps = {
  children: React.ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

type LogoProps = {
  containerClassName?: string;
  position?: "center" | "right" | "left";
  imageVariation?: "horizontal" | "vertical" | "iconic";
  color?: "white" | "primary";
};

type ControlProps = {
  errorMessage?: string;
  containerClassName?: string;
  children: React.ReactNode;
  labelTitle?: string;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

type SubmitProps = {
  children: React.ReactNode;
  isSubmitting: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type LinkDescriptionProps = {
  children: React.ReactNode;
  href: string;
  message: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type TextProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

// Components
function FormLayout(props: FormProps) {
  const { className, ...rest } = props;
  return (
    <form
      className={clsx(
        "mx-auto flex max-w-96 flex-col items-center gap-2 px-2 md:gap-3",
        className,
      )}
      {...rest}
    >
      {props.children}
    </form>
  );
}

function Header(
  props: { children: ReactNode } & React.HtmlHTMLAttributes<HTMLElement>,
) {
  const { className, ...rest } = props;
  return (
    <header {...rest} className={clsx("mb-2 md:mb-4 lg:mb-6", className)}>
      {props.children}
    </header>
  );
}
function Heading(
  props: { children: ReactNode } & React.HtmlHTMLAttributes<HTMLHeadingElement>,
) {
  const { className, ...rest } = props;
  return (
    <h1
      className={clsx("text-3xl text-stone-900 lg:text-4xl", className)}
      {...rest}
    >
      {props.children}
    </h1>
  );
}

function Text({ children, className, ...rest }: TextProps) {
  return (
    <p
      className={clsx(
        className,
        "mt-1 text-xs text-stone-900 md:mt-2 md:text-sm",
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

function Logo({
  containerClassName,
  position = "center",
  imageVariation = "iconic",
  color = "primary",
}: LogoProps) {
  return (
    <div
      className={clsx(
        "mb-3 flex items-center md:mb-6",
        containerClassName,
        position == "center"
          ? "justify-center"
          : position == "right"
            ? "justify-end"
            : "justify-start",
      )}
    >
      <Image
        alt="Vibe"
        src={`/images/logo-${imageVariation}-${color}.png`}
        width={70}
        height={70}
      />
    </div>
  );
}

function Control(props: ControlProps) {
  const {
    children,
    containerClassName,
    labelTitle,
    className,
    errorMessage,
    ...rest
  } = props;

  return (
    <motion.div
      className={clsx(
        "flex w-full flex-col gap-1 md:gap-1.5",
        containerClassName,
      )}
    >
      {labelTitle && (
        <label
          htmlFor={props.htmlFor}
          className={clsx(
            "label text-xs font-bold text-stone-950 md:text-sm",
            className,
          )}
          {...rest}
        >
          {labelTitle}
        </label>
      )}
      {children}
      {errorMessage && (
        <p
          className={clsx(
            "text-error flex items-center gap-1.5 text-xs md:text-sm",
          )}
        >
          <i className="icon-[hugeicons--information-circle]"></i>
          <span>{errorMessage}</span>
        </p>
      )}
    </motion.div>
  );
}

function Submit({ children, className, isSubmitting, ...props }: SubmitProps) {
  return (
    <button
      type="submit"
      {...props}
      className={clsx("btn btn-primary mt-3 md:mt-6", className)}
    >
      {isSubmitting ? <span className="loading"></span> : children}
    </button>
  );
}

function LinkDescription({
  href,
  children,
  className,
  message,
  ...rest
}: LinkDescriptionProps) {
  return (
    <div className="text-base-300 my-1 flex flex-wrap items-center justify-start text-sm font-semibold">
      {message}{" "}
      <Link
        href={href}
        {...rest}
        className={clsx("text-primary mb-0.5 hover:underline", className)}
      >
        {children}
      </Link>
    </div>
  );
}

FormLayout.Logo = Logo;
FormLayout.Control = Control;
FormLayout.Input = Input;
FormLayout.Submit = Submit;
FormLayout.LinkDescription = LinkDescription;
FormLayout.Header = Header;
FormLayout.Heading = Heading;
FormLayout.Text = Text;
export default FormLayout;
