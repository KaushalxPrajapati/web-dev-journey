import './Product.css';

function Product({ title, price }) {
    return (
        <div>
            <div className="Product">
                <h3>Product: {title}</h3>
                <p>Price: {price}</p>
            </div>
        </div>
    );
}

export default Product;
