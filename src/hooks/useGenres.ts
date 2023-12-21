import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery<FetchResponse<Genre>>({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, //24 hours
  initialData: { count: genres.length, results: genres}
})

export default useGenres;