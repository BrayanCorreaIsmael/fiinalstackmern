/* Las importaciones */
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const productRouter = require("./routers/productRouter");
const sessionRouter = require("./routers/sessionRouter");

/* Configuraciones */
dotenv.config();
const mongoose = require("./config/dbConfig");
const app = express();
const PORT = process.env.PORT || 8080;

/* Middleweres */
app.use(cors());
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Routers */
app.use("/api/products", productRouter);
app.use("/session", sessionRouter);

app.listen(PORT, () => {
  console.log(`El servidor se estsa escuchando en: http://localhost:${PORT}/`);
});

const multer = require("multer");

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images"); // Ruta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Ruta para subir imágenes
app.post("/api/upload", upload.single("image"), (req, res) => {
  res.status(200).json({ message: "Imagen subida con éxito" });
});
