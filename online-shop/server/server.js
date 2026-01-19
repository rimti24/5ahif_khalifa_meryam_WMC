import express from "express";
import cors from "cors";

import productRoutes from "./routes/product_routes.js";
import cartRoutes from "./routes/cart_routes.js";
import {clearCarts} from "./controllers/cart_controller.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.delete("/carts", (req, res) => {
    clearCarts();
    res.status(200).json({ message: "Alle Carts gelöscht" });
});

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);



app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});


