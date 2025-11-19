import LineItem from "./LineItem";
import '../index.css'


export default function Cart({ cart }) {
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <div>
                {cart.map((item) => (
                    <LineItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}