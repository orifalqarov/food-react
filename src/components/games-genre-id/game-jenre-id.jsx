function GameJenreId({ res }) {
  console.log(res);
    return (<div className="mt-[40px]">
      <h2 className="font-bold text-[30px] dark:text-white">Popular Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {res.map((item) => (
          <div
            className="bg-[#76a8f75e] p-3 rounded-lg hover:scale-105 cursor-pointer transition-all duration-300 ease-in-out  
          "
          >
            <img
              src={item.background_image}
              alt=""
              className="h-[240px] object-cover rounded-lg"
            />
            <h2 className="text-[20px] dark:text-white font-bold">
              {item.name}{" "}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-500 ">
              ⭐ {item.rating} 💬 {item.reviews_count} 🔥{" "}
              {item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameJenreId;
