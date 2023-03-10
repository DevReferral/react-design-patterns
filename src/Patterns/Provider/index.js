import { createContext, useContext, useState } from "react";


const ThemeContext = createContext();

const themes={
  
  dark:{
    background:'#171717',color:'#fff',
  },
  light:{
    background:'#fff',color:'#000',
  }

};

export default function ThemeContextComponent(props){
     
    const [theme,setTheme]=useState('dark')


    function toggleTheme(){
       setTheme( prevTheme => prevTheme==='dark'?'light':'dark')
    }

   
    const providerValue={theme:themes[theme],toggleTheme}

    return(
      <ThemeContext.Provider value={providerValue}>
           {props.children}
      </ThemeContext.Provider>
    )

}

export const useThemeContext=()=>{

   const theme = useContext(ThemeContext)
   
   if(!theme){
      throw new Error('The theme context is not available')
    }

   return theme
}




