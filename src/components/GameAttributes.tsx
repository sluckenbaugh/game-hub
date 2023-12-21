import {
  Box,
  Grid,
  GridItem,
  ListItem,
  Text as Heading,
  UnorderedList,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const url = game.website;

  return (
    <>
      <Grid marginTop={4} templateColumns="repeat(2, 1fr)" gap={5}>
        <GridItem>
          <Heading fontSize={25} opacity="40%">
            Platforms
          </Heading>
          <UnorderedList margin={0} styleType="none">
            {game.parent_platforms?.map(({ platform }) => (
              <ListItem key={platform.id}>{platform.name}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
        <GridItem>
          <Heading fontSize={25} opacity="40%">
            MetaScore
          </Heading>
          <CriticScore score={game.metacritic ? game.metacritic : "N/A"} />
        </GridItem>
        <GridItem>
          <Heading fontSize={25} opacity="40%">
            Genres
          </Heading>
          <UnorderedList margin={0} styleType="none">
            {game.genres?.map((genre) => (
              <ListItem key={genre.id}>{genre.name}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
        <GridItem>
          {game.publishers.length > 0 && (
            <Heading fontSize={25} opacity="40%">
              Publishers
            </Heading>
          )}
          <UnorderedList margin={0} styleType="none">
            {game.publishers?.map((publisher) => (
              <ListItem key={publisher.id}>{publisher.name}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
      </Grid>
      <Box marginY={5}>
        <Heading fontSize={25} opacity="40%">
          Website
        </Heading>
        <Link href={url} target="_blank">
          {url}
        </Link>
      </Box>
    </>
  );
};

export default GameAttributes;
