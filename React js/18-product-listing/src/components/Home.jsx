
import React from "react";
import { Link } from "react-router-dom";
import Products from "../Pages/Products";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#faf8ff]">

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="max-w-7xl mx-auto">

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-600 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            {/* Background Decorations */}
            <div className="absolute -top-20 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">

              {/* Hero Content */}
              <div className="max-w-xl">

                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-purple-50 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-green-300"></span>
                  Welcome to Shopora
                </span>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                  Find Your
                  <br />
                  <span className="text-purple-200">
                    Perfect Style.
                  </span>
                </h1>

                <p className="mt-5 max-w-lg text-base sm:text-lg leading-8 text-purple-100">
                  Discover products you'll love. Explore our collection,
                  find your favorites, and make every purchase worthwhile.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">

                  <a
                    href="#products"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-purple-700 shadow-lg shadow-purple-950/10 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-50"
                  >
                    Explore Products

                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-7-7 7 7-7 7"
                      />
                    </svg>
                  </a>

                  <Link
                    to="/products"
                    className="rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white/10"
                  >
                    View Collection
                  </Link>

                </div>

                {/* Highlights */}
                <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">

                  <div>
                    <p className="text-2xl font-bold text-white">
                      Explore
                    </p>
                    <p className="mt-1 text-sm text-purple-200">
                      New favorites
                    </p>
                  </div>

                  <div className="hidden sm:block w-px bg-white/20"></div>

                  <div>
                    <p className="text-2xl font-bold text-white">
                      Discover
                    </p>
                    <p className="mt-1 text-sm text-purple-200">
                      Your next pick
                    </p>
                  </div>

                  <div className="hidden sm:block w-px bg-white/20"></div>

                  <div>
                    <p className="text-2xl font-bold text-white">
                      Shop
                    </p>
                    <p className="mt-1 text-sm text-purple-200">
                      Your way
                    </p>
                  </div>

                </div>
              </div>

              {/* Hero Illustration */}
              <div className="relative hidden lg:flex items-center justify-center">

                <div className="absolute h-80 w-80 rounded-full border border-white/20"></div>
                <div className="absolute h-64 w-64 rounded-full border border-white/20"></div>

                <div className="relative flex h-72 w-72 items-center justify-center rounded-[2.5rem] border border-white/30 bg-white/10 shadow-2xl backdrop-blur-md rotate-3 transition-transform duration-500 hover:rotate-0">

                  <div className="absolute inset-4 rounded-[2rem] border border-white/20"></div>

                  <svg
                    className="relative h-40 w-40 text-white drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.1}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l2.4 12.4a2 2 0 002 1.6h8.8a2 2 0 002-1.6L22 7H6"
                    />
                    <circle cx="10" cy="21" r="1" />
                    <circle cx="19" cy="21" r="1" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 11h8m-4-4v8"
                    />
                  </svg>

                  <div className="absolute -right-7 top-10 rounded-2xl bg-white p-4 shadow-xl -rotate-6">
                    <span className="text-2xl">💜</span>
                  </div>

                  <div className="absolute -bottom-5 -left-6 rounded-2xl bg-white px-5 py-4 shadow-xl rotate-3">
                    <p className="text-xs font-medium text-gray-500">
                      Your next favorite
                    </p>
                    <p className="mt-1 font-bold text-purple-700">
                      Starts here ✨
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="scroll-mt-6">
        <Products />
      </section>

    </div>
  );
};

export default Home;
