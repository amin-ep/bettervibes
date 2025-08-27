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
