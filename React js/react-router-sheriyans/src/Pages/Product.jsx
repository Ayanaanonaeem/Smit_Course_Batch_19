import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
   const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 250000,
      category: "Mobile",
      brand: "Apple",
      image: "https://picsum.photos/300/300?random=1",
      description:
        "Apple iPhone 15 with powerful performance and great camera.",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: 220000,
      category: "Mobile",
      brand: "Samsung",
      image: "https://picsum.photos/300/300?random=2",
      description:
        "Premium Samsung smartphone with an amazing display.",
    },
    {
      id: 3,
      name: "MacBook Air M2",
      price: 320000,
      category: "Laptop",
      brand: "Apple",
      image: "https://picsum.photos/300/300?random=3",
      description:
        "Lightweight laptop with Apple's M2 chip.",
    },
    {
      id: 4,
      name: "Dell XPS 15",
      price: 350000,
      category: "Laptop",
      brand: "Dell",
      image: "https://picsum.photos/300/300?random=4",
      description:
        "Powerful laptop suitable for development and productivity.",
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      price: 85000,
      category: "Headphones",
      brand: "Sony",
      image: "https://picsum.photos/300/300?random=5",
      description:
        "Premium wireless headphones with noise cancellation.",
    },
    {
      id: 6,
      name: "AirPods Pro 2",
      price: 65000,
      category: "Earbuds",
      brand: "Apple",
      image: "https://picsum.photos/300/300?random=6",
      description:
        "Wireless earbuds with active noise cancellation.",
    },
    {
      id: 7,
      name: "Apple Watch Series 9",
      price: 95000,
      category: "Smartwatch",
      brand: "Apple",
      image: "https://picsum.photos/300/300?random=7",
      description:
        "Smartwatch with fitness tracking and health features.",
    },
    {
      id: 8,
      name: "PS5 Slim",
      price: 180000,
      category: "Gaming",
      brand: "Sony",
      image: "https://picsum.photos/300/300?random=8",
      description:
        "Next-generation gaming console with powerful performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 px-5 py-10 text-white">
      
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl">
        <p className="mb-2 text-sm font-medium text-cyan-400">
          OUR PRODUCTS
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          Explore Our Products
        </h1>

        <p className="mt-3 max-w-xl text-zinc-400">
          Find the latest smartphones, laptops, headphones and gaming
          products.
        </p>
      </div>

      {/* Products */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {products.map((val) => (
          <div
            key={val.id}
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-zinc-800">
              <img
                src={val.image}
                alt={val.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Category */}
              <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-cyan-400 backdrop-blur">
                {val.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-zinc-500">{val.brand}</p>

                <p className="text-sm text-yellow-400">
                  ★ 4.8
                </p>
              </div>

              <h2 className="text-xl font-semibold">
                {val.name}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
                {val.description}
              </p>

              {/* Price + Button */}
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-500">Price</p>
                  <p className="text-xl font-bold text-cyan-400">
                    Rs. {val.price.toLocaleString()}
                  </p>
                </div>
                <Link to={`/product/${val.id}`}>
                <button className="rounded-xl bg-cyan-500 px-4 py-2 font-medium text-black transition hover:bg-cyan-400">
                  View
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;