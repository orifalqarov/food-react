import { useEffect, useState } from "react";
import { getGenralList } from "../../service/api";

const GeneralList = ({genreId}) => {
  const [genre, setGenre] = useState([]);
  const [indexList, setIndex]= useState(0)
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    getGenralList.then((resp) => {
      setGenre(resp.data.results);
    });
  };
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white ">Genre</h2>
      {genre.map((item, index) => (
        <div
          onClick={() => {setIndex(index); genreId(item.id)}}
          key={item.id}
          className={`flex items-center gap-1 cursor-pointer mb-2 group hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600
          ${index == indexList ? "bg-gray-300 dark:bg-gray-600" : null}
          `}
        >
          <img
            src={item.image_background}
            alt={item.name}
            className={`  w-[40px] h-[40px] rounded-lg group-hover:scale-105 transition-all ease-out duration-300  object-cover 
             ${index == indexList ? "scale-105" : null}`}
          />
          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300
             ${index == indexList ? "font-bold" : null}`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GeneralList;
