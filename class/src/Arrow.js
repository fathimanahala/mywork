import React from 'react'

const Arrow = () => {
    const studentList = ['Arav','meera','riya','Arjun']
  return (
    <div>
<h1>student list</h1>
<ol>
    {studentList.map((student,index) => (
        <li>{student}{index}</li>

    ))}
</ol>
    </div>
  )
}

export default Arrow  