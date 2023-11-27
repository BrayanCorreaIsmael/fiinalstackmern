// import React, { Component } from 'react';

// class Donate extends Component {
//   state = {
//     nombre: '',
//     precio: 0,
//     stock: 0,
//     descripcion: '',
//     thumbnail: '', // Manteniendo thumbnail para la URL de la imagen
//   };

    


//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://localhost:3040/api/products/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(this.state),
//       });

//       if (response.ok) {
//         console.log('Producto creado exitosamente');
//       } else {
//         console.error('Error al crear el producto');
//       }
//     } catch (error) {
//       console.error('Error de red:', error);
//     }
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>Nombre:</label>
//         <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleInputChange} required />

//         <label>Precio:</label>
//         <input type="number" name="precio" value={this.state.precio} onChange={this.handleInputChange} required />

//         <label>Stock:</label>
//         <input type="number" name="stock" value={this.state.stock} onChange={this.handleInputChange} required />

//         <label>Descripción:</label>
//         <textarea name="descripcion" value={this.state.descripcion} onChange={this.handleInputChange} required />

//         <label>Nombre de la imagen:</label>
//         <input type="text" name="thumbnail" value={this.state.thumbnail} onChange={this.handleInputChange} required />

//         <button type="submit">Crear Producto</button>
//       </form>
//     );
//   }
// }

// export default Donate;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Donate = () => {
//   const [productData, setProductData] = useState({
//     nombre: '',
//     precio: 0,
//     stock: 0,
//     descripcion: '',
//     thumbnail: '', // Manteniendo thumbnail para la URL de la imagen
//   });

//   const [image, setImage] = useState(null);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setProductData({ ...productData, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleImageUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('image', image);

//       // Cambia la URL a la ruta correspondiente de tu servidor
//       const response = await axios.post('http://localhost:3040/api/upload', formData);

//       console.log(response.data);
//       // Actualiza la URL de la imagen en el estado del producto
//       setProductData({ ...productData, thumbnail: response.data.url });

//     } catch (error) {
//       console.error('Error al subir la imagen', error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       // Realiza la solicitud POST para crear el producto
//       const response = await fetch('http://localhost:3040/api/products/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(productData),
//       });

//       if (response.ok) {
//         console.log('Producto creado exitosamente');
//       } else {
//         console.error('Error al crear el producto');
//       }
//     } catch (error) {
//       console.error('Error de red:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Nombre:</label>
//       <input type="text" name="nombre" value={productData.nombre} onChange={handleInputChange} required />

//       <label>Precio:</label>
//       <input type="number" name="precio" value={productData.precio} onChange={handleInputChange} required />

//       <label>Stock:</label>
//       <input type="number" name="stock" value={productData.stock} onChange={handleInputChange} required />

//       <label>Descripción:</label>
//       <textarea name="descripcion" value={productData.descripcion} onChange={handleInputChange} required />

//       <label>Subir Imagen:</label>
//       <input type="file" onChange={handleImageChange} />
//       <button type="button" onClick={handleImageUpload}>Subir Imagen</button>

//       <label>Nombre de la imagen:</label>
//       <input type="text" name="thumbnail" value={productData.thumbnail} onChange={handleInputChange} required />

//       <button type="submit">Crear Producto</button>
//     </form>
//   );
// };

// export default Donate;
import React, { useState } from 'react';
import axios from 'axios';

const Donate = () => {
  const [productData, setProductData] = useState({
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    thumbnail: '', // Manteniendo thumbnail para la URL de la imagen
  });

  const [image, setImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      // Cambia la URL a la ruta correspondiente de tu servidor
      const response = await axios.post('http://localhost:3040/api/upload', formData);

      console.log(response.data);
      // Actualiza la URL de la imagen en el estado del producto
      setProductData({ ...productData, thumbnail: response.data.url });

    } catch (error) {
      console.error('Error al subir la imagen', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Realiza la solicitud POST para crear el producto
      const response = await fetch('http://localhost:3040/api/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        console.log('Producto creado exitosamente');
      } else {
        console.error('Error al crear el producto');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={productData.nombre} onChange={handleInputChange} required />

      <label>Precio:</label>
      <input type="number" name="precio" value={productData.precio} onChange={handleInputChange} required />

      <label>Stock:</label>
      <input type="number" name="stock" value={productData.stock} onChange={handleInputChange} required />

      <label>Descripción:</label>
      <textarea name="descripcion" value={productData.descripcion} onChange={handleInputChange} required />

      <label>Subir Imagen:</label>
      <input type="file" onChange={handleImageChange} />
      <button type="button" onClick={handleImageUpload}>Subir Imagen</button>

      <label>Nombre de la imagen:</label>
      <input type="text" name="thumbnail" value={productData.thumbnail} onChange={handleInputChange} required />

      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default Donate;
