import { AxiosResponse } from "axios";
import api, { onError } from ".";

type GetAllMusicsResponse = {
  status: string;
  data: {
    docs: Music[];
  };
};

export async function getAllMusics() {
  try {
    const res: AxiosResponse<GetAllMusicsResponse> = await api.get("/music");
    if (res.status == 200) {
      return res.data.data.docs;
    }
  } catch (err) {
    return onError(err);
  }
}

export async function getMusicByGenre(genre: string) {
  try {
    console.log(`/music?genre=${genre}`);
    const res: AxiosResponse<GetAllMusicsResponse, ErrorResponse> =
      await api.get(`/music?genre=${genre}`);
    if (res.status == 200) {
      return {
        status: "success",
        data: res.data.data.docs,
      } as SuccessResponse<Music[]>;
    }
  } catch (err) {
    return onError(err) as ErrorResponse;
  }
}
