type Music = {
  _id: string;
  name: string;
  coverImageUrl: string;
  audioFileUrl: string;

  artists: Artist[];
  otherArtists: Artist[];

  releaseYear: number;

  categories: string[];
  genre: string;

  likes: {
    _id: string;
    music: Music;
    user: User;
  }[];
  relatedMusics: Music[];
};
