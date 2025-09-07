import CardCarousel from "@/components/ui/CardCarousel";
import EmptyMusicsSection from "@/components/ui/EmptyMusicsSection";
import MainContainer from "@/components/ui/MainContainer";
import MusicCarouselCard from "@/components/ui/MusicCarouselCard/MusicCarouselCard";
import { getAllMusics } from "@/lib/api/musicApi";
import { musicsGenres } from "@/lib/constants";

export default async function MusicPage() {
  const musics = await getAllMusics();

  const getFilteredMusics = (genre: string, musics: Music[]) => {
    return musics.filter((music) => music.genre == genre) ?? [];
  };

  return (
    <MainContainer>
      <div className="flex flex-col gap-6 md:gap-8">
        {musicsGenres.map((genre) => (
          <CardCarousel
            title={{
              enabled: true,
              linked: {
                enabled: true,
                href: `/genres/${genre.toLowerCase()}`,
              },
              text: genre,
            }}
            key={genre}
            arrows={getFilteredMusics(genre, musics as Music[]).length > 0}
          >
            {getFilteredMusics(genre, musics as Music[]).length > 0 ? (
              getFilteredMusics(genre, musics as Music[]).map((music) => (
                <MusicCarouselCard music={music} key={music._id} />
              ))
            ) : (
              <EmptyMusicsSection />
            )}
          </CardCarousel>
        ))}
      </div>
    </MainContainer>
  );
}
