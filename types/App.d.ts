type TrendItem = {
  id: string;
  imageUrl: string;
  name: string;
  artists?: {
    name: string;
    id: string;
  }[];
};
