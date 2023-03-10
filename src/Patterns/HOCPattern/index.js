import axios from "axios";
import { useEffect, useState } from "react";

export default function withLoading(Component,url) {

  return props => {

     const [data, setData] = useState(null);
    
     useEffect(() =>{
       
      axios.get(url)
      .then((response) => setData(response.data))
      .catch((error) =>{
        console.error("Error",error.message)
      })

     },[]);
     
    if(!data)return <div>Loading ...</div>
    return <Component data={data} {...props} />
  }
}
 
const Button = () => <button>Click me!</button>

const Text = () => <p>Hello World!</p>
 
export const StyledButton = withLoading(Button)
export const StyledText = withLoading(Text)

