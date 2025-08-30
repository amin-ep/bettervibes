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

export async function checkRecoverId(recoverId: string) {
  try {
    const res = await api.get(`/auth/recoverPassword/${recoverId}`);
    console.log(res);
    if (res.status === 200) {
      return {
        status: "success",
      };
    }
  } catch (err) {
    return onError(err);
  }
}
