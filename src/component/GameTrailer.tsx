import { useState } from "react";
import useTrailers from "../hooks/useTrailers";
import { Box, HStack } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);
  const [video, setVideo] = useState(data?.results[0]?.data[480]);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <>
      <HStack paddingY={5}>
        {data?.results.map((data, i) => (
          <Box
            key={i}
            onClick={() => setVideo(data.data[480])}
            width={5}
            height={5}
            backgroundColor="green.400"
            borderRadius={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            {i}
          </Box>
        ))}
      </HStack>
      <video controls poster={data?.results[0]?.preview} src={video} />;
    </>
  );
};

export default GameTrailer;
