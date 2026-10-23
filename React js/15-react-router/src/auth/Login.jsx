
import React from "react";

function Login() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Dev<span className="text-cyan-400">Space</span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-white">
            Welcome Back!
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Login to continue your journey.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            />
          </div>

          <div className="flex items-center justify-between gap-3 text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-cyan-400" />
              Remember me
            </label>

            <button
              type="button"
              className="text-cyan-400 transition hover:text-cyan-300"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-400 py-3 font-semibold text-gray-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <span className="font-medium text-cyan-400">
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;
