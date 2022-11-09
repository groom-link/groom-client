import { useMutation } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type PostRoomRequest = {
  name: string;
  description: string;
  mainImageUrl: string;
  summary: string;
  maxPeople: number;
  roomParticipants: number[];
  roomPenaltyPostDto: {
    maxAmount: number;
    gifticonId: number;
    roomId: number;
  };
};

type PostRoomResponse = {
  code: string;
};

type PostRoom = (
  body: PostRoomRequest
) => Promise<GroomApiResponse<PostRoomResponse>>;

const postRoom: PostRoom = async (body) => {
  const { data } = await customAxios.post('/room', body);
  return data;
};

const usePostRoom = () =>
  useMutation((body: PostRoomRequest) => postRoom(body));

export default usePostRoom;
