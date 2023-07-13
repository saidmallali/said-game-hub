import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, SimpleGrid, GridItem } from "@chakra-ui/react";
import ExpandableText from "../component/ExpandableText";
import GameAttributes from "../component/GameAttributes";
import GameTrailer from "../component/GameTrailer";
import GameScreenshots from "../component/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Heading>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
