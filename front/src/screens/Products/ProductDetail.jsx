// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './ProductDetails.css';
// import Header from '../Header/Header';

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

//   const deleteProduct = async () => {
//     if (productSelect) {
//       // Realizar la solicitud para eliminar el producto
//       try {
//         const response = await fetch(`http://localhost:3040/api/products/${pid}`, {
//           method: 'DELETE',
//         });

//         const result = await response.json();

//         if (result.ok) {
//           // Producto eliminado con éxito, puedes redirigir al usuario a la página principal u otra página relevante
//           console.log('Producto eliminado con éxito');
//           alert('Producto eliminado con éxito')
//         } else {
//           // Manejar el caso en que haya un error al eliminar
//           console.error('Error al eliminar el producto');
//         }
//       } catch (error) {
//         console.error('Error de red al eliminar el producto', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <Header />
//       {productSelect ? (
//         <div className="container">
//           {productSelect.thumbnail && (
//             <img src={'http://localhost:3040/images/' + productSelect.thumbnail} alt={productSelect.nombre} />
//           )}
//           <div className="info">
//             <p className="nombre"> {productSelect.nombre}</p>
//             <p>{" $" + productSelect.precio}</p>
//             <p className="descripcion">{productSelect.descripcion}</p>
//             <button onClick={addToCart}>Agregar al carrito</button>
//             <button onClick={deleteProduct}>Eliminar Producto</button>
            
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
// ... (código existente)

// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './ProductDetails.css';
// import Header from '../Header/Header';

// const ProductDetail = () => {
//   const navigate = useNavigate();
//   const { pid } = useParams();
//   const [productSelect, setProductSelect] = useState(null);
//   const [cartTotal, setCartTotal] = useState(0);
//   const [cartCount, setCartCount] = useState(0);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProduct, setEditedProduct] = useState({
//     nombre: '',
//     precio: 0,
//     descripcion: '',
//     thumbnail: '',
//     imageFile: null,
//   });

//   useEffect(() => {
//     fetch('http://localhost:3040/api/products/' + pid)
//       .then((res) => res.json())
//       .then((result) => setProductSelect(result.product));
//   }, [pid]);

//   const addToCart = () => {
//     if (productSelect) {
//       setCartTotal((prevTotal) => prevTotal + productSelect.precio);
//       setCartCount((prevCount) => prevCount + 1);
//     }
//   };

//   const deleteProduct = async () => {
//     if (productSelect) {
//       try {
//         const response = await fetch(`http://localhost:3040/api/products/${pid}`, {
//           method: 'DELETE',
//         });

//         const result = await response.json();

