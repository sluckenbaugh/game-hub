import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>('/games')

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        // page_size: 5,
        page: pageParam
      }
    }),
    getNextPageParam(lastPage, allPages) {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  });
}

export default useGames;
