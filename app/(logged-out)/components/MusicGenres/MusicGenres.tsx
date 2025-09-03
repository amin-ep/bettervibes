"use client";

import clsx from "clsx";
import { useState } from "react";

export default function MusicGenres({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div className={clsx("overflow-hidden", !showMore ? "h-110" : "h-auto")}>
        {children}
      </div>
      <div
        className={clsx(
          "to-accent-dark flex items-center justify-center bg-gradient-to-b from-transparent",
          !showMore ? "-translate-y-10" : "",
        )}
      >
        <button
          className="btn btn-accent"
          onClick={() => setShowMore((state) => !state)}
        >
          Show More
        </button>
      </div>
    </div>
  );
}
