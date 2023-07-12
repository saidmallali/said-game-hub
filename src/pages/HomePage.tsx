import { Grid, GridItem, Flex, Show, Box } from "@chakra-ui/react";
import GenreList from "../component/GenreList";
import GameHeading from "../component/GameHeading";
import PlatformSelector from "../component/PlatformSelector";
import SortSelector from "../component/SortSelector";
import GameGrid from "../component/GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `" main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading />
          <Flex marginBottom={5}>
            <PlatformSelector />
            <Box marginX={5}>
              <SortSelector />
            </Box>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
