import Cart from "./Cart.jsx";
import ProductOverview from "./ProductOverview.jsx";
import {useState} from "react";

export default function Shop() {

    const [cart, setCart] = useState([]);
    const products = [{
        id: 1,
        name: "City Police Station",
        image: "https://m.media-amazon.com/images/I/A1wLLVjNhaL._AC_SL1500_.jpg", // Replace with LEGO image
        price: 99,
      },
      {
        id: 2,
        name: "City Fire Truck",
        image: "https://d3fa68hw0m2vcc.cloudfront.net/89f/274860214.jpeg",
        price: 59,
      },
      {
        id: 3,
        name: "City Passenger Train",
        image: "https://tse4.mm.bing.net/th/id/OIP.sMpWGo-mpzUrNHimufL9iAHaFj?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        price: 129,
    },
        {
        id: 4,
        name: "Star Wars Millennium Falcon",
        image: "https://gzhls.at/pix/bc/d3/bcd356b683bfeacf-n.webp",
        price: 159,
        },

    ];


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