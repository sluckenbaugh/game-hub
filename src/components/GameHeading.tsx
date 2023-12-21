import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatfrom";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data: genres } = useGenres();

  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
