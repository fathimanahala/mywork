import React,{useState,useEffect} from 'react';

const UserList = () => {
 const [users,setUsers]=useState([]) 
 const [loading,setLoading]=useState(true) 
 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>response.json())
    .then((data)=>setUsers(data))
 }); 
  return (
    <div style={{padding:'20px'}}>
    <h2>user list (Fetched from external api)</h2>
    <ul>
        {users.map((user)=>(
         <li key={user.id}>
            <strong>{user.name}</strong>
         </li>   
        ))}
    </ul>
    </div>
  )
}

export default UserList