import './Product.css';

// Props Destructuring: Instead of writing `props.title`, unpack properties directly in the parameter ({ title, price })
function Product({ title, price }) {
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>Price: ₹{price.toLocaleString()}</p>
        </div>
    );
}

export default Product;
