import LineItem from "./LineItem";
import '../index.css'


export default function Cart({ cart, removeFromCart, increaseStock }) {
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <br></br>
            <div>
                {cart.map((item) => (
                    <LineItem key={item.id} item={item} removeFromCart={removeFromCart} increaseStock={increaseStock} />
                ))}
            </div>
        </div>
    );
}