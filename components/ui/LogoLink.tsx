import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Props = {
  variation?: "horizontal" | "vertical" | "iconic";
  className?: string;
  color?: "primary" | "white";
};

function LogoLink({
  variation = "horizontal",
  color = "white",
  className,
}: Props) {
  return (
    <Link href="/" className="w-fit">
      <Image
        src={`/images/logo-${variation}-${color}.png`}
        alt="bettervibes-logo"
        width={70}
        height={120}
        className={clsx("w-25", className)}
      />
    </Link>
  );
}

export default LogoLink;
