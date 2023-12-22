import { GridItem, Image, SimpleGrid } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  game: Game;
}

const GameScreenShots = ({ game }: Props) => {
  const { data, isLoading, error } = useScreenShots(game.id);
  const screenShots = data?.results;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} gap={3}>
      {screenShots?.map((s) => (
        <GridItem key={s.id}>
          <Image
            borderRadius="6px"
            src={s.image}
            alt={`screenshot of ${game.name}`}
          ></Image>
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
