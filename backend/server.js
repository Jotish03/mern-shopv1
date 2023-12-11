process.setMaxListeners(15); // Set a higher limit as needed
import express from "express";
import cookieParser from "cookie-parser";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";
dotenv.config();

connectDB();

const app = express();

// body parser (middleware)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie parser (middleware)
app.use(cookieParser());

const port = process.env.PORT || 1003;

app.get("/", (req, res) => {
  res.send("Server Index");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`listening on port ${port}`));
