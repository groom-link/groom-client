type GroomApiResponse<T> = {
  success: boolean;
  data: T;
  error: string | null;
};

type Room = {
  id: number;
  name: string;
  description: string;
  mainImageUrl: string;
  maxPeopleNumber: number;
  nowPeopleNumber: number;
  createdAt: string;
  updateAt: string;
};
