
import { useCallback, useState } from "react";
import "./App.css";
import Input from "./Components/input";

function App() {
  const [todos, setTodos] = useState([
    {
      todo: "Explore React state updates",
      id: Date.now(),
      completed: false,
    },
  ]);

  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("All");

  const addTodo = useCallback(() => {
    const trimmedTodo = todo.trim();
    if (!trimmedTodo) return;

    const newTodo = {
      todo: trimmedTodo,
      id: Date.now(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  }, [todo]);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const completeHandle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }, []);

  const filteredTodos = todos.filter((item) => {
    if (filter === "Completed") return item.completed;
    if (filter === "Uncompleted") return !item.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#09090f] px-4 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Input
          todos={filteredTodos}
          value={todo}
          onchange={(e) => setTodo(e.target.value)}
          handleAddTodo={addTodo}
          handleDelete={deleteTodo}
          handleCompleted={completeHandle}
          filter={filter}
          setFilter={setFilter}
          totalTodos={todos.length}
          completedCount={todos.filter((item) => item.completed).length}
        />
      </div>
    </div>
  );
}

export default App;
