import {useQuery} from '@tanstack/react-query';
import { fetchCategories } from '../libs/api';

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}