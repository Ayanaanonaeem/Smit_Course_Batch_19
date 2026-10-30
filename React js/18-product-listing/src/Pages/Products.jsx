import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";


function Products() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProduct(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);



  return (
  <>
  <div className="container mx-auto">
     {
      loading?
      <div className="flex justify-center items-center m-auto  ">
        <h1 className="text-4xl">Loading....</h1>
      </div>
      :(
      <div className="flex flex-wrap m-4 ">{
      product.map((items)=>(
        <ProductCard items={items} key={items.id} />
      ))}
      </div>

      )
     }
     </div>
  </>

  )
}

export default Products;
