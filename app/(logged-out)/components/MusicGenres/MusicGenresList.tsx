import MotionLi from "@/components/motions/MotionLi";
import React from "react";
import MusicGenresListCount from "./MusicGenresListCount";
const DUMMY_DATA = [
  { genre: "Pop", count: 245 },
  { genre: "Rock", count: 312 },
  { genre: "Hip Hop", count: 189 },
  { genre: "Rap", count: 167 },
  { genre: "R&B", count: 156 },
  { genre: "Soul", count: 98 },
  { genre: "Jazz", count: 87 },
  { genre: "Blues", count: 76 },
  { genre: "Country", count: 134 },
  { genre: "Classical", count: 112 },
  { genre: "Electronic", count: 201 },
  { genre: "Dance", count: 145 },
  { genre: "House", count: 123 },
  { genre: "Trance", count: 89 },
  { genre: "Techno", count: 102 },
  { genre: "Dubstep", count: 78 },
  { genre: "Reggae", count: 91 },
  { genre: "Reggaeton", count: 67 },
  { genre: "Latin", count: 83 },
  { genre: "Afrobeat", count: 59 },
  { genre: "Indie", count: 176 },
  { genre: "Alternative", count: 198 },
  { genre: "Folk", count: 109 },
  { genre: "Metal", count: 142 },
  { genre: "Punk", count: 96 },
  { genre: "Funk", count: 88 },
  { genre: "Disco", count: 65 },
  { genre: "Lo-fi", count: 201 },
  { genre: "Chillhop", count: 134 },
  { genre: "Soundtrack", count: 156 },
  { genre: "K-Pop", count: 178 },
  { genre: "J-Pop", count: 92 },
  { genre: "EDM", count: 167 },
  { genre: "Gospel", count: 74 },
  { genre: "Opera", count: 58 },
  { genre: "Trap", count: 143 },
  { genre: "Drill", count: 49 },
  { genre: "Ambient", count: 87 },
  { genre: "Grime", count: 62 },
  { genre: "Ska", count: 71 },
  { genre: "Synthwave", count: 83 },
  { genre: "Industrial", count: 59 },
  { genre: "Experimental", count: 68 },
  { genre: "Acoustic", count: 125 },
  { genre: "Instrumental", count: 139 },
];

export default function MusicGenresList() {
  return (
    <ul>
      {DUMMY_DATA.sort((a, b) => a.count + b.count).map((data, index) => (
        <MotionLi
          initial={{
            opacity: 0,
            backdropFilter: "blur(8px)",
            transform: "translateY(16px)",
          }}
          whileInView={{
            opacity: 1,
            backdropFilter: "blur(0)",
            transform: "translateY(0px)",
          }}
          viewport={{
            once: true,
          }}
          key={data.genre}
          className="border-base-300 flex items-center justify-between border-b py-2 sm:py-3 md:py-4 lg:py-6"
        >
          <div className="text-base-200 font-playfair flex items-center justify-start">
            <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl">
              {Math.abs(index + 1).toString().length == 1 && 0}
              {index + 1}
            </span>
            <p className="ml-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {data.genre}
            </p>
          </div>
          <MusicGenresListCount countNum={data.count} />
        </MotionLi>
      ))}
    </ul>
  );
}
