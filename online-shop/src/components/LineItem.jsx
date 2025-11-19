
export default function LineItem({ item }) {
    return (
        <div>
            <div>
                <img src={item.image} alt={item.name}/>
                <div>
                    <p>{item.name}</p>
                    <p>In stock</p>
                </div>
            </div>


            <div>
                <span>{item.quantity}</span>
                <span>${item.price}</span>
                <span>${item.price * item.quantity}</span>
            </div>
        </div>
    );
}