
import React from "react";
import Filter from "./Filter";

const Input = ({
  todos,
  onchange,
  value,
  handleAddTodo,
  handleDelete,
  handleCompleted,
  filter,
  setFilter,
  totalTodos,
  completedCount,
}) => {
  const progress =
    totalTodos === 0
      ? 0
      : Math.round((completedCount / totalTodos) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            YOUR DAILY WORKSPACE
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Task<span className="text-violet-400">Flow.</span>
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
            Make room for what matters. One task at a time.
          </p>
        </div>

        {/* Progress Card */}
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:min-w-48">
          <div
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full"
            style={{
              background: `conic-gradient(#a78bfa ${progress}%, #27272a ${progress}% 100%)`,
            }}
          >
            <div className="grid h-11 w-11 place-items-center rounded-full bg-[#101017]">
              <span className="text-xs font-bold">{progress}%</span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Your progress
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              {completedCount} of {totalTodos} completed
            </p>
          </div>
        </div>
      </header>

      {/* Main Card */}
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#111119] shadow-2xl shadow-black/20">
        <div className="border-b border-white/[0.07] p-5 sm:p-7">
          <div className="mb-5">
            <h2 className="text-lg font-semibold">What's on your mind?</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Add a task and make today count.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTodo();
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#09090f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10"
              value={value}
              onChange={onchange}
              type="text"
              placeholder="e.g. Build my React project..."
              aria-label="New task"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-400 active:scale-[0.98]"
            >
              <span className="text-lg leading-none">+</span>
              Add task
            </button>
          </form>
        </div>

        {/* Task List Header */}
        <div className="flex flex-col gap-4 px-5 pt-6 sm:px-7">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-semibold">Your tasks</h2>

            <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-400">
              {todos.length} {todos.length === 1 ? "task" : "tasks"}
            </span>
          </div>

          <Filter filter={filter} setFilter={setFilter} />
        </div>

        {/* Tasks */}
        <div className="space-y-3 p-5 sm:p-7 sm:pt-5">
          {todos.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 px-4 py-14 text-center">
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/10 text-2xl text-violet-300">
                ✓
              </div>

              <h3 className="font-semibold text-white">
                {filter === "Completed"
                  ? "Nothing completed yet"
                  : filter === "Uncompleted"
                  ? "You're all caught up!"
                  : "Your space is ready"}
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-500">
                {filter === "All"
                  ? "Add your first task above and start building momentum."
                  : "Try another filter or add a new task to your list."}
              </p>
            </div>
          ) : (
            todos.map((item) => (
              <div
                key={item.id}
                className={`group flex items-center gap-3 rounded-2xl border p-4 transition duration-200 hover:-translate-y-0.5 ${
                  item.completed
                    ? "border-emerald-500/10 bg-emerald-500/[0.035]"
                    : "border-white/[0.07] bg-white/[0.025] hover:border-violet-400/30 hover:bg-white/[0.045]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleCompleted(item.id)}
                  aria-label={
                    item.completed
                      ? "Mark task as incomplete"
                      : "Mark task as complete"
                  }
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition ${
                    item.completed
                      ? "border-emerald-400 bg-emerald-400 text-[#09090f]"
                      : "border-zinc-600 text-transparent hover:border-violet-400 hover:text-violet-300"
                  }`}
                >
                  {item.completed && (
                    <span className="text-sm font-bold">✓</span>
                  )}
                </button>

                <div className="min-w-0 flex-1">
                  <p
                    className={`break-words text-sm font-medium leading-6 transition ${
                      item.completed
                        ? "text-zinc-500 line-through"
                        : "text-zinc-200"
                    }`}
                  >
                    {item.todo}
                  </p>

                  <p className="mt-1 text-xs text-zinc-600">
                    {item.completed ? "Completed" : "In progress"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  aria-label={`Delete ${item.todo}`}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400 sm:opacity-0 sm:group-hover:opacity-100 sm:focus:opacity-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6h18" />
                    <path d="M8 6V4h8v2" />
                    <path d="m19 6-1 14H6L5 6" />
                    <path d="M10 11v5M14 11v5" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] px-5 py-4 sm:px-7">
          <p className="text-xs text-zinc-500">
            Small steps. Big progress.
          </p>

          <p className="text-xs font-medium text-violet-300">
            {completedCount === totalTodos && totalTodos > 0
              ? "All tasks completed! ✨"
              : `${totalTodos - completedCount} left to complete`}
          </p>
        </div>
      </section>

      <p className="text-center text-xs text-zinc-600">
        Built with React & Tailwind CSS
      </p>
    </div>
  );
};

export default Input;
