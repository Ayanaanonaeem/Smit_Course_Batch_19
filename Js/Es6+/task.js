const products = [
  { name: "A", price: 100 },
  { name: "B", price: 200 },
  { name: "C", price: 300 }
];

// Task:
// 1. Sirf price > 150 wale products lo
// 2. Unka total price nikalo

const newArray=products.filter((ele)=>ele.price>150)

console.log(newArray);

const newArray2=newArray.map((ele)=>ele.price)


const totalprice=newArray2.reduce((prev,curr)=>prev+curr)
console.log(totalprice);

const products2 = [
  { name: "A", price: 100, qty: 2 },
  { name: "B", price: 200, qty: 1 },
  { name: "C", price: 300, qty: 3 }
];

// Task:
// Sirf price > 150 lo
// total bill nikalo (price * qty)

const totalBill=products2.filter((ele)=>ele.price>150).map((ele)=>ele.price*ele.qty).reduce((prev,curr)=>prev+curr)
console.log(totalBill);




