import { useState } from "react";
import "./App.css";
import ObjectPractice from "./ObjectPractice";

function App() {
  let [counter, setCounter] = useState(0);

  // const Addvalue = () => {
  //   if (counter >= 20) {
  //     setCounter(0);
  //   } else {
  //     setCounter(counter + 1);
  //   }
  // };

  // const Removevalue = () => {
  //   if (counter <= 0) {
  //     setCounter(0);
  //   } else {
  //     setCounter(counter - 1);
  //   }
  // };

  // localStorage.clear()
  // localStorage.setItem('user',"ayan")
  // const user=localStorage.getItem("user")
  // console.log(user);

  const myObj={
    name:"Ayan",
    age:12
  }
  localStorage.setItem("user",JSON.stringify(myObj))
  const user=JSON.parse(localStorage.getItem("user"))
  console.log(user);
  
  

  const Addvalue=()=>{
     setCounter((prev)=>(prev+1))
    console.log(counter);
    
  }

  return (
    <>
      <div>
        <ObjectPractice/>
        <p>Counter {counter}</p>
        <button onClick={Addvalue}>Add</button>
        {/* <button onClick={Removevalue}>Remove</button> */}
      </div>
    </>
  );
}

export default App;
// react rerender tb krega component ko jb use pta chalge ke kahin state change huwi hai
// aur sbse pehle usfunction ya component ki line complete krega aur phr rerender krega
