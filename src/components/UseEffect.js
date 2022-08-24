import React, { useEffect, useState } from 'react';

const UseEffect = () => {

    const [products, setProduct] = useState([]);
    useEffect ( () =>{
         const getProduct = async () =>{
            const responst = await fetch('http://localhost:3001/products')
            const data = await responst.json();
            setProduct(data)
         }
         getProduct();
    },[]);
    return (
        <div>
        {products?.map((item) =>{
            return(
               <div>
                 <p>{item.name}</p>
                 <p>{item.age}</p>
               </div>
            )
        })}
        </div>
    );
};

export default UseEffect;