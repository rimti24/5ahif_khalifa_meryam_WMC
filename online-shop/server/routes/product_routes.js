import express from "express";
import {
    getProducts,
    getProductById,
    createProduct
} from "../controllers/product_controller.js";

const router = express.Router();

router.get("/", getProducts);          // READ ALL
router.get("/:id", getProductById);    // READ ONE
router.post("/", createProduct);       // CREATE

export default router;
