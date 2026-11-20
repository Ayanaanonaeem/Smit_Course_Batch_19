
import React from "react";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";

const Todos = async () => {
  let data = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache"
  });

  data = await data.json();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-8">
          <p className="text-purple-600 font-semibold text-sm uppercase tracking-widest">
            Stay Productive
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            My Todos
          </h1>

          <p className="text-gray-500 mt-2">
            Organize your day. One task at a time.
          </p>
        </div>

        <TodoForm />

        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {data.data.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Todos;
