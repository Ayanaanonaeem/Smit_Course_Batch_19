
import React from "react";
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 1800,
    category: "Self Improvement",
    image:
      "https://images-na.ssl-images-amazon.com/images/P/0735211299.01.L.jpg",
    description:
      "A practical guide to building good habits, breaking bad ones, and making small changes that lead to remarkable results.",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 1500,
    category: "Finance",
    image:
      "https://images-na.ssl-images-amazon.com/images/P/0857197681.01.L.jpg",
    description:
      "Learn how people think about money, make financial decisions, and build long-term wealth.",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    price: 1700,
    category: "Productivity",
    image:
      "https://images-na.ssl-images-amazon.com/images/P/1455586692.01.L.jpg",
    description:
      "Discover how focused, distraction-free work can help you learn difficult skills and produce better results.",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: 1200,
    category: "Personal Finance",
    image:
      "https://images-na.ssl-images-amazon.com/images/P/1612680194.01.L.jpg",
    description:
      "Explore different perspectives on financial education, assets, liabilities, and building wealth.",
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 1400,
    category: "Mindset",
    image:
      "https://images-na.ssl-images-amazon.com/images/P/1585424331.01.L.jpg",
    description:
      "A classic book about goal setting, persistence, and the mindset behind personal achievement.",
  },
  {
    id: 6,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 1900,
    category: "Personal Development",
    image:
      "https://images-na.ssl-images-amazon.com/images/P/1982137274.01.L.jpg",
    description:
      "Learn principles for personal effectiveness, better relationships, and purposeful living.",
  },
];

function Books() {
  return (
    <div className="min-h-screen bg-gray-950 px-5 py-12 text-white md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Your Reading Space
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Discover Your Next{" "}
            <span className="text-cyan-400">Book</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Explore our collection of books and find your next
            source of knowledge and inspiration.
          </p>
        </div>

        {/* Book Count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Popular Books</h2>

          <span className="rounded-full border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-300">
            {books.length} Books
          </span>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-950/30"
            >
              {/* Image */}
              <div className="flex h-64 items-center justify-center overflow-hidden bg-gray-800 p-5">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-auto max-w-full rounded-lg object-contain shadow-lg transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Book Details */}
              <div className="p-5">
                <span className="text-xs font-medium uppercase tracking-wider text-cyan-400">
                  {book.category}
                </span>

                <h3 className="mt-2 text-lg font-bold transition group-hover:text-cyan-400">
                  {book.title}
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  By {book.author}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-gray-800 pt-4">
                  <p className="text-xl font-bold text-white">
                    Rs. {book.price.toLocaleString()}
                  </p>

                  <Link to={`/books/${book.id}`} className="rounded-lg bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-400">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Books;
