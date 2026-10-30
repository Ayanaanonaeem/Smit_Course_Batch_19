import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import CategoryChip from "../components/CategoryChip";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [chosen, setChosen] = useState("All");

  useEffect(() => {
    const url =
      chosen === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosen}`;

    axios
      .get(url)
      .then((res) => {
        setProduct(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [chosen]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategory(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="min-h-screen bg-[#faf8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

        {/* Page Heading */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
            Discover your favorites
          </span>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                Explore Our{" "}
                <span className="text-purple-600">Products</span>
              </h1>

              <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl leading-7">
                Find something you love. Explore our collection of products
                and discover something perfect for you.
              </p>
            </div>

            {!loading && (
              <div className="text-sm text-gray-500 bg-white border border-purple-100 rounded-xl px-4 py-3 shadow-sm">
                Showing{" "}
                <span className="font-bold text-purple-700">
                  {product.length}
                </span>{" "}
                products
              </div>
            )}
          </div>
        </div>

        {/* Categories */}
        {!loading && (
          <div className="mb-10">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h2 className="text-lg font-bold text-gray-900">
                Shop by Category
              </h2>

              <span className="text-xs sm:text-sm text-gray-400">
                Choose your interest
              </span>
            </div>

            <div className="flex flex-wrap gap-3 p-4 sm:p-5 bg-white rounded-2xl border border-purple-100 shadow-sm">
              <CategoryChip
                val={{
                  name: "All",
                  slug: "All",
                }}
                chosen={chosen === "All"}
                onClick={() => setChosen("All")}
              />

              {category.map((val) => (
                <CategoryChip
                  key={val.slug}
                  val={val}
                  chosen={val.slug === chosen}
                  onClick={() => setChosen(val.slug)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-12 h-12 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin"></div>

            <p className="mt-5 text-gray-700 font-semibold">
              Finding your favorites...
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Please wait a moment
            </p>
          </div>
        ) : product.length > 0 ? (
          <>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {product.map((items) => (
                <ProductCard key={items.id} items={items} />
              ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-14 text-center">
              <div className="w-16 h-1 rounded-full bg-purple-500 mx-auto mb-4"></div>

              <p className="text-sm text-gray-400">
                You're exploring our collection. Happy shopping!
              </p>
            </div>
          </>
        ) : (
          <div className="bg-white border border-purple-100 rounded-2xl p-10 text-center">
            <h3 className="text-xl font-bold text-gray-900">
              No products found
            </h3>

            <p className="mt-2 text-gray-500">
              Try selecting another category.
            </p>

            <button
              onClick={() => setChosen("All")}
              className="mt-5 px-5 py-2.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors duration-200"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;