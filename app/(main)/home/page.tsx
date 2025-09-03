import MainContainer from "@/components/ui/MainContainer";
import CardCarousel from "@/components/ui/CardCarousel";
import MusicCarouselCard from "@/components/ui/MusicCarouselCard/MusicCarouselCard";
import { getAllMusics } from "@/lib/api/musicApi";
import { musicsGenres } from "@/lib/constants";

export default async function HomePage() {
  // const musics = await getAllMusics();
  const recentlyAddedMusics = await getAllMusics("sort=-createdAt&limit=20");

  return (
    <MainContainer>
      <div className="flex flex-col gap-6 md:gap-8">
        <CardCarousel>
          {(recentlyAddedMusics as Music[]).map((music) => (
            <MusicCarouselCard music={music} key={music._id} />
          ))}
        </CardCarousel>
      </div>
    </MainContainer>
  );
}
