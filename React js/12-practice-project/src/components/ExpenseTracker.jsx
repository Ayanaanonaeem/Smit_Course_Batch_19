import React from "react";

const ExpenseTracker = ({
  totalExpense,
  totalIncome,
  balance,
  setAmount,
  setType,
  amount,
  type,
  handleSubmit,
  transactions,
}) => {
  return (
    <section className="min-h-screen bg-white px-4 py-12 text-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700">
            Personal Finance
          </span>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Expense <span className="text-purple-600">Tracker</span>
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
            Manage your income, track your expenses, and stay in control of your money.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Total Income
              </p>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-700">
                +
              </span>
            </div>

            <h2 className="break-words text-2xl font-bold text-purple-700 sm:text-3xl">
              {totalIncome}
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Your total earnings
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Total Expense
              </p>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xl font-semibold text-black">
                −
              </span>
            </div>

            <h2 className="break-words text-2xl font-bold text-black sm:text-3xl">
              {totalExpense}
            </h2>
            <p className="mt-2 text-xs text-gray-400">
              Your total spending
            </p>
          </div>

          <div className={`rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:col-span-2 lg:col-span-1 ${
            balance >= 0
              ? "border-purple-200 bg-purple-50"
              : "border-gray-300 bg-gray-100"
          }`}>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Available Balance
              </p>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl text-purple-700">
                =
              </span>
            </div>

            <h2 className={`break-words text-2xl font-bold sm:text-3xl ${
              balance >= 0 ? "text-purple-700" : "text-black"
            }`}>
              {balance}
            </h2>
            <p className="mt-2 text-xs text-gray-500">
              Income minus expenses
            </p>
          </div>

        </div>

        {/* Add Transaction */}
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold sm:text-2xl">
              Add Transaction
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Enter an amount and choose a transaction type.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Amount
              </label>
              <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-purple-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-purple-100">
                <span className="mr-3 text-lg font-semibold text-purple-600">
                  Rs.
                </span>
                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full bg-transparent py-3.5 text-sm text-black outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Transaction Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-black outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-purple-200 transition duration-300 hover:bg-purple-700 active:scale-[0.98] sm:w-auto"
          >
            + Add Transaction
          </button>
        </div>

        {/* Transaction History */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col gap-2 border-b border-gray-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <h2 className="text-xl font-bold">
                Recent Transactions
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Review your income and expenses.
              </p>
            </div>

            <span className="w-fit rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
              {transactions.length} Transactions
            </span>
          </div>

          {transactions.length === 0 ? (
            <div className="px-5 py-14 text-center sm:px-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl text-purple-600">
                +
              </div>
              <h3 className="font-semibold text-black">
                No transactions yet
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Add your first transaction to get started.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {transactions.map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between gap-4 px-5 py-5 transition hover:bg-purple-50/50 sm:px-8"
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${
                      val.type === "income"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-black"
                    }`}>
                      {val.type === "income" ? "+" : "−"}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-black">
                        {val.type === "income" ? "Income" : "Expense"}
                      </h3>
                      <p className="mt-1 text-xs text-gray-400">
                        Transaction #{idx + 1}
                      </p>
                    </div>
                  </div>

                  <p className={`shrink-0 text-sm font-bold sm:text-base ${
                    val.type === "income"
                      ? "text-purple-700"
                      : "text-black"
                  }`}>
                    {val.type === "income" ? "+" : "−"} Rs. {val.amount}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-xs text-gray-400">
          Track smarter. Spend better.
        </p>

      </div>
    </section>
  );
};

export default ExpenseTracker;
