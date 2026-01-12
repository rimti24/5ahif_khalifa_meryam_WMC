export default function LineItem({ item, removeFromCart, increaseStock }) {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
                <p><strong>{item.name}</strong></p>
                <p>Quantity: {item.quantity}</p>
            </div>

            <div className="cart-price">
                <p>${item.price}</p>
                <p><strong>${item.price * item.quantity}</strong></p>
            </div>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <button onClick={() => increaseStock(item.id)}>Increase Stock</button>
        </div>
    );
}
