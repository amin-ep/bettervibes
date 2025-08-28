type MusicArtist = { _id: string; name: string };

type RelatedMusic = {
  _id: string;
  name: string;
  audioFileUrl: string;
  coverImageUrl: string;
  otherArtists: MusicArtist[];
  artists: MusicArtist[];
  likes: string[];
  likesQuantity: number;
};

type Music = {
  _id: string;
  name: string;
  audioFileUrl: string;
  coverImageUrl: string;
  artists: MusicArtist[];
  otherArtists: MusicArtist[];
  releaseYear: number;

  categories: string[];
  genre: string;
  likeQuantity: number;
  createdAt: Date;
  updatedAt: Date;
  relatedMusics: RelatedMusic[];
};
