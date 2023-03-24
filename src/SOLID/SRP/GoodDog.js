import React from 'react'
import Dog from './Components/Dog'
import useDogs from './Components/hooks/useDogs'
/***
 * We separate out the fetching data to a hook , and separate out
 * the components into bite sized components 
 * 
 */
const GoodDog = () => {

  const dogs = useDogs()

  return (
    <>
     {
      // deepcode ignore OR: <please specify a reason of ignoring this>
     dogs && dogs.map( dogUrl => <Dog key={dogUrl} url={dogUrl}/>)
     }
    </>
  )
}

export default GoodDog