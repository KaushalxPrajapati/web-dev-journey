import './Product.css';

// Props Destructuring: unpack `title` and `price` directly in the function parameters
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
