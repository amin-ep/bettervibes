import MotionHeading from "@/components/motions/MotionHeading";
import { getAllMusics } from "@/lib/api/musicApi";
import HeroSection from "./components/HeroSection/HeroSection";
import MusicGenres from "./components/MusicGenres/MusicGenres";
import MusicGenresList from "./components/MusicGenres/MusicGenresList";
import TrendingList from "./components/TrendingList/TrendingList";
import Categories from "./components/Categories/Categories";

async function HomePage() {
  const musics = await getAllMusics();
  let popularMusics: TrendItem[] | null = null;
  if (musics && (musics as Music[])) {
    popularMusics = (musics as Music[])
      .sort((a, b) => a.likeQuantity + b.likeQuantity)
      .map((music) => ({
        id: music._id,
        imageUrl: music.coverImageUrl,
        name: music.name,
        artists: music.artists.map((artist) => ({
          id: artist._id,
          name: artist.name,
        })),
      }))
      .slice(0, 4);
  }

  return (
    <div>
      <HeroSection />
      <section>
        <MotionHeading
          className="text-2xl sm:text-3xl md:gap-2 md:text-4xl lg:text-5xl"
          tag="h2"
        >
          More Than 300 Musics
        </MotionHeading>
        <MusicGenres>
          <MusicGenresList />
        </MusicGenres>
      </section>
      {popularMusics && (
        <section>
          <MotionHeading
            className="text-2xl sm:text-3xl md:gap-2 md:text-4xl lg:text-5xl"
            tag="h2"
          >
            Most Popular Musics
          </MotionHeading>
          <TrendingList list={popularMusics} />
        </section>
      )}
      <Categories />
    </div>
  );
}

export default HomePage;
