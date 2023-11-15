import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'



const ProductDetail = () => {
    const {pid} = useParams()
    const [productSelect, setProductSelect] = useState(null)
    useEffect(() =>{
        fetch('http://localhost:3040/api/products/' + pid)
        .then(res => res.json())
        .then((result) => setProductSelect(result.product))
    }, [])
  return (
    <div>
        
        {   
        productSelect 
            ?
            <div className='container'>
            {productSelect.thumbnail && <img src={'http://localhost:3040/images/' + productSelect.thumbnail} alt={productSelect.nombre} />}
                <div className="info">
                    <p className='nombre'> {productSelect.nombre}</p>
                    <p>{" $" + productSelect.precio}<button>Agregar al carrito</button></p>
                    
                    <p className="descripcion"> 
                    {/* <img src="/comentario.svg" alt="" className='comment'/> */}
                    {productSelect.descripcion}
                    </p>
                </div>
            </div>

            :
            <h2>Cargando</h2>
        }
        
    </div>
  )
}

export default ProductDetail