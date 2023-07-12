import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import convertToMilliscond from "../utilities/convertToMilliscond";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: convertToMilliscond("24h"),
    initialData: genres,
  });

export default useGenres;
