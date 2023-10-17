import express from "express";
import {
  getProducts,
  getProductsWithId,
} from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductsWithId);

export default router;
