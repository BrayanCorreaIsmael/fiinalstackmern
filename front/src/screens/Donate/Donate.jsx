import React, { useState } from 'react';
import axios from 'axios';
import './Donate.css'

const Donate = () => {
  const [productData, setProductData] = useState({
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    thumbnail: '', 
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
      if (productData.thumbnail === image.name) {
        const formData = new FormData();
        formData.append('image', image);
      
      const response = await axios.post('http://localhost:3040/api/upload', formData);

      console.log(response.data);
      
      setProductData({ ...productData, thumbnail: response.data.url });

    } else {
      alert('El nombre de la imagen no coincide con la imagen subida');
    }} catch (error) {
      console.error('Error al subir la imagen', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!image) {
      alert('Por favor, selecciona una imagen antes de crear el producto.');
      return;
    }
    if (productData.thumbnail === image.name) {
      try {
        // Realizar la solicitud POST para crear el producto
        const response = await fetch('http://localhost:3040/api/products/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        });

        if (response.ok) {
          alert('Producto creado exitosamente, falta subir la imagen');
        } else {
          console.error('Error al crear el producto');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    } else {
      // Mostrar un mensaje de error o realizar alguna acción cuando el nombre no coincide
      alert('El nombre de la imagen no coincide con el valor ingresado');
    }
  };


  return (
    
    <form onSubmit={handleSubmit} className='form'>
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

