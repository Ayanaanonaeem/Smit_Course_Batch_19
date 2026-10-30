
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ items }) => {
  const {
    title,
    description,
    price,
    category,
    thumbnail,
    id,
    rating,
    discountPercentage,
  } = items;

  const oldPrice = price / (1 - discountPercentage / 100);

  return (
    <Link
      to={`/products/${id}`}
      className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-xl hover:shadow-purple-100/70 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#faf8ff] p-4">

        <div className="h-52 sm:h-56 w-full overflow-hidden rounded-xl bg-white">
          <img
            className="h-full w-full object-contain p-3 group-hover:scale-110 transition-transform duration-500"
            src={thumbnail}
            alt={title}
            loading="lazy"
          />
        </div>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <span className="absolute top-6 left-6 rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-bold text-white shadow-md">
            -{Math.round(discountPercentage)}% OFF
          </span>
        )}

        {/* Wishlist Icon */}
        <div className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-white text-purple-600 shadow-sm transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 00-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 00-.1-7.8z"
            />
          </svg>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-5">

        {/* Category & Rating */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold capitalize text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full truncate">
            {category}
          </span>

          <span className="flex items-center gap-1 text-sm font-semibold text-gray-600 shrink-0">
            <svg
              className="w-4 h-4 text-yellow-400 fill-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8l-6.2 3.2L7 14.2 2 9.3l6.9-1L12 2z" />
            </svg>
            {rating?.toFixed(1) || "New"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 leading-6 line-clamp-1 group-hover:text-purple-700 transition-colors duration-200">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-gray-500 line-clamp-2 min-h-12">
          {description}
        </p>

        {/* Price & Action */}
        <div className="mt-auto pt-5 flex items-end justify-between gap-3 border-t border-purple-50 mt-5">

          <div>
            <p className="text-xs text-gray-400 mb-1">
              Price
            </p>

            <div className="flex items-center flex-wrap gap-2">
              <p className="text-2xl font-extrabold text-purple-700">
                ${price.toFixed(2)}
              </p>

              {discountPercentage > 0 && (
                <p className="text-xs text-gray-400 line-through">
                  ${oldPrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>

          <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-purple-100 transition-all duration-300 group-hover:bg-purple-700">
            View
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-7-7 7 7-7 7"
              />
            </svg>
          </span>

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
