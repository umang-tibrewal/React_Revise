import React , { useContext,createContext } from "react";

export  const Themeseter=createContext({

    color:"black",
    dark:()=>{},
    light:()=>{}
})


export const ThemeProvider= Themeseter.Provider


export default  function useTheme(){

    return (useContext(Themeseter))
}