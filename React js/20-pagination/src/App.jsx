import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [total,setTotal]=useState(0)

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.products);
        setLoading(false);
        setTotal(res.total)
      });
  }, [limit]);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.innerHeight+ document.documentElement.scrollTop == document.documentElement.offsetHeight && !loading){
        if(limit < total)
        setLimit(limit+20)
      }
    }
    window.addEventListener("scroll",handleScroll)
  },[limit,loading])

  console.log(limit);
  
  

  return (
    <div>
      {
        loading?<h1 className="text-2xl text-center">loading............</h1>:null
      }
      <div className="grid grid-cols-4 gap-2 shadow-2xl">
        {
          product.map((data)=>(
            <div key={data.id} className=" shadow-2xl flex flex-col">
                <img src={data.thumbnail} alt="" />
                <div className="flex justify-between px-4 ">
                 <h1>{data.title}</h1>
                 <h1>{data.price}</h1>
                </div>
              
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
