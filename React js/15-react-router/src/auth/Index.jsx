
import React from "react";
import { useNavigate } from "react-router-dom";

function Auth() {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8 text-center shadow-2xl">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-white">
          Dev<span className="text-cyan-400">Space</span>
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-2xl font-semibold text-white">
          Welcome!
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Login or create an account to continue.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <button
            type="button"
            onClick={()=>navigate("/auth/login")}
            className="w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-gray-950 transition duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            Login
          </button>

          <button
            type="button"
            onClick={()=>navigate("/auth/signup")}
            className="w-full rounded-xl border border-gray-700 bg-gray-800 px-6 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:bg-gray-700"
          >
            Sign Up
          </button>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          Your journey starts here.
        </p>
      </div>
    </div>
  );
}

export default Auth;
