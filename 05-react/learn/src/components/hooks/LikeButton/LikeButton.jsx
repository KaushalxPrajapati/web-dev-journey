import './LikeButton.css';
import { useState } from 'react';

export default function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="like-button" onClick={toggleLike}>
            <i className={isLiked ? 'fa-solid fa-heart liked' : 'fa-regular fa-heart'}></i>
        </div>
    );
}
