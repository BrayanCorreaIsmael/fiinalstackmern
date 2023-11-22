// import React from 'react'
// import './Donate.css'

// const Donate = () => {
//   return (
//     <div>        
//         <p className='text-Donate'>Hola, te doy las gracias por tener interes o mínimo curiosidad. Hice este apartado de la web para probar como funcionaba MercadoPago, te adelanto que bien jaja, si realmente te nace aportar al desarrollo te dejo el botón abajo.</p>
//         <a href="https://mpago.la/321y2aw" target="_blank" className='decorado-botton'>            
//             <button className="button-74" role="button"><span className="text">DONNNNNAAAAAAAACIÓN</span></button>
//         </a>
//     </div>
//   )
// } http://localhost:3040/api/products/

// export default Donate


import React, { Component } from 'react';

class Donate extends Component {
  state = {
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: '',
    thumbnail: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];
    this.setState({ thumbnail: file });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3040/api/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state),
      });

      if (response.ok) {
        console.log('Producto creado exitosamente');
        // Puedes hacer algo después de que el producto se haya creado
      } else {
        console.error('Error al crear el producto');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleInputChange} required />

        <label>Precio:</label>
        <input type="number" name="precio" value={this.state.precio} onChange={this.handleInputChange} required />

        <label>Stock:</label>
        <input type="number" name="stock" value={this.state.stock} onChange={this.handleInputChange} required />

        <label>Descripción:</label>
        <textarea name="descripcion" value={this.state.descripcion} onChange={this.handleInputChange} required />

         <label>Thumbnail:</label>
        <input type="file" name="thumbnail" value={this.state.thumbnail} onChange={this.handleInputChange} required /> 

        {/* <input type="file" name="thumbnail"  onChange={this.handleFileChange} accept="image/*" required /> */}



        <button type="submit">Crear Producto</button>
      </form>
    );
  }
}

export default Donate;
// import React, { Component } from 'react';

// class Donate extends Component {
//   state = {
//     nombre: '',
//     precio: 0,
//     stock: 0,
//     descripcion: '',
//     thumbnail: null, // Cambiado a null para manejar archivos
//   };

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleFileChange = (event) => {
//     const file = event.target.files[0];
//     this.setState({ thumbnail: file });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('nombre', this.state.nombre);
//       formData.append('precio', this.state.precio);
//       formData.append('stock', this.state.stock);
//       formData.append('descripcion', this.state.descripcion);
//       formData.append('thumbnail', this.state.thumbnail);

//       const response = await fetch('http://localhost:3001/api/productos', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('Producto creado exitosamente');
//         // Puedes hacer algo después de que el producto se haya creado
//       } else {
//         console.error('Error al crear el producto');
//       }
//     } catch (error) {
//       console.error('Error de red:', error);
//     }
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} encType="multipart/form-data">
//         <label>Nombre:</label>
//         <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleInputChange} required />

//         <label>Precio:</label>
//         <input type="number" name="precio" value={this.state.precio} onChange={this.handleInputChange} required />

//         <label>Stock:</label>
//         <input type="number" name="stock" value={this.state.stock} onChange={this.handleInputChange} required />

//         <label>Descripción:</label>
//         <textarea name="descripcion" value={this.state.descripcion} onChange={this.handleInputChange} required />

//         <label>Thumbnail:</label>
//         <input type="file" name="thumbnail" onChange={this.handleFileChange} accept="image/*" required />

//         <button type="submit">Crear Producto</button>
//       </form>
//     );
//   }
// }

// export default Donate;
