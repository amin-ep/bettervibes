export const AUTH_TOKEN_EXPIRES = Date.now() + 180 * 24 * 60 * 60 * 1000;
export const musicsGenres = [
  "pop",
  "rock",
  "hip hop",
  "rap",
  "r&b",
  "jazz",
  "country",
  "electronic",
  "classical",
  "reggae",
  "metal",
  "edm",
] as const;

export const categoriesArr: { title: string; imagePath: string }[] = [
  {
    title: "Chill",
    imagePath: "/images/category-chill.jpg",
  },
  {
    title: "Energetic",
    imagePath: "/images/category-energetic.jpg",
  },
  {
    title: "Party",
    imagePath: "/images/category-party.jpg",
  },
  {
    title: "Rainy Day",
    imagePath: "/images/category-rainy-day.jpg",
  },
  {
    title: "Sad",
    imagePath: "/images/category-sad.jpg",
  },
  {
    title: "Sleep",
    imagePath: "/images/category-sleep.jpg",
  },
  {
    title: "Study",
    imagePath: "/images/category-study.jpg",
  },
];
