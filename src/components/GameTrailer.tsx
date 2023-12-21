import React from "react";
import { Game } from "../entities/Game";
import useTrailer from "../hooks/useTrailer";

interface Props {
  game: Game;
}

const GameTrailer = ({ game }: Props) => {
  const { data, isLoading, error } = useTrailer(game.slug);
  const start = data?.results[0];
  return (
    <>
      {start && (
        <video src={start?.data[480]} poster={start?.preview} controls></video>
      )}
    </>
  );
};

export default GameTrailer;
