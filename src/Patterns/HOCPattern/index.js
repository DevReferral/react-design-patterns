import { useEffect, useState } from "react";

function withLoading(Component) {

  return props => {

     const [data, setData] = useState(null);
    
     useEffect(() =>{
        
      setTimeout(() =>{
          setData(true)
      },2000)

     },[]);
     
    const style = { padding: '0.2rem', margin: '10rem' ,color:"red",width:"20rem"}
    if(!data)return <div>Loading ...</div>
    return <Component style={style} {...props} />
  }
}
 
const Button = () => <button>Click me!</button>

const Text = () => <p>Hello World!</p>
 
export const StyledButton = withLoading(Button)
export const StyledText = withLoading(Text)