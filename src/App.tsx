import { Grid, GridItem, Flex, Show, Box } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import SortSelector from "./component/SortSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handelSelectGenre = (gnr: Genre) => {
    setGameQuery({ ...gameQuery, genre: gnr });
  };

  const handelSelectPlatform = (plf: Platform) => {
    setGameQuery({ ...gameQuery, platform: plf });
  };

  const handelSelectOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={handelSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={4} marginBottom={5}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={handelSelectPlatform}
          />
          <Box marginX={5}>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={handelSelectOrder}
            />
          </Box>
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
