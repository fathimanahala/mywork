import React,{useState,useEffect} from 'react';
// import React from 'react'

function UseEffect() {
    const [count,setcount]=useState(0);
    useEffect(() =>{
        document.title=`count: ${count}`;
    },[count]);
    
  return (
    <div>
        <h2>{count}</h2>
     <button onClick={() => setcount(count + 1)}>increase</button>

    </div>
  )
}

export default UseEffect