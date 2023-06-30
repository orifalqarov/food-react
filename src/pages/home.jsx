import { useEffect, useState } from "react";
import GamesList from "../components/games-list/games-list";
import GeneralList from "../components/generel-list/general-list";
import { getGenreId } from "../service/api";
import Loader from "../components/loader/loader";

const Home = () => {
  const [genreId, setGenreId] = useState([]);
  const [loader, setLoader]= useState(true)

  useEffect(() => {
    getGenreIdList(4);
  }, []);
  const getGenreIdList = (id) => {
    console.log('id', id);
    getGenreId(id).then((resp) => {
      setGenreId(resp.data.results);
      setLoader(false)
    });
  };
 if (<Loader /> && loader) return <Loader/>
  return (
      (
    <div className="grid grid-cols-4 px-8">
        <div className="hidden md:block">
          <GeneralList genreId={(genreId) => getGenreIdList(genreId)} />
        </div>
        <div className="col-span-4 md:col-span-3">
          <GamesList res={genreId} />
        </div>
      </div>
    )
  );
};

export default Home;
