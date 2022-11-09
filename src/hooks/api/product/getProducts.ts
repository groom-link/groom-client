import { useQuery } from '@tanstack/react-query';

import customAxios from '../../../api/customAxios';

type GetProductsResponse = GroomApiResponse<
  {
    id: number;
    thumbnailImage: string;
    organization: {
      id: number;
      name: string;
      description: string;
    };
    price: number;
    name: string;
  }[]
>;

type GetProducts = () => Promise<GetProductsResponse>;

const getProducts: GetProducts = async () => {
  const { data } = await customAxios.get('/product');
  return data;
};

const useGetProducts = () =>
  useQuery(['getProducts'], () => getProducts(), {
    select: (data) => data.data
  });

export default useGetProducts;
