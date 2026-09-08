var arr=[1,2,3,4,5,6,7]

const reduceArray=arr.reduce((acc,curr)=>{
    return acc+curr
},0)
console.log(reduceArray);

const cart = [
  {
    id: 1,
    name: "T-Shirt",
    price: 1200,
    quantity: 2,
    category: "Clothing"
  },
  {
    id: 2,
    name: "Sneakers",
    price: 4500,
    quantity: 1,
    category: "Shoes"
  },
  {
    id: 3,
    name: "Cap",
    price: 800,
    quantity: 3,
    category: "Accessories"
  },
  {
    id: 4,
    name: "Watch",
    price: 6500,
    quantity: 1,
    category: "Accessories"
  },
  {
    id: 5,
    name: "Jeans",
    price: 3000,
    quantity: 2,
    category: "Clothing"
  }
];

const total=cart.reduce((acc,curr)=>{
    console.log(acc,curr);
    
    return acc+curr.price
},0)

// console.log(total);
