
"use client";

import { deleteTodo, updateTodo } from "@/app/actions/todos";
import React, { useState } from "react";

const TodoItem = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState("");

  const onEdit = async () => {
    if (isEdit) {
      const obj = { ...todo };
      obj.todo = task;
      await updateTodo(obj);
      setIsEdit(false);
    } else {
      setTask(todo.todo);
      setIsEdit(true);
    }
  };

  const onCompleted = async () => {
    const obj = { ...todo };
    obj.isCompleted = !obj.isCompleted;
    await updateTodo(obj);
  };

  const onDelete = async () => {
    await deleteTodo(todo);
  };

  return (
    <div className={`flex flex-col sm:flex-row items-center gap-3 p-4 rounded-xl border shadow-sm transition-all ${
      todo.isCompleted
        ? "bg-teal-50 border-teal-200"
        : "bg-white border-gray-200"
    }`}>
      
      <div className="flex items-center gap-3 flex-1 w-full min-w-0">
        <div className={`w-3 h-3 rounded-full shrink-0 ${
          todo.isCompleted ? "bg-teal-500" : "bg-pink-400"
        }`} />

        {isEdit ? (
          <input
            className="flex-1 min-w-0 p-2 border border-purple-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-300 text-gray-800"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        ) : (
          <h1 className={`flex-1 min-w-0 break-words font-medium ${
            todo.isCompleted
              ? "line-through text-gray-400"
              : "text-gray-800"
          }`}>
            {todo.todo}
          </h1>
        )}
      </div>

      <div className="flex gap-2 w-full sm:w-auto">
        <button
          onClick={() => onCompleted()}
          className="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-teal-100 text-teal-700 hover:bg-teal-200 font-medium text-sm transition"
        >
          {todo.isCompleted ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => onEdit()}
          className="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 font-medium text-sm transition"
        >
          {isEdit ? "Save" : "Edit"}
        </button>

        <button
          onClick={() => onDelete()}
          className="flex-1 sm:flex-none px-3 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 font-medium text-sm transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
