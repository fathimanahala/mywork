import React from 'react'

function Child(props) {
//     function msg(){
//         alert("msg")
// //     }
  return (
    <div>
        {/* <h1>child</h1> */}
        {/* <h2>hello{props.name}</h2> */}
        <button onClick={props.onClick}>click me</button>
    </div>

  )
}

export default Child;