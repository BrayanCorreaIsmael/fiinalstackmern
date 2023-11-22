// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './ProductDetails.css';
// import Header from '../Header/Header'



// const ProductDetail = () => {
//   const { pid } = useParams();
//   const [productSelect, setProductSelect] = useState(null);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     fetch('http://localhost:3040/api/products/' + pid)
//       .then(res => res.json())
//       .then(result => setProductSelect(result.product));
//   }, []);

//   const addToCart = () => {
//     if (productSelect) {
      
//       setCartTotal(prevTotal => prevTotal + productSelect.precio);
      
//       setCartCount(prevCount => prevCount + 1);
    
//     }
//   };

  

//   return (
//       <div>
//       <Header/>
//       {productSelect ? (
//         <div className="container">
//           {productSelect.thumbnail && (
//             <img src={'http://localhost:3040/images/' + productSelect.thumbnail} alt={productSelect.nombre} />
//           )}
//           <div className="info">
//             <p className="nombre"> {productSelect.nombre}</p>
//             <p>{" $" + productSelect.precio}
//             <p className="descripcion">{productSelect.descripcion}</p>
//             <button onClick={addToCart}>Agregar al carrito</button></p>
//           </div>
          
//         </div>
//       ) : (
//         <h2>Cargando</h2>
//       )}

      
//       <p>Precio total del carrito: {" $" + cartTotal}</p>
//       <p>Número de productos en el carrito: {cartCount}</p>
//     </div>
//   );
// };


// export default ProductDetail;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import Header from '../Header/Header';

const ProductDetail = () => {
  const { pid } = useParams();
  const [productSelect, setProductSelect] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3040/api/products/' + pid)
      .then(res => res.json())
      .then(result => setProductSelect(result.product));
  }, []);

  const addToCart = () => {
    if (productSelect) {
      setCartTotal(prevTotal => prevTotal + productSelect.precio);
      setCartCount(prevCount => prevCount + 1);
    }
  };

  const deleteProduct = async () => {
    if (productSelect) {
      // Realizar la solicitud para eliminar el producto
      try {
        const response = await fetch(`http://localhost:3040/api/products/${pid}`, {
          method: 'DELETE',
        });

        const result = await response.json();

        if (result.ok) {
          // Producto eliminado con éxito, puedes redirigir al usuario a la página principal u otra página relevante
          console.log('Producto eliminado con éxito');
          alert('Producto eliminado con éxito')
        } else {
          // Manejar el caso en que haya un error al eliminar
          console.error('Error al eliminar el producto');
        }
      } catch (error) {
        console.error('Error de red al eliminar el producto', error);
      }
    }
  };

  return (
    <div>
      <Header />
      {productSelect ? (
        <div className="container">
          {productSelect.thumbnail && (
            <img src={'http://localhost:3040/images/' + productSelect.thumbnail} alt={productSelect.nombre} />
          )}
          <div className="info">
            <p className="nombre"> {productSelect.nombre}</p>
            <p>{" $" + productSelect.precio}</p>
            <p className="descripcion">{productSelect.descripcion}</p>
            <button onClick={addToCart}>Agregar al carrito</button>
            <button onClick={deleteProduct}>Eliminar Producto</button>
            
          </div>
        </div>
      ) : (
        <h2>Cargando</h2>
      )}

      <p>Precio total del carrito: {" $" + cartTotal}</p>
      <p>Número de productos en el carrito: {cartCount}</p>
    </div>
  );
};

export default ProductDetail;
