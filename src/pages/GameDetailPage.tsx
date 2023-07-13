import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../component/ExpandableText";
import DefinitionItem from "../component/definitionItem";
import CriticScore from "../component/CriticScore";
import GameAttributes from "../component/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <SimpleGrid columns={2} as="dl">
        <GameAttributes game={game} />
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
