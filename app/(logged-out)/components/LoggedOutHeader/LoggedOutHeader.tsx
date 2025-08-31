import MotionHeader from "@/components/motions/MotionHeader";
import LogoLink from "@/components/ui/LogoLink";
import { fadeDown } from "@/lib/animations/fade";
import Link from "next/link";

export default function LoggedOutHeader() {
  return (
    <MotionHeader
      variants={fadeDown}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="flex items-center justify-between"
    >
      <LogoLink variation="horizontal" />
      <nav className="flex items-center gap-2">
        <Link href="/login" className="btn btn-ghost">
          Login
        </Link>
        <Link href="/signup" className="btn btn-primary">
          Signup
        </Link>
      </nav>
    </MotionHeader>
  );
}
