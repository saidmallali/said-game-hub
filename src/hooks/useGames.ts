import { FetchResponse } from "../services/api-client";
import { GameQuery } from "../App";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "../hooks/usePlatforms";
import convertToMilliscond from "../utilities/convertToMilliscond";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parents_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },

    staleTime: convertToMilliscond("24h"),
  });

export default useGames;
