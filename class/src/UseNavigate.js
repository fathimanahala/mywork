import {useNavigate} from 'react-router-dom';
import React from 'react'

function UseNavigate() {
    const navigate=useNavigate();
  return (
    <div>
<button onClick={() => navigate('/about')}>go to about</button>

    </div>
  )
}

export default UseNavigate;