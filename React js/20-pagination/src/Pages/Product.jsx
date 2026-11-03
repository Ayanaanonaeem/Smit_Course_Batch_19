import { useState, useEffect, useContext } from "react";
import { Pagination } from 'antd';
import { Button } from "antd/es/radio";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {Badge}from 'antd';
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";


function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(0);
  const [total,setTotal]=useState(0)
  const {cartItems,AddToCart,isItemAdded}=useContext(CartContext)


   

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.products);
        setLoading(false);
        setTotal(res.total)
      });
  }, [limit,skip]);

  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight-100 && !loading){
  //       if(limit < total)
  //       setLimit(limit+20)
  //     }
  //   }
  //   window.addEventListener("scroll",handleScroll)
  // },[limit,loading])

  // console.log(limit);
  
  

  return (
    <div>
      {
        loading?<h1 className="text-2xl text-center">loading............</h1>:null
      }
      <div className="flex justify-between mx-8">
        <h1 className="text-2xl my-6">Product listing page</h1>
        <div className="mt-5">
        <Link to={"/cart"}>
        <Badge count={cartItems.length}>
        <ShoppingCartOutlined style={{fontSize:40}}/>
        </Badge>
        </Link>

        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 shadow-2xl">
        {
          product.map((data)=>(
            <div key={data.id} className=" shadow-2xl flex flex-col  gap-5  ">
                <img src={data.thumbnail} alt="" />
                <div className="flex justify-between px-4">
                 <h1>{data.title}</h1>
                 <h1>{data.price}</h1>
                </div>
                 <div className="flex justify-center items-center mb-4">
                    <Button onClick={()=>AddToCart(data)
                    }> {isItemAdded(data.id)?`Added (${isItemAdded(data.id).quantity})`:"Add to Cart"}</Button>
                 </div>
            </div>
          
          ))
        }
        <Pagination defaultCurrent={1}
         total={total}
         onChange={(num)=>setSkip((num-1)*limit)}
         pageSize={limit}
         onShowSizeChange={(page,pageSize)=>setLimit(pageSize)
         }
          />
      </div>
    </div>
  );
}

export default Product;
