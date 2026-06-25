import './Product.css';
import Price from '../Price/Price.jsx';

function Product({ title, products }) {
    return (
        <div className="product">
            <h4>{title}</h4>
            <div className="products-container">
                {products.map((product, i) => (
                    <div key={i} className="product-card">
                        <h1>{product.name}</h1>
                        <p>{product.desc}</p>
                        <div className="price">
                            <Price oldPrice={product.oldPrice} newPrice={product.newPrice} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
