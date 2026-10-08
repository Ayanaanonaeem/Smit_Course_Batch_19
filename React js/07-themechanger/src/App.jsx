import { useEffect, useState } from "react";

import {ThemeContextProvider}  from "./context/theme";
import "./App.css";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
 
  const [theme,setTheme]=useState()

  const lightTheme=()=>{
    setTheme("light")
  }
  const darkTheme=()=>{
    setTheme("dark")
  }


  // actual change in theme
  useEffect(() => {
    const  changeTheme=document.querySelector('html')
    changeTheme.classList.remove("light","dark")
    changeTheme.classList.add(theme)
  }, [theme])
  
  return (
  <ThemeContextProvider value={{theme,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeContextProvider>
    
  );
}

export default App;
