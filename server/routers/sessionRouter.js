const express = require("express");
const { createUser } = require("../dao/controllers/userController");
const sessionRouter = express.Router();

sessionRouter.post("/", async (req, res) => {
  const { nombre, email, contrasena } = req.body;
  const newUser = await createUser({ nombre, email, contrasena });
  if (newUser) {
    res.status(200).json({ ok: true, content: "usuario creado con exito" });
  }
});

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// router.post('/agregarAlCarrito/:userId/:productoId', async (req, res) => {
//   const { userId, productoId } = req.params;

//   try {
//     // Buscar al usuario por ID
//     const usuario = await User.findById(userId);

//     if (!usuario) {
//       return res.status(404).json({ error: 'Usuario no encontrado' });
//     }

//     // Verificar si el producto ya está en el carrito
//     const productoEnCarrito = usuario.carrito.find(item => item.productoId.toString() === productoId);

//     if (productoEnCarrito) {
//       // Si el producto ya está en el carrito, incrementar la cantidad
//       productoEnCarrito.cantidad += 1;
//     } else {
//       // Si el producto no está en el carrito, agregarlo
//       usuario.carrito.push({ productoId, cantidad: 1 });
//     }

//     // Actualizar el total del usuario sumando el precio del producto al total existente
//     const producto = await Producto.findById(productoId); // Suponiendo que tienes un modelo Producto
//     usuario.total += producto.precio;

//     // Guardar los cambios en el usuario
//     await usuario.save();

//     return res.json({ success: true, message: 'Producto agregado al carrito exitosamente' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Error interno del servidor' });
//   }
// });

// module.exports = router;

module.exports = sessionRouter;
