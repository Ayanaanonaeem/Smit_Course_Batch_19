import { useEffect, useState } from "react";
import "./App.css";
import { getAllProducts } from "./utils/Products";
import Card from "./components/Card";

function App() {
  const [products, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartitems, setshowCartitems] = useState(false);

  console.log(cartItems);
  
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const setItems = JSON.parse(localStorage.getItem("cart"));
    if (setItems.length) {
      setCartItems([...setItems]);
    }
  }, []);

  useEffect(() => {
    if (cartItems.length) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addCartItem = (item) => {
    const items = [...cartItems];
    const findItem = items.findIndex((data) => data.id === item.id);
    if (findItem == -1) {
      items.push(item);
      setCartItems([...items]);
    }
  };

  const fetchProducts = async () => {
    const products = await getAllProducts();

    setProduct([...products]);
    
  };

  const iterateon = showCartitems ? cartItems : products;

  

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center m-2">Shopping list</h1>
        <h1
          onClick={() => setshowCartitems(!showCartitems)}
          className="text-3xl font-bold text-center m-2 underline"
        >
          {showCartitems
            ? "Show All products"
            : `Show cart Products ${cartItems.length}`}
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {iterateon.map((val, idx) => {
              const AddedToCart =
                cartItems.findIndex((data) => data.id === val.id) !== -1;
              return (
                <Card
                  key={val.id}
                  data={val}
                  handleAddToCart={() => addCartItem(val)}
                  AddedToCart={AddedToCart}
                  showRemoveCart={showCartitems== true}
                  RemoveCartItem={()=>{
                    const otherItems=cartItems.filter((prod)=>prod.id!==val.id )
                    setCartItems([...otherItems])
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
