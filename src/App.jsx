import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home";
import { themeContext } from "./context/themeContext";
import Loader from "./components/loader/loader";
const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  return (

    <themeContext.Provider value={{theme, setTheme}}>

    
      <div
        className={`${theme} ${
          theme === "dark" ? "bg-[#121212]" : null
        }  h-[100vh]`}
      >
        <Header />
        <Home />
      </div>
    </themeContext.Provider>
  );
};

export default App;
