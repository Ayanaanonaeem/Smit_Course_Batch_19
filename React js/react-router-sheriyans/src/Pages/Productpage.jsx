import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Productpage = () => {
    const {id}=useParams()
    console.log(id);
    const [data,setData]=useState([])
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
 
 useEffect(() => {
  setData(getData())
 }, [id])
 
  const getData=()=>(products.filter((val)=>val.id==id))
 
  
  console.log(data);
  
  


    
 return (
  <div className="min-h-screen bg-zinc-950 px-5 py-12 text-white">
    {data.map((val) => (
      <div
        key={val.id}
        className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 md:grid-cols-2"
      >
        {/* Product Image */}
        <div className="flex items-center justify-center bg-zinc-800 p-8 md:p-12">
          <img
            src={val.image}
            alt={val.name}
            className="h-80 w-full rounded-2xl object-cover md:h-[450px]"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          {/* Category */}
          <span className="mb-4 w-fit rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            {val.category}
          </span>

          {/* Brand */}
          <p className="mb-2 text-sm uppercase tracking-widest text-zinc-500">
            {val.brand}
          </p>

          {/* Name */}
          <h1 className="text-4xl font-bold md:text-5xl">
            {val.name}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-yellow-400">★ ★ ★ ★ ★</span>
            <span className="text-sm text-zinc-500">
              4.8 (120 reviews)
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 leading-7 text-zinc-400">
            {val.description}
          </p>

          {/* Price */}
          <div className="mt-8">
            <p className="text-sm text-zinc-500">Price</p>

            <p className="mt-1 text-3xl font-bold text-cyan-400">
              Rs. {val.price.toLocaleString()}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
              Add to Cart
            </button>

            <button className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:bg-zinc-800">
              ♡
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);
}

export default Productpage

