import { List, ListItem, Image, HStack, Text, Spinner } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { Data, isLoading, error } = useData<Genre>("/genres");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  // if (isLoading) return <Spinner />;

  return (
    <List>
      {isLoading &&
        skeletons.map((sk, index) => <GenreListSkeleton key={index} />)}
      {/* <GenreListSkeleton /> */}
      {Data.map((gnr) => (
        <ListItem key={gnr.id}>
          <HStack justifyContent="flex-start" paddingY={2}>
            <Image
              boxSize="40px"
              src={getCroppedImageUrl(gnr.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{gnr.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
