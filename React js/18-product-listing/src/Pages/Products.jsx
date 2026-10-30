import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import CategoryChip from "../components/CategoryChip";

function Products() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [chosen, setChosen] = useState("All");

  useEffect(() => {
    const url=chosen=="All"
    ?"https://dummyjson.com/products":
    `https://dummyjson.com/products/category/${chosen}`
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
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
    <>
      <div className="container mx-auto">
        {loading ? (
          <div className="flex justify-center items-center m-auto  ">
            <h1 className="text-4xl">Loading....</h1>
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap gap-4">
             <CategoryChip category={{
              slug:"All",
              name:"All"
             }}
             chosen={category=="All"}
             onClick={()=>setChosen("All")}
             />
              {category.map((cat) => (
                <CategoryChip key={cat.slug} category={cat} chosen={cat.slug==chosen}
                onClick={()=>setChosen(cat.slug)} 
                />
              ))}
            </div>
            <div className="flex flex-wrap m-4 ">
              {product.map((items) => (
                <ProductCard items={items} key={items.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
