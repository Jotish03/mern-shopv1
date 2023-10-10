import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const port = process.env.PORT || 1003;

app.get("/", (req, res) => {
  res.send("Server Index");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`listening on port ${port}`));
