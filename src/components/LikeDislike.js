// src/LikeDislike.js
import React, { useState } from 'react';
import './LikeDislike.css'; // Optional: Add styling

const LikeDislike = () => {
    const [likes, setLikes] = useState(0);

    const handleAddLike = () => {
        setLikes(likes + 1);
    };

    const handleRemoveLike = () => {
        if (likes > 0) {
            setLikes(likes - 1);
        }
    };

    return (
        <div className="like-dislike-container">
            <div className="like-button">
                ❤️ {likes}
            </div>
            <div className="button-container">
                <button onClick={handleAddLike}>Add like</button>
                <button onClick={handleRemoveLike}>Remove like</button>
            </div>
        </div>
    );
};

export default LikeDislike;
