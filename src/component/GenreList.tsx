import { List, ListItem, Image, HStack, Text } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { Data } = useData<Genre>("/genres");

  return (
    <List>
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
