
import { useState } from "react";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";


function App() {
  const [selectedTodo,setSelectedTodo]=useState({id:1,text:"todo"})
  
  const updateTodoDetails=(id,text)=>{
    setSelectedTodo({id:id,text:text})
    
    
  }

  
  
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090f] px-4 py-12 sm:px-6 sm:py-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-2xl">
        {/* Header */}
        <header className="mb-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
            YOUR PRODUCTIVITY SPACE
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Make it
            <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              happen.
            </span>
          </h1>

          <p className="mt-4 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
            Organize your thoughts, manage your tasks, and turn your plans into progress.
          </p>
        </header>

        <AddTodo
  selectedTodo={selectedTodo}
  setSelectedTodo={setSelectedTodo}
/>
        <Todo updateTodoDetails={updateTodoDetails} />

        <footer className="mt-12 border-t border-white/[0.07] pt-5 text-center text-xs text-gray-600">
          Built with React, Redux Toolkit & Tailwind CSS
        </footer>
      </div>
    </main>
  );
}

export default App;
