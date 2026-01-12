export default function ProductOverview({ products, addToCart }) {
    return (
        <>
            <div id="upperBanner">
                <h1>Lego Shop – build your dreams!</h1>
                <h3>Explore our exciting range of LEGO sets</h3>
            </div>

            <div className="container">
                {products.map((p) => (
                    <div className="product-card" key={p.id}>
                        <img src={p.image} alt={p.name} />
                        <h2>{p.name}</h2>
                        <button>View Details</button>
                        <button onClick={() => addToCart(p)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </>
    );
}
