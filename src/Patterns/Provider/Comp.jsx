import { useThemeContext } from "."

const Comp=()=>{
    
   const {theme,toggleTheme} = useThemeContext()

   console.log("The theme is " ,JSON.stringify(theme,null,2))
   
   return (<>
       <div>

           <h1  style={theme}>This is the Stuff</h1> 
           <button onClick={toggleTheme}>{theme==='dark'?"Make theme white":"make theme dark"}</button>
       </div>
    
    </>)
  
  }

export default Comp