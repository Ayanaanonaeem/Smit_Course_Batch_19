import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowData = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      price: 250000,
      image: "https://picsum.photos/300/300?random=1",
    },
    {
      id: 2,
      name: "Samsung S24",
      price: 220000,
      image: "https://picsum.photos/300/300?random=2",
    },
    {
      id: 3,
      name: "MacBook Air M2",
      price: 280000,
      image: "https://picsum.photos/300/300?random=3",
    },
    {
      id: 4,
      name: "Sony Headphones",
      price: 45000,
      image: "https://picsum.photos/300/300?random=4",
    },
  ];

  useEffect(() => {
    setData(mydata());
  }, [id]);

  const mydata = () =>
    products.filter((val) => val.id == id);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5 py-12">

      {data.map((product) => (
        <div
          key={product.id}
          className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden"
        >

          <div className="grid md:grid-cols-2">

            {/* Product Image */}
            <div className="bg-gray-50 flex items-center justify-center p-8 md:p-12">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-md aspect-square object-cover rounded-2xl"
              />
            </div>

            {/* Product Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">

              <span className="text-sm font-medium text-blue-600 mb-3">
                Premium Product
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {product.name}
              </h1>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Experience premium quality and modern design with this
                amazing product. Perfect choice for everyday use.
              </p>

              <div className="mt-6">
                <p className="text-sm text-gray-500">
                  Price
                </p>

                <p className="text-3xl font-bold text-gray-900 mt-1">
                  Rs {product.price.toLocaleString()}
                </p>
              </div>

              <div className="flex gap-3 mt-8">

                <button className="flex-1 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition">
                  Add to Cart
                </button>

                <button className="flex-1 border border-gray-300 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
                  Buy Now
                </button>

              </div>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
};

export default ShowData;