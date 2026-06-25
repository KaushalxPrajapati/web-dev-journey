import './Price.css';

function Price({ oldPrice, newPrice }) {
    return (
        <div className="prices">
            <p className="old-price">₹{oldPrice}</p>
            <p className="new-price">₹{newPrice}</p>
        </div>
    );
}

export default Price;
