import React, { useEffect, useState } from 'react';

export default function BadDog() {

    const [dogs, setDogs] = useState([]);
 
   useEffect(() => {

    async function fetchDogs() {
        try{
          const res = await fetch(
            "https://dog.ceo/api/breed/labrador/images/random/6"
          );
          const { message } = await res.json();
          setDogs(message);
        
        }catch(err) {
          
          let errMsg ;

          if (err instanceof Error) {
          errMsg=err.message

          console.error("The error is",errMsg)
          }
         
      }
    
    }

    fetchDogs();
  }, []);

  return <>
  {dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />)}
   </>
  
}