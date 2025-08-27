import MainContainer from "@/components/ui/MainContainer";
import CardCarousel from "@/components/ui/CardCarousel";
import MusicCarouselCard from "@/components/ui/MusicCarouselCard/MusicCarouselCard";
import { getAllMusics } from "@/lib/api/musicApi";
import { musicsGenres } from "@/lib/constants";

export default async function MusicsPage() {
  const musics = await getAllMusics();

  return (
    <MainContainer>
      <div className="flex flex-col gap-6 md:gap-8">
        {musicsGenres.map((genre) => (
          <CardCarousel
            title={{
              enabled: true,
              href: `/musics/${genre.toLowerCase()}`,
              text: genre,
            }}
            key={genre}
          >
            {(musics as Music[])
              .filter((music) => music.genre == genre)
              .map((music) => (
                <MusicCarouselCard music={music} key={music._id} />
              ))}
          </CardCarousel>
        ))}
      </div>
    </MainContainer>
  );
}
