import { AxiosResponse } from "axios";
import api, { onError } from ".";

type GetMeResponse = {
  status: string;
  data: {
    document: User;
  };
};

export async function getCurrentUser(token: string) {
  try {
    const response: AxiosResponse<GetMeResponse> = await api.get("/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200) {
      return {
        status: "success",
        data: response?.data.data.document,
      };
    }
  } catch (err) {
    return onError(err);
  }
}
