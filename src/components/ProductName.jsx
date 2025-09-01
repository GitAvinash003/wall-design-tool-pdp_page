import React from 'react';
import { FaStar, FaStarHalfAlt, FaShareAlt } from 'react-icons/fa';

const ProductName = ({ 
  name, 
  price, 
  rating, 
  reviewsCount, 
  onShareClick 
}) => {
  // Calculate full stars and half stars for rating (out of 5)
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center justify-between w-full max-w-xl mb-5">
      {/* Left side: Name, Price, Rating */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
        <p className="mt-1 text-2xl ">${price.toFixed(2)}</p>

        <div className="flex items-center mt-1 text-sm font-semibold text-pink-500">
          {/* Stars */}
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={i} />
          ))}
          {hasHalfStar && <FaStarHalfAlt />}
          {/* Remaining empty stars if needed */}
          {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
            <FaStar key={i} className="text-gray-300" />
          ))}

          {/* Review count */}
          <span className="ml-2 text-pink-500 cursor-pointer">{reviewsCount} reviews</span>
        </div>
      </div>

      {/* Right side: Share button */}
      <button
        onClick={onShareClick}
        className="flex items-center gap-1 text-gray-700 hover:text-pink-500"
      >
        <FaShareAlt />
        <span className="text-sm">Share</span>
      </button>
    </div>
  );
};

export default ProductName;
