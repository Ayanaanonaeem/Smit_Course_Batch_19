import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({val}) => {
  return (
    <div key={val.id} className="bg-white group overflow-hidden">
      <div className="overflow-hidden bg-[#E3CAA5]/20">
        <img
          src={val.thumbnail}
          alt={val.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h2 className="text-[#3D3028] text-lg font-medium line-clamp-1">
          {val.title}
        </h2>

        <p className="text-[#AD8B73] mt-2 font-medium">${val.price}</p>

        <Link
          to={`/products/${val.id}`}
          className="block text-center mt-5 border border-[#AD8B73] text-[#AD8B73] py-3 text-sm uppercase tracking-wider hover:bg-[#AD8B73] hover:text-white transition"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
