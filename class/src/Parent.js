import React from 'react'
import Child from './Child';

 function Parent() {
    function ShowMessage(){
        alert("message from child")
    }
  return (
    <div>
        <h1>child component</h1>
        {/* <Child name="german" /> */}
        {/* <Child name="veena" /> */}
        
<button onClick={ShowMessage}>button</button>
<Child onClick={ShowMessage}></Child>
    </div>

  )
}
export default Parent;
