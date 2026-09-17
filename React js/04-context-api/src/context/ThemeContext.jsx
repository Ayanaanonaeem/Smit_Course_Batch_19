import React, { createContext, useState } from 'react'

export const themeDataContext=createContext()

const ThemContext = (props) => {
  const [theme,setTheme]=useState("dark")
  return (
    <div>
      <themeDataContext.Provider value={[theme,setTheme]}>

      {props.children}

      </themeDataContext.Provider>
    </div>
  )
}

export default ThemContext