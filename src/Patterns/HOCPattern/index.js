import { useEffect, useState } from "react";

function withStyles(Component) {
  
  return props => {

     const [data, setData] = useState(null);
    
     useEffect(() =>{
        
      setTimeout(() =>{
          setData(true)
      },2000)

     },[]);
     
    const style = { padding: '0.2rem', margin: '1rem' ,color:"red",}
    if(!data)return <div>Loading ...</div>
    return <Component style={style} {...props} />
  }
}
 
const Button = () => <button>Click me!</button>

const Text = () => <p>Hello World!</p>
 
export const StyledButton = withStyles(Button)
export const StyledText = withStyles(Text)