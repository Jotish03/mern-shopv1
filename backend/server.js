import express from "express";
import products from "./data/products.js";
const app = express();

const port = 5001;

app.get("/", (req, res) => {
  res.send("Server Index");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => console.log(`listening on port ${port}`));
