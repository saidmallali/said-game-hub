import {
  List,
  ListItem,
  Image,
  HStack,
  Button,
  Heading,
} from "@chakra-ui/react";

import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { data, isLoading, error } = useGenres();
  // const { Data, isLoading, error } = useData<Genre>("/genres");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  // if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom="3">
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((sk, index) => <GenreListSkeleton key={index} />)}
        {/* <GenreListSkeleton /> */}
        {data?.results.map((gnr) => (
          <ListItem key={gnr.id}>
            <HStack justifyContent="flex-start" paddingY={2}>
              <Image
                objectFit="cover"
                boxSize="40px"
                src={getCroppedImageUrl(gnr.image_background)}
                borderRadius={8}
              />
              <Button
                onClick={() => setGenreId(gnr.id)}
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                fontWeight={genreId === gnr.id ? "bold" : "normal"}
                fontSize="lg"
              >
                {gnr.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
