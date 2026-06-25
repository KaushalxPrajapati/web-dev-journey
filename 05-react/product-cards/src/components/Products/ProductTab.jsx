import Product from './Product.jsx';
import './ProductTab.css';

function ProductTab() {
    const featuredProducts = [
        {
            name: 'Logitech MX Master 3S',
            desc: 'High-performance wireless mouse for productivity and gaming',
            oldPrice: '12,495',
            newPrice: '8,999',
        },
        {
            name: 'Apple iPhone 12 Pro Max',
            desc: 'Premium smartphone with excellent camera system',
            oldPrice: '1,19,900',
            newPrice: '89,999',
        },
        {
            name: 'Zebronics Zeb-Transformer',
            desc: 'Wireless keyboard and mouse combo with RGB lighting',
            oldPrice: '1,599',
            newPrice: '899',
        },
        {
            name: 'Samsung Galaxy Watch 4',
            desc: 'Smartwatch with advanced health tracking features',
            oldPrice: '24,999',
            newPrice: '15,999',
        },
    ];

    return (
        <div className="Product-Tab">
            <Product title="Blockbuster Deals on Computer Accessories | Shop Now" products={featuredProducts} />
        </div>
    );
}

export default ProductTab;
