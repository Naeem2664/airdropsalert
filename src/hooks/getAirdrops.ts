import { useQuery } from '@tanstack/react-query';
import { fetchAirdrops, fetchAirdropById,fetchAirdropsByCategories } from '../libs/api';


export const useGetAirdrops = () => {
  return useQuery({
    queryKey: ['airdrops'],
    queryFn: () => fetchAirdrops(),
    staleTime: 1000 * 60 * 5, 
    retry: 1, 
  });
};

export const useGetAirdropsByCategories = (slug: string) => {
  return useQuery({
    queryKey: ['airdrops-category', slug],
    queryFn: () => fetchAirdropsByCategories(slug),
    staleTime: 1000 * 60 * 5, 
    retry: 1, 
  });
};

export const useGetAirdropById = (id: string) => {
  return useQuery({
    queryKey: ['airdrop', id],
    queryFn: () => fetchAirdropById(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    enabled: !!id,
  });
};