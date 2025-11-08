import { useQuery } from "@tanstack/react-query";
import { fetchAirdrop_Type } from "@/libs/api";

export const useGetAirdropType = () => {
    return useQuery({
        queryKey: ["airdrop_types"],
        queryFn: () => fetchAirdrop_Type(),
        staleTime: 1000 * 60 * 5, 
        retry: 1,
    });
}