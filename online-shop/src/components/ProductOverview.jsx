import '../index.css'

export default function ProductOverview({ products, addToCart }) {
    return (
        <div>
            {products.map((p) => (
                <div key={p.id}>
                    <img src={p.image} alt={p.name}/>
                    <h2>{p.name}</h2>
                    <button>
                        View Details
                    </button>
                    <button
                        onClick={() => addToCart(p)}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
}