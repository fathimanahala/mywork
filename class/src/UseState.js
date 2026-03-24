// import React from 'react'
import React,{useState} from 'react';

function UseState() {
    const [count,setcount]=useState(0);
  return (
    <div>
        <h2>count:{count}</h2>
        <button onClick={() => setcount(count + 1)}>increase</button>
    </div>
  )
}

export default UseState