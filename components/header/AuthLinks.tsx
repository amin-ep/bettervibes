import Link from "next/link";

function AuthLinks() {
  return (
    <div className="flex items-center justify-start gap-2">
      <Link
        href="/auth"
        className="btn btn-primary !px-2 text-xs md:!px-6 md:text-sm"
      >
        Signin | Signup
      </Link>
    </div>
  );
}

export default AuthLinks;
