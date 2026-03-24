import React from 'react'

const Item = () => {
    const products=[{id: 1,name: 'laptop',price: 50000 },
        { id: 2,name: 'phone',price: 20000},
                { id: 3,name: 'tablet',price: 30000}


    ];
  return (
    <div>     
        <h1>product list</h1>
        {products.map((item) => (
         <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p> 
            </div>  
        ))}
    </div>
  )
}

export default Item