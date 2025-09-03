import MotionDiv from "@/components/motions/MotionDiv";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

function TrendingList({ list }: { list: TrendItem[] }) {
  return (
    <div className="grid grid-cols-1 items-center justify-center gap-4 p-4 pb-4 sm:grid-cols-2 md:grid-cols-4 md:pb-8">
      {list.map((item, index) => (
        <MotionDiv
          initial={{
            opacity: 0,
            backdropFilter: "blur(8px)",
            transform:
              index % 2 == 0 ? "translateY(-48px)" : "translateY(48px)",
          }}
          whileInView={{
            opacity: 1,
            backdropFilter: "blur(0)",
            transform: "translateY(0px)",
          }}
          transition={{
            delay: (index + 1) * 0.1,
          }}
          className={clsx("relative", index % 2 == 0 ? "md:translate-y-8" : "")}
          key={item.id}
        >
          <Link
            href={item.id}
            className="absolute top-4 right-4 z-1 flex aspect-square w-10 items-center justify-center rounded-full border border-white bg-white/5 text-3xl backdrop-blur-sm hover:scale-[1.1]"
          >
            <i className="icon-[hugeicons--play-circle-02]"></i>
          </Link>
          <Image
            src={`${process.env.NEXT_PUBLIC_FILE_BASE_URL}/${item.imageUrl}`}
            alt={item.name}
            width={240}
            height={240}
            className="aspect-square w-full rounded-xl brightness-75"
          />
          <div className="to-accent-dark absolute right-0 bottom-0 left-0 bg-gradient-to-b from-transparent p-4">
            <p className="font-playfair line-clamp-1 text-3xl font-bold">
              {item.name}
            </p>
            {item.artists && (
              <p className="line-clamp-1 text-sm">
                {item.artists.map((artist) => artist.name).join(" x ")}
              </p>
            )}
          </div>
        </MotionDiv>
      ))}
    </div>
  );
}

export default TrendingList;
