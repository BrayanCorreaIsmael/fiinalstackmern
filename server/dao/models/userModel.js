// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   nombre: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   contrasena: { type: String, required: true },
//   total: { type: Number, required: true },
//   role: { type: String, required: true },
// });

// const User = mongoose.model("user", UserSchema);

// module.exports = User;
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  total: { type: Number, required: true },
  role: { type: String, required: true },
  carrito: [
    {
      productoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto",
        required: true,
      },
      cantidad: { type: Number, default: 1 },
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
