import Product from './Product.jsx';

function ProductTab() {
    const products = [
        { id: 1, title: 'Mobile Phone', price: 25000 },
        { id: 2, title: 'Laptop Pro', price: 81000 },
        { id: 3, title: 'Wireless Earphones', price: 3000 },
    ];

    return (
        <div>
            <h2 style={{ fontSize: '1.15rem', marginBottom: '14px', color: '#18181b' }}>Featured Products</h2>

            {/* Container displaying product cards using flexbox */}
            <div className="products-container">
                {/*
                  Loop over product data array and pass individual properties as props to each <Product />.
                  Always provide a unique key (item.id).
                */}
                {products.map((item) => (
                    <Product key={item.id} title={item.title} price={item.price} />
                ))}
            </div>
        </div>
    );
}

export default ProductTab;
