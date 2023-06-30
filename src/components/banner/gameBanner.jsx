const GameBanner = ({gameBanner}) => {
  return (
    <div className="relative" >
    <div className="absolute z-10 bottom-0 p-5 w-full to-transparent bg-gradient-to-t from-slate-900">
        <h3 className="font-bold text-[24px] text-white">{gameBanner?.name}</h3>
        <button className="bg-blue-700 text-white px-2 p-1 rounded-lg">Get Now</button>
    </div>
        <img className="md:h-[320px] rounded-lg w-full object-cover" src={gameBanner.background_image} alt="rasm" />
    </div>
  )
}

export default GameBanner;