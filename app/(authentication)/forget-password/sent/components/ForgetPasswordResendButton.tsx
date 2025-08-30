"use client";

import { forgetPassword } from "@/actions/auth-actions";
import { useTimer } from "@/hooks/useTimer";
import { useCallback, useTransition } from "react";
import { toast } from "react-toastify";

type Props = { email: string };

function ForgetPasswordResendButton({ email }: Props) {
  const [isPending, startTransition] = useTransition();
  const { time, setTime } = useTimer({ step: 60 });

  const resend = async () => {
    startTransition(async () => {
      const res = await forgetPassword({ email });
      if (res?.status === "success") {
        toast.success(res.message);
        setTime(60);
      } else {
        toast.error(res?.message);
      }
    });
  };

  return (
    <div className="mt-1 text-xs md:mt-2 md:text-sm">
      {time == 0 ? (
        <button
          onClick={resend}
          disabled={isPending}
          className="text-primary hover:text-secondary cursor-pointer duration-0"
        >
          {isPending ? "Sending..." : "Resend code"}
        </button>
      ) : (
        <span className="text-primary">
          Resend code at
          {"   "}
          <span className="font-bold">{time}</span>
        </span>
      )}
    </div>
  );
}

export default ForgetPasswordResendButton;
