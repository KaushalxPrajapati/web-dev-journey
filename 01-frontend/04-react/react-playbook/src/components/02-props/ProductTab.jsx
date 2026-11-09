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
        <>
            {/* Map over the info array and pass title and price as props */}
            {info.map((item, i) => (
                <Product key={item.title} title={item.title} price={item.price} />
            ))}
        </>
    );
}

export default ProductTab;
