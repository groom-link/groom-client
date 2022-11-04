type GroomApiResponse<T> = {
  success: boolean;
  data: T;
  error: string | null;
};
