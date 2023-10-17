import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
dotenv.config();

connectDB();
const app = express();

const port = process.env.PORT || 1003;

app.get("/", (req, res) => {
  res.send("Server Index");
});

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));
