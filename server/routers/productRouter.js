const express = require("express");
const multer = require("multer");

const {
  createProduct,
  getProducts,
  deleteProduct,
  getProductById,
  updateProduct,
} = require("../dao/controllers/productController");
const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  res.json({ ok: true, products: await getProducts() });
});

productRouter.post("/", async (req, res) => {
  const { nombre, precio, stock, descripcion, thumbnail } = req.body;
  await createProduct({ nombre, precio, stock, descripcion, thumbnail });
  res.json({ ok: true, products: await getProducts() });
});

productRouter.delete("/:pid", async (req, res) => {
  const { pid } = req.params;
  let result = await deleteProduct(pid);
  if (result.ok) {
    return res.status(200).json({
      ok: true,
      products: await getProducts(),
      deleteProduct: result.deletedProduct,
    });
  } else {
    return res.status(404).json({ ok: false, error: result.error });
  }
});

productRouter.get("/:pid", async (req, res) => {
  const { pid } = req.params;

  let product = await getProductById(pid);
  if (product) {
    res.status(200).json({ ok: true, product });
  } else {
    res.status(404).json({ ok: false, error: "product not found" });
  }
});

productRouter.patch("/:pid", async (req, res) => {
  const { pid } = req.params;
  const updatedData = req.body;

  if (!Object.keys(updatedData).length) {
    return res
      .status(400)
      .json({ ok: false, error: "No data provided for update" });
  }

  const result = await updateProduct(pid, updatedData);

  if (result.ok) {
    return res.status(200).json({
      ok: true,
      products: await getProducts(),
      updatedProduct: result.updatedProduct,
    });
  } else {
    return res.status(404).json({ ok: false, error: result.error });
  }
});

module.exports = productRouter;
