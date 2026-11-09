import Product from './Product.jsx';

function ProductTab() {
    // Array of product objects
    const info = [
        {
            title: 'Mobile',
            price: 25000,
        },
        {
            title: 'Laptop',
            price: 81000,
        },
        {
            title: 'Earphone',
            price: 3000,
        },
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {/* Map over the info array and pass title and price as props */}
            {info.map((item) => (
                <Product key={item.title} title={item.title} price={item.price} />
            ))}
        </div>
    );
}

export default ProductTab;
