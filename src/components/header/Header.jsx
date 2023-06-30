import { useContext } from "react";
import logo1 from "../../assets/logo1.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { themeContext } from "../../context/themeContext";
const Header = () => {
  const { theme, setTheme } = useContext(themeContext);

  return (
    <div className="flex items-center p-3">
      <img src={logo1} alt="logo" width={60} height={60} />
      <div className="flex  bg-slate-200 p-2 w-full rounded-full  items-center">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent outline-none px-2 w-full"
        />
      </div>
      <div>
        {theme == "dark" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 rounded-full p-1 m-2 text-black cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", 'light');
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 rounded-full p-1 m-2 text-black cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", 'dark');
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
