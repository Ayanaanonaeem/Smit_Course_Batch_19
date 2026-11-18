import React from "react";
import Link from "next/link";
import TodoForm from "@/components/TodoForm";

const Todos = async () => {
  let data = await fetch("http://localhost:3000/api/todos", {
    cache:"no-cache"
  });
  data = await data.json();
 

  return (
    <div>
      <div>
        <h1 className="text-center text-2xl font-bold my-2">Todos</h1>
      </div>
      <TodoForm/>
      <div className="flex flex-col w-2/3 mx-auto justify-center gap-2">
        {data.data.map((todo) => (
          <Link
            className="mx-auto w-2/3 p-2 border-2 bg-pink-200"
            key={todo.id}
            href={`/todos/${todo.id}`}
          >
            {todo.todo}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Todos;
