import { HStack, ListItem, Skeleton } from "@chakra-ui/react";
const GenreListSkeleton = () => {
  return (
    <ListItem>
      <HStack justifyContent="flex-start" paddingY={2}>
        <Skeleton height="40px" width="40px" borderRadius={8} />
        <Skeleton height="10px" width="100px" />
      </HStack>
    </ListItem>
  );
};

export default GenreListSkeleton;
