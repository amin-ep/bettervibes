"use client";
import clsx from "clsx";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

type Props = {
  value?: File | null | string;
  onChange?: (file: File) => void;
  className?: string;
  imageClassName?: string;
};

function ImageDropzone({
  value = null,
  onChange,
  className,
  imageClassName,
}: Props) {
  const [file, setFile] = useState<File | null | string>(value);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selected = acceptedFiles[0];
      setFile(selected);
      if (onChange) onChange(selected);
    },
    [onChange],
  );

  const onDropRejected = () => {
    if (value instanceof File) {
      toast.error("Only image files are allowed");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={clsx(
        "relative flex aspect-square w-32 cursor-pointer items-center justify-center rounded-full border-2 border-dashed transition-colors md:w-40",
        isDragActive
          ? "bg-base-300 border-primary"
          : "border-base-200 hover:border-primary",
        className,
      )}
    >
      <input {...getInputProps()} className="absolute inset-0 opacity-0" />

      {file ? (
        <Image
          src={typeof file === "string" ? file : URL.createObjectURL(file)}
          alt={(file as File)?.name || "profile image"}
          width={96}
          height={96}
          className={clsx(
            "aspect-square h-full w-full rounded-full object-cover",
            imageClassName,
          )}
          unoptimized
        />
      ) : (
        <div className="flex flex-col items-center gap-2">
          <span>{isDragActive ? "Drop Here" : "Upload"}</span>
          <motion.span
            animate={isDragActive ? { y: [0, -12, 0] } : { y: 0 }}
            transition={
              isDragActive
                ? {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 1,
                    ease: "easeInOut",
                  }
                : {}
            }
            className="text-4xl"
          >
            {isDragActive ? (
              <i className="icon-[hugeicons--upload-03]"></i>
            ) : (
              <i className="icon-[hugeicons--image-03]"></i>
            )}
          </motion.span>
        </div>
      )}
    </div>
  );
}

export default ImageDropzone;