//         if (result.ok) {
//           console.log('Producto eliminado con éxito');
//           alert('Producto eliminado con éxito');
//           // Puedes redirigir al usuario a la página principal u otra página relevante si lo deseas
//           navigate('/');
//         } else {
//           console.error('Error al eliminar el producto');
//         }
//       } catch (error) {
//         console.error('Error de red al eliminar el producto', error);
//       }
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//     setEditedProduct({
//       nombre: productSelect.nombre,
//       precio: productSelect.precio,
//       descripcion: productSelect.descripcion,
//       thumbnail: productSelect.thumbnail,
//       imageFile: null,
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setEditedProduct((prevProduct) => ({
//       ...prevProduct,
//       imageFile: file,
//     }));
//   };  

//   const handleSave = async () => {
//     const formData = new FormData();
//     formData.append('nombre', editedProduct.nombre);
//     formData.append('precio', editedProduct.precio);
//     formData.append('descripcion', editedProduct.descripcion);
//     formData.append('thumbnail', editedProduct.thumbnail);
//     formData.append('imageFile', editedProduct.imageFile);
//     try {
//       const response = await fetch(`http://localhost:3040/api/products/${pid}`, {
//         method: 'PATCH', 
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(editedProduct),
//       });
  
      
//       console.log('Respuesta del servidor:', await response.text());
  
//       const result = await response.json();
  
//       if (result.ok) {
//         console.log('Producto editado con éxito');
//         alert('Producto editado con éxito');
//         setProductSelect(result.product);
//       } else {
//         console.error('Error al editar el producto');
//       }
//     } catch (error) {
//       console.error('Error de red al editar el producto', error);
//     }
  
//     setIsEditing(false);
//   };
  
  

//   return (
//     <div>
//       <Header />
//       {productSelect ? (
//         <div className="container">
//           {productSelect.thumbnail && (
//             <img src={'http://localhost:3040/images/' + productSelect.thumbnail} alt={productSelect.nombre} />
//           )}
//           <div className="info">
//             <p className="nombre"> {productSelect.nombre}</p>
//             <p>{" $" + productSelect.precio}</p>
//             <p className="descripcion">{productSelect.descripcion}</p>
//             {isEditing ? (
//               <div>
//                 <label>Nombre:</label>
//                 <input
//                   type="text"
//                   name="nombre"
//                   value={editedProduct.nombre}
//                   onChange={handleInputChange}
//                 />
//                 <br />
//                 <label>Precio:</label>
//                 <input
//                   type="number"
//                   name="precio"
//                   value={editedProduct.precio}
//                   onChange={handleInputChange}
//                 />
//                 <br />
//                 <label>Descripción:</label>
//                 <textarea
//                   name="descripcion"
//                   value={editedProduct.descripcion}
//                   onChange={handleInputChange}
//                 />
//                 <br />
//                 <label>Thumbnail:</label>
//                 <textarea
//                   type="text"
//                   name="thumbnail"
//                   value={editedProduct.thumbnail}
//                   onChange={handleInputChange}
//                 />
//                 <br />
//                 <label>Imagen:</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileChange}
//                 />
//                 <br />
//                 <button type="button" onClick={handleSave}>
//                   Guardar Cambios
//                 </button>
//               </div>
//             ) : (
//               <div>
//                 <button onClick={addToCart}>Agregar al carrito</button>
//                 <button onClick={deleteProduct}>Eliminar Producto</button>
//                 <button onClick={handleEdit}>Editar Producto</button>
//               </div>
//             )}
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

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './ProductDetails.css';
// import Header from '../Header/Header';

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

//   const deleteProduct = async () => {
//     if (productSelect) {
//       // Realizar la solicitud para eliminar el producto
//       try {
//         const response = await fetch(`http://localhost:3040/api/products/${pid}`, {
//           method: 'DELETE',
//         });

//         const result = await response.json();

//         if (result.ok) {
//           // Producto eliminado con éxito, puedes redirigir al usuario a la página principal u otra página relevante
//           console.log('Producto eliminado con éxito');
//           alert('Producto eliminado con éxito')
//         } else {
//           // Manejar el caso en que haya un error al eliminar
//           console.error('Error al eliminar el producto');
//         }
//       } catch (error) {
//         console.error('Error de red al eliminar el producto', error);
//       }
//     }
//   };

//   return (
//     <div>
//       <Header />
//       {productSelect ? (
//         <div className="container">
//           {productSelect.thumbnail && (
//             <img src={'http://localhost:3040/images/' + productSelect.thumbnail} alt={productSelect.nombre} />
//           )}
//           <div className="info">
//             <p className="nombre"> {productSelect.nombre}</p>
//             <p>{" $" + productSelect.precio}</p>
//             <p className="descripcion">{productSelect.descripcion}</p>
//             <button onClick={addToCart}>Agregar al carrito</button>
//             <button onClick={deleteProduct}>Eliminar Producto</button>
            
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
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import axios from 'axios';
import Header from '../Header/Header';

const ProductDetail = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { pid } = useParams();
  const [productSelect, setProductSelect] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    nombre: '',
    precio: 0,
    descripcion: '',
    thumbnail: '',
    imageFile: null,
  });

  useEffect(() => {
    fetch('http://localhost:3040/api/products/' + pid)
      .then((res) => res.json())
      .then((result) => setProductSelect(result.product));
  }, [pid]);

  const addToCart = () => {
    if (productSelect) {
      setCartTotal((prevTotal) => prevTotal + productSelect.precio);
      setCartCount((prevCount) => prevCount + 1);
    }
  };

  const deleteProduct = async () => {
    if (productSelect) {
      try {
        const response = await fetch(`http://localhost:3040/api/products/${pid}`, {
          method: 'DELETE',
        });

        const result = await response.json();

        if (result.ok) {
          console.log('Producto eliminado con éxito');
          alert('Producto eliminado con éxito');
          // Puedes redirigir al usuario a la página principal u otra página relevante si lo deseas
          navigate('/');
        } else {
          console.error('Error al eliminar el producto');
        }
      } catch (error) {
        console.error('Error de red al eliminar el producto', error);
      }
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProduct({
      nombre: productSelect.nombre,
      precio: productSelect.precio,
      descripcion: productSelect.descripcion,
      thumbnail: productSelect.thumbnail,
      imageFile: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      imageFile: file,
    }));
  };  

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('nombre', editedProduct.nombre);
    formData.append('precio', editedProduct.precio);
    formData.append('descripcion', editedProduct.descripcion);
    formData.append('thumbnail', editedProduct.thumbnail);
    formData.append('imageFile', editedProduct.imageFile);
    try {
      const response = await fetch(`http://localhost:3040/api/products/${pid}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedProduct),
      });
  
      
      console.log('Respuesta del servidor:', await response.text());
  
      const result = await response.json();
  
      if (result.ok) {
        console.log('Producto editado con éxito');
        alert('Producto editado con éxito');
        setProductSelect(result.product);
      } else {
        console.error('Error al editar el producto');
      }
    } catch (error) {
      console.error('Error de red al editar el producto', error);
    }
  
    setIsEditing(false);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      if (editedProduct.thumbnail === image.name) {
        const formData = new FormData();
        formData.append('image', image);
      
      const response = await axios.post('http://localhost:3040/api/upload', formData);

      console.log(response.data);
      
      setProductData({ ...editedProduct, thumbnail: response.data.url });

    } else {
      alert('El nombre de la imagen no coincide con la imagen subida');
    }} catch (error) {
      console.error('Error al subir la imagen', error);
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
            {isEditing ? (
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  value={editedProduct.nombre}
                  onChange={handleInputChange}
                />
                <br />
                <label>Precio:</label>
                <input
                  type="number"
                  name="precio"
                  value={editedProduct.precio}
                  onChange={handleInputChange}
                />
                <br />
                <label>Descripción:</label>
                <textarea
                  name="descripcion"
                  value={editedProduct.descripcion}
                  onChange={handleInputChange}
                />
                <br />
                <label>Thumbnail:</label>
                <textarea
                  type="text"
                  name="thumbnail"
                  value={editedProduct.thumbnail}
                  onChange={handleInputChange}
                />
                <br />
                <label>Subir Imagen:</label>
                <input type="file" onChange={handleImageChange} />
                <button type="button" onClick={handleImageUpload}>Subir Imagen</button>
                <button type="button" onClick={handleSave}>
                  Guardar Cambios
                </button>
              </div>
            ) : (
              <div>
                <button onClick={addToCart}>Agregar al carrito</button>
                <button onClick={deleteProduct}>Eliminar Producto</button>
                <button onClick={handleEdit}>Editar Producto</button>
              </div>
            )}
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

