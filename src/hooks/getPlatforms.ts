import { useQuery } from "@tanstack/react-query";
import { fetchPlatforms } from "@/libs/api";

export const useGetPlatforms=()=>{
    return useQuery({
        queryKey: ["platforms"],
        queryFn: () => fetchPlatforms(),
        staleTime: 1000 * 60 * 5, 
        retry: 1,
    });
}