import { useState } from "react";
import ProductOverview from "./components/ProductOverview";
import Cart from "./components/Cart";
import products from "./data/products";


export default function App() {
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.id === product.id);
            if (existing) {
                return prev.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };


    return (
        <div>
            <ProductOverview products={products} addToCart={addToCart} />
            <Cart cart={cart} />
        </div>
    );
}