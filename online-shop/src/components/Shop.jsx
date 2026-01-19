import Cart from "./Cart.jsx";
import ProductOverview from "./ProductOverview.jsx";
import { useEffect, useState} from "react";

export default function Shop() {
    //PRODUCTS STATE FOR BACKEND FETCHING
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // Sample product data von FRONTEND
    //const products =
      /*  [
            {
        id: 1,
        name: "City Police Station",
        image: "https://m.media-amazon.com/images/I/A1wLLVjNhaL._AC_SL1500_.jpg", // Replace with LEGO image
        price: 99.00,
      },
      {
        id: 2,
        name: "City Fire Truck",
        image: "https://d3fa68hw0m2vcc.cloudfront.net/89f/274860214.jpeg",
        price: 59.00,
      },
      {
        id: 3,
        name: "City Passenger Train",
        image: "https://tse4.mm.bing.net/th/id/OIP.sMpWGo-mpzUrNHimufL9iAHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        price: 129.00,
    },
        {
        id: 4,
        name: "Star Wars Millennium Falcon",
        image: "https://gzhls.at/pix/bc/d3/bcd356b683bfeacf-n.webp",
        price: 159.00,
        },

    ];*/

    //USE  EFFECT FÜR BACKEND FETCHING PRODUCTS
    useEffect(() => {
        fetch("http://localhost:3001/api/products")
            .then(res => res.json())
            .then(setProducts);
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/api/carts", {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.message);
            })
            .catch(err => console.error(err));
    }, []);

    //PURE FRONTEND CART FUNCTIONS

    /*const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.id === product.id);
            if (existing) {
                return prev.map((p) =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };*/

    /*const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((p) => p.id !== productId));
    };*/

    const increaseStock = (productId) => {
        setCart((prev) =>
            prev.map((p) =>
                p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
            )
        );
    }

    // BACKEND INTEGRATED CART FUNCTIONS

    const addToCart = (product) => {
        fetch("http://localhost:3001/api/cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(setCart);
    };

    const removeFromCart = (productId) => {
        fetch(`http://localhost:3001/api/cart/${productId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(setCart);
    }


    return (
        <div>
            <ProductOverview products={products} addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} increaseStock={increaseStock} />
        </div>

    );
}