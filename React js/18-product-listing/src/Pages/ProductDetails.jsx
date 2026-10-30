import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notfound, setNotFound] = useState(false);
  const [added, setAdded] = useState(false);
  useEffect(() => {
    setLoading(true);
    setNotFound(false);

    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setNotFound(true);
      });
  }, [id]);

  const oldPrice =
    product.price && product.discountPercentage
      ? product.price / (1 - product.discountPercentage / 100)
      : product.price;

  return (
    <section className="min-h-screen bg-[#faf8ff] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <div className="w-12 h-12 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin"></div>
            <p className="mt-5 font-semibold text-gray-700">
              Loading product details...
            </p>
          </div>
        ) : notfound ? (
          <div className="bg-white rounded-3xl border border-purple-100 p-10 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">
              Product Not Found
            </h2>
            <p className="mt-3 text-gray-500">
              Sorry, we couldn't find the product you're looking for.
            </p>
            <Link
              to="/products"
              className="inline-block mt-6 bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
            >
              Back to Products
            </Link>
          </div>
        ) : (
          <>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link to="/" className="hover:text-purple-600">
                Home
              </Link>

              <span>/</span>

              <Link to="/products" className="hover:text-purple-600">
                Products
              </Link>

              <span>/</span>

              <span className="text-purple-700 font-medium truncate">
                {product.title}
              </span>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-3xl border border-purple-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 p-5 sm:p-8 lg:p-12">
                {/* Product Image */}
                <div className="relative bg-[#faf8ff] rounded-2xl flex items-center justify-center p-6 sm:p-10 min-h-[320px] sm:min-h-[480px]">
                  {product.discountPercentage > 0 && (
                    <span className="absolute top-5 left-5 z-10 bg-purple-600 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-md">
                      {Math.round(product.discountPercentage)}% OFF
                    </span>
                  )}

                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-72 sm:h-96 object-contain transition-transform duration-500 hover:scale-105"
                  />

                  <span className="absolute bottom-5 right-5 text-xs text-purple-500 bg-white px-4 py-2 rounded-full shadow-sm font-medium">
                    Premium Collection
                  </span>
                </div>

                {/* Product Information */}
                <div className="flex flex-col justify-center">
                  {/* Category & Brand */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-xs font-bold capitalize">
                      {product.category}
                    </span>

                    <span className="text-sm text-gray-400 font-medium">
                      {product.brand || "Shopora Exclusive"}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                    {product.title}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mt-5">
                    <div className="flex items-center gap-1 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-5 h-5 ${
                            star <= Math.round(product.rating)
                              ? "fill-current"
                              : "fill-gray-200 text-gray-200"
                          }`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8l-6.2 3.2L7 14.2 2 9.3l6.9-1L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <span className="text-sm font-semibold text-gray-700">
                      {product.rating?.toFixed(1)}
                    </span>

                    <span className="text-sm text-gray-400">
                      Customer Rating
                    </span>
                  </div>

                  {/* Description */}
                  <div className="mt-7">
                    <h2 className="text-lg font-bold text-gray-900 mb-3">
                      Product Description
                    </h2>

                    <p className="text-gray-500 leading-7 text-sm sm:text-base">
                      {product.description}
                    </p>
                  </div>

                  {/* Product Info */}
                  <div className="mt-7 border-y border-purple-100 divide-y divide-purple-100">
                    <div className="flex justify-between py-4 text-sm">
                      <span className="text-gray-500">Availability</span>

                      <span
                        className={`font-semibold ${
                          product.stock > 0 ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {product.stock > 0
                          ? `${product.stock} In Stock`
                          : "Out of Stock"}
                      </span>
                    </div>

                    <div className="flex justify-between py-4 text-sm">
                      <span className="text-gray-500">SKU</span>
                      <span className="font-semibold text-gray-800">
                        {product.sku || product.id}
                      </span>
                    </div>

                    <div className="flex justify-between py-4 text-sm">
                      <span className="text-gray-500">Shipping</span>
                      <span className="font-semibold text-gray-800">
                        {product.shippingInformation || "Standard Shipping"}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-7">
                    <div className="flex items-center flex-wrap gap-3">
                      <span className="text-4xl font-extrabold text-purple-700">
                        ${product.price?.toFixed(2)}
                      </span>

                      {product.discountPercentage > 0 && (
                        <>
                          <span className="text-lg text-gray-400 line-through">
                            ${oldPrice.toFixed(2)}
                          </span>

                          <span className="bg-green-50 text-green-600 text-xs font-bold px-3 py-2 rounded-lg">
                            Save {product.discountPercentage.toFixed(1)}%
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button
                      onClick={() => {
                        addToCart(product);
                        setAdded(true);

                        setTimeout(() => {
                          setAdded(false);
                        }, 1500);
                      }}
                      disabled={product.stock <= 0}
                      className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold transition-all duration-300 ${
                        added
                          ? "bg-green-600 text-white"
                          : "bg-purple-600 text-white hover:bg-purple-700 hover:-translate-y-1"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {added ? (
                        <>
                          <span>✓</span>
                          Added to Cart!
                        </>
                      ) : (
                        <>Add to Cart</>
                      )}
                    </button>

                    <button className="flex items-center justify-center gap-2 border border-purple-200 text-purple-700 py-4 px-6 rounded-xl font-bold hover:bg-purple-50 transition-all duration-300">
                      <svg
                        className="w-5 h-5"
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
                      Wishlist
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 text-center mt-5">
                    Thank you for shopping with Shopora 💜
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
