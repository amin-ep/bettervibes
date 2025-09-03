import MotionDiv from "@/components/motions/MotionDiv";
import MotionHeading from "@/components/motions/MotionHeading";
import MainContainer from "@/components/ui/MainContainer";
import MusicCarouselCard from "@/components/ui/MusicCarouselCard/MusicCarouselCard";
import { fadeUp } from "@/lib/animations/fade";
import { getMusicByGenre } from "@/lib/api/musicApi";
import { notFound } from "next/navigation";
import React from "react";

export default async function GenrePage({
  params,
}: {
  params: Promise<{ genreName: string }>;
}) {
  const { genreName } = await params;
  const data = await getMusicByGenre(decodeURIComponent(genreName));
  let musicData: null | Music[] = null;

  if (data) {
    if ((data as SuccessResponse<Music[]>).status == "success") {
      musicData = (data as SuccessResponse<Music[]>).data;
      return (
        <MainContainer>
          <MotionHeading className="mb-2 text-4xl md:mb-4" tag="h1">
            {decodeURIComponent(genreName)} musics
          </MotionHeading>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2 md:grid-cols-[repeat(auto-fill,minmax(190px,1fr))] md:gap-4">
            {musicData?.map((music) => (
              <MusicCarouselCard
                variants={fadeUp}
                whileInView="visible"
                initial="hidden"
                music={music}
                key={music._id}
              />
            ))}
          </div>
        </MainContainer>
      );
    } else {
      return notFound();
    }
  }
}
