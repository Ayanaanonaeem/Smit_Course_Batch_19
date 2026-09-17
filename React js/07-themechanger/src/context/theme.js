// import React,{useContext,createContext}from "react";

// export const ThemeContext=createContext({
//     themeMode:"light",
//     darkTheme:()=>{},
//     lightTheme:()=>{},
// })

// export const ThemeProvider=ThemeContext.Provider

// export default function useTheme(){
//    return useContext(ThemeContext)
// }

import { useContext,createContext } from "react";

export const ThemeContext=createContext({
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{

    }
})

export  const ThemeProvider=ThemeContext.Provider

export function useTheme() {
    return useContext(ThemeContext)
}