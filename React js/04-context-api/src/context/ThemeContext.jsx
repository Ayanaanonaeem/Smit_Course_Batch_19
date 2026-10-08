import React, { createContext, useState } from 'react'

export const themeDataContext=createContext()

const ThemContext = ({children}) => {
  const [theme,setTheme]=useState("dark")
  return (
    <div>
      <themeDataContext.Provider value={[theme,setTheme]}>

      {children}

      </themeDataContext.Provider>
    </div>
  )
}

export default ThemContext