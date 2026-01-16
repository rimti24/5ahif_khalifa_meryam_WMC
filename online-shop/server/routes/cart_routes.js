import express from "express";
import {
    getCart,
    addToCart,
    removeFromCart
} from "../controllers/cart_controller.js";

const router = express.Router();

router.get("/", getCart);              // READ
router.post("/", addToCart);           // CREATE
router.delete("/:id", removeFromCart); // DELETE

export default router;
