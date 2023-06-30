const Tranding = ({gameBanner}) => {
  return (
    <div className="mt-5 hidden md:block">
    <h2 className="font-bold text-[30px] dark:text-white mb-5">Tranding Games</h2>
      <div className="md:grid  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {gameBanner.map(
          (item, index) =>
            index < 4 && (
              <div key={item.id}>
                <div className="bg-[#76a8f75e] h-[340px] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out">
                  <img
                    src={item.background_image}
                    alt=""
                    className="h-[270px] rounded-t-lg object-cover"
                  />
                  <h3 className="font-bold text-[20px] p-2 dark:text-white">{item.name}</h3>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Tranding