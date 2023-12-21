import {
  Box,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandibleText from "./ExpandibleText";
import GameAttributes from "./GameAttributes";
import GameScreenShots from "./GameScreenShots";
import GameTrailer from "./GameTrailer";

const GameDetails = () => {
  const params = useParams();
  const slug = params.slug;
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner marginStart="26px" />;
  if (error) throw error;

  return (
    <>
      {game && (
        <SimpleGrid columns={{ sm: 1, md: 2 }}>
          <GridItem paddingX={16} paddingY={5}>
            <Heading marginBottom={2}>{game.name}</Heading>
            <ExpandibleText>{game.description_raw}</ExpandibleText>
            <GameAttributes game={game} />
          </GridItem>
          <GridItem paddingEnd={5} paddingBottom={3}>
            <Box marginY={7}>
              <GameTrailer game={game} />
            </Box>
            <GameScreenShots game={game} />
          </GridItem>
        </SimpleGrid>
      )}
    </>
  );
};

export default GameDetails;
