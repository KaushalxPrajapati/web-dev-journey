import './LikeButton.css';
import { useState } from 'react';

export default function LikeButton() {
    // Boolean state: true for liked, false for unliked
    const [isLiked, setIsLiked] = useState(false);

    // Functional toggle: inverts current state cleanly
    const toggleLike = () => {
        setIsLiked((prev) => !prev);
    };

    return (
        <div className="like-button" onClick={toggleLike}>
            {/* Ternary operator dynamically swaps font-awesome icon class */}
            <i className={isLiked ? 'fa-solid fa-heart liked' : 'fa-regular fa-heart'}></i>
        </div>
    );
}
