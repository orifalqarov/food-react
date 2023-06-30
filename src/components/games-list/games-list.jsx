import { useEffect, useState } from "react";
import { getAllGames, getGenreId } from "../../service/api";
import GameBanner from "../banner/gameBanner";
import Tranding from "../tranding/tranding";
import GameJenreId from "../games-genre-id/game-jenre-id";

const GamesList = ({ res }) => {
  const [game, setGame] = useState([]);
  useEffect(() => {
    getGames();
  }, []);
  const getGames = () => {
    getAllGames.then((res) => {
      setGame(res.data.results);
    });
  };

  return (
    <div>
      <GameBanner gameBanner={game[0] ? game[0] : []} />
      <Tranding gameBanner={game ? game : []} />
      <GameJenreId res={res} />
    </div>
  );
};

export default GamesList;
