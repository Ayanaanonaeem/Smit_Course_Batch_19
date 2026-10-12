const todos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Practice Redux Toolkit" },
  { id: 3, text: "Build Todo App" },
  { id: 4, text: "Learn Node.js" },
  { id: 5, text: "Practice JavaScript" }
];


const todo=todos.map((prevtodo)=>prevtodo.id==1?{id:2,text:"meow"}:prevtodo)

console.log(todo);


