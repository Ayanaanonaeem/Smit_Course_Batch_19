
import React from "react";
import { AddTodo } from "@/app/actions/todos";

const TodoForm = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <form
        action={AddTodo}
        className="flex flex-col sm:flex-row gap-3 my-6"
      >
        <input
          type="text"
          placeholder="What needs to be done?"
          className="flex-1 min-w-0 p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 text-gray-800"
          name="todo"
        />

        <input
          type="submit"
          value="Add Task +"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl cursor-pointer transition"
        />
      </form>
    </div>
  );
};

export default TodoForm;
