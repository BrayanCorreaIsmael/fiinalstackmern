import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

const Products = () => {
    
     const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('http://localhost:3040/api/products')
        .then(res => res.json())
        .then(result => setProducts(result.products))
    }, [])
    console.log(products)
    const firstFourProducts = products.slice(0, 4);
    const SecondFourProducts = products.slice(4, 9);
  return (
    <div>
      
      <p>Destacados</p>
      <div className='data'>
      {firstFourProducts.length !== 0 && firstFourProducts.map((product) =>(
            
          <Link to={'/product/' + product._id} key={product._id} style={{ textDecoration: 'none', color: 'inherit' }}>
              {product.thumbnail && <img src={'http://localhost:3040/images/' + product.thumbnail}  />}
              <h2>{product.nombre}</h2>
              <p>${product.precio}</p>
              <p>Unidades disponibles: {product.stock} </p>
              
            </Link>
        ))}
      </div>
      <p>Lo nuevo</p>
      <div className='data'>
      {SecondFourProducts.length !== 0 && SecondFourProducts.map((product) =>(
            
          <Link to={'/product/' + product._id} key={product._id} style={{ textDecoration: 'none', color: 'inherit' }}>
              {product.thumbnail && <img src={'http://localhost:3040/images/' + product.thumbnail}  />}
              <h2>{product.nombre}</h2>
              <p>${product.precio}</p>
              <p>Unidades disponibles: {product.stock} </p>
              
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Products

