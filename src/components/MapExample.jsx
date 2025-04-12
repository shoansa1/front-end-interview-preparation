import React from "react";

const products = [
    {id: 1, category: 'Electronics'},
    {id: 2, category: 'Ys'},
    {id: 3, category: 'N'},
]
const MapExample = () => {
  return <div>
    <ul>
    {products.map((item) =>{
       return  <li key={item.id}>{item.category}</li>
    })}
    </ul>
  </div>;

};

export default MapExample;
