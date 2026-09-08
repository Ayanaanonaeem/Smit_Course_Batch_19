const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 1200,
    category: "Fiction",
    available: true
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 1800,
    category: "Self-Help",
    available: true
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 1500,
    category: "Finance",
    available: false
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 2500,
    category: "Programming",
    available: true
  },
  {
    id: 5,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 2200,
    category: "Programming",
    available: true
  }
];

const newBooks=books.filter((val)=>val.price>=2000)
const newBooks2=books.filter((val)=>val.title=="Atomic Habits"&& val.price<=2000)
console.log(newBooks2);
