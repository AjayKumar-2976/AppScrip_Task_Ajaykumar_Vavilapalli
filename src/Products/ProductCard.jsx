// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} />

//       <h3>{product.title}</h3>
//       <p>${product.price}</p>
//     </div>
//   );
// };

// export default ProductCard


import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="product-card">

      {/* Image */}
      <div className="image-box">
        <img src={product.image} alt={product.title} />
      </div>

      {/* Title */}
      <h3 style={{color:"black"}}>{product.title.slice(0, 20)}...</h3>

      {/* Bottom row */}
      <div className="product-bottom">
        <p className="signin-text">
          Sign in or Create an account to see pricing
        </p>

        <div
          className="heart"
          onClick={() => setLiked(!liked)}
        >
            {liked ? <FaHeart color="red" /> : <FiHeart />}
        </div>
      </div>

    </div>
  );
};

export default ProductCard;