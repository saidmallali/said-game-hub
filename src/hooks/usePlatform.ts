import usePlatforms from "./usePlatforms";

const usePlatfomr = (id?: number) => {
  const { data } = usePlatforms();

  return data?.results.find((p) => p.id === id);
};

export default usePlatfomr;
