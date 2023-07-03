import { FetchResponse } from "../services/api-client";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "../hooks/usePlatforms";

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
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parents_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
        },
      }),
  });

export default useGames;
