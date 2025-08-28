import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import MusicGenres from "./components/MusicGenres/MusicGenres";
import MusicGenresList from "./components/MusicGenres/MusicGenresList";
import MainHeading from "@/components/ui/MainHeading";
import TrendingList from "./components/TrendingList/TrendingList";
import { getAllMusics } from "@/lib/api/musicApi";

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
        <MainHeading>More Than 300 Musics</MainHeading>
        <MusicGenres>
          <MusicGenresList />
        </MusicGenres>
      </section>
      {popularMusics && (
        <section>
          <MainHeading>Most Popular Musics</MainHeading>
          <TrendingList list={popularMusics} />
        </section>
      )}
    </div>
  );
}

export default HomePage;
