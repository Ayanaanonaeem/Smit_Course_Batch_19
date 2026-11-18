import React from 'react'
import { AddTodo } from '@/app/actions/todos'

const TodoForm = () => {
  return (
    <div>
        <form action={AddTodo} className="flex w-2/3 mx-auto justify-center my-2 gap-2 ">
        <input
          type="text"
          placeholder="Enter todo"
          className="p-2 w-2/3 border-2"
          name="todo"
        />
        <input
          type="submit"
          value={"Add Todo"}
          className="bg-purple-300 px-2 border-2"
        />
      </form>
    </div>
  )
}

export default TodoForm