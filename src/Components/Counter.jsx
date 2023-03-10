
import React from 'react';

function Counter({counter}) {

 
  return (
    <div style={{margin:"2rem"}}>
      <h2>Count : {counter.getCount()}</h2>
       <button style={{marginRight:"1rem"}} onClick={()=>{counter.increment();console.log("count",counter.getCount()) }}>+</button>
       <button onClick={()=> {counter.decrement();  console.log("count",counter.getCount())}}>-</button>
      </div>
  )
}


export default Counter
