import { useEffect, useState } from 'react'

import './App.css'

function App() {


  let [products,setProducts]=useState([])



  useEffect(()=>{


    fetch('https://fakestoreapi.com/products').then((response)=>
    {
        return response.json()
    }).then((data)=>
    {
      console.log(data)
      setProducts(data)
    })

},[])
  

  return (
    <>
      
    <div className="product-container">
    {
      products.map((product,index)=>
      {
        return(
          <div className='each-product' key={index}>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt="" />
          </div>
        )
      })
    }
    </div>
    </>
  )
}

export default App
