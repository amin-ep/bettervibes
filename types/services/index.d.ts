type ErrorResponse = {
  status: string;
  message: string;
};

type SuccessResponse<T> = {
  status: string;
  data: T;
};
