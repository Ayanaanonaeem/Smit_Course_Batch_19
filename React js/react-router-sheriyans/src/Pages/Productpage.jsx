import React from "react";
import { Link } from "react-router-dom";

function ProductPage() {
 
    
 
  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 250000,
      image: "https://picsum.photos/300/300?random=1"
    },
    {
      id: 2,
      name: "Samsung S24",
      price: 220000,
      image: "https://picsum.photos/300/300?random=2"
    },
    {
      id: 3,
      name: "MacBook Air M2",
      price: 280000,
      image: "https://picsum.photos/300/300?random=3"
    },
    {
      id: 4,
      name: "Sony Headphones",
      price: 45000,
      image: "https://picsum.photos/300/300?random=4"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-8">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-xl shadow p-4"
            
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-4">
              {product.name}
            </h2>

            <p className="text-gray-600 mt-2">
              Rs {product.price}
            </p>

             <Link to={`/Productpage/${product.id}`}>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
                View Product
            </button>
            </Link>
          </div>

        ))}

      </div>

    </div>
  );
}

export default ProductPage;