"use client";

import { useEffect, useState } from "react";

export function useTimer({ step }: { step: number }) {
  const [time, setTime] = useState(step);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time !== 0) {
        setTime((s) => s - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return { time, setTime };
}
