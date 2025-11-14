import { useQuery } from '@tanstack/react-query';
import { fetchAirdrops, fetchAirdropById,fetchAirdropsByCategories } from '../libs/api';
import { Airdrop } from '@/contracts/airdrop.type';


export const useGetAirdrops = () => {
  return useQuery<Airdrop[]>({
    queryKey: ['airdrops'],
    queryFn: () => fetchAirdrops(),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useGetAirdropsByCategories = (slug: string) => {
  return useQuery<Airdrop[]>({
    queryKey: ['airdrops-category', slug],
    queryFn: () => fetchAirdropsByCategories(slug),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useGetAirdropById = (id: string) => {
  return useQuery<Airdrop | null>({
    queryKey: ['airdrop', id],
    queryFn: () => fetchAirdropById(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    enabled: !!id,
  });
};