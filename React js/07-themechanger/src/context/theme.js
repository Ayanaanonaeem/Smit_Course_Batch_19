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


import { createContext, useContext } from "react";

export const ThemeContext=createContext({
    theme:"light",
    lightTheme:()=>{},
    darkTheme:()=>{}
})

export const ThemeContextProvider=ThemeContext.Provider

export default function useTheme(){

    return useContext(ThemeContext)
    
}