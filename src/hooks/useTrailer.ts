import { useQuery } from "@tanstack/react-query";
import { Movie } from "../entities/Movie";
import APIClient from "../services/api-client";


const useTrailer = (slug: string) => {
    const apiClient = new APIClient<Movie>(`games/${slug}/movies`)
    
    return useQuery({
        queryKey: ['movies', slug ],
        queryFn: apiClient.getAll
}) 
}

export default useTrailer; 