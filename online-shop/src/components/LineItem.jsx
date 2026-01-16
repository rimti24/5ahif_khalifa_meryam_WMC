export default function LineItem({ item, removeFromCart, increaseStock }) {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
                <p><strong>{item.name}</strong></p>
                <p>Quantity: {item.quantity}</p>
            </div>

            <div className="cart-price">
                <p>Product-Price: ${item.price* 1.00}</p>
                <p><strong>Total-Price: ${item.price * item.quantity * 1.00}</strong></p>
            </div>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <button onClick={() => increaseStock(item.id)}>+</button>
        </div>
    );
}
