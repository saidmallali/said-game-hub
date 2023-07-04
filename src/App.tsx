import { Grid, GridItem, Flex, Show, Box } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import SortSelector from "./component/SortSelector";
import { Platform } from "./hooks/usePlatforms";
import GameHeading from "./component/GameHeading";

export interface GameQuery {
  genreId: number | undefined;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handelSelectGenre = (gnr: Genre) => {
    setGameQuery({ ...gameQuery, genreId: gnr.id });
  };

  const handelSelectPlatform = (plf: Platform) => {
    setGameQuery({ ...gameQuery, platformId: plf.id });
  };

  const handelSelectOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  const handelSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
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
        <NavBar onSearch={handelSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId || 0}
            onSelectGenre={handelSelectGenre}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={handelSelectPlatform}
            />
            <Box marginX={5}>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={handelSelectOrder}
              />
            </Box>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
