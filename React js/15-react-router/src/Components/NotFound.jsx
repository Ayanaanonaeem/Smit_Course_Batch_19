
import React from "react";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 px-5 text-white">
      <div className="w-full max-w-2xl text-center">

        {/* 404 Illustration */}
        <div className="relative mb-6">
          <h1 className="select-none text-8xl font-black tracking-widest text-gray-800 sm:text-9xl md:text-[180px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-2xl border border-cyan-400/30 bg-gray-950/90 px-5 py-3 text-lg font-bold tracking-widest text-cyan-400 shadow-xl shadow-cyan-500/10 sm:text-2xl">
              PAGE NOT FOUND
            </span>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold sm:text-3xl">
          Oops! You’re Lost in Space.
        </h2>

        <p className="mx-auto mt-4 max-w-md leading-7 text-gray-400">
          The page you're looking for doesn't exist, may have been moved,
          or the URL might be incorrect.
        </p>

        {/* Button */}
        <button
          type="button"
          onClick={() => window.history.back()}
          className="mt-8 rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-gray-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
        >
          ← Go Back
        </button>

        {/* Footer */}
        <p className="mt-12 text-sm text-gray-600">
          Error Code: 404 · DevSpace
        </p>

      </div>
    </div>
  );
}

export default NotFound;
