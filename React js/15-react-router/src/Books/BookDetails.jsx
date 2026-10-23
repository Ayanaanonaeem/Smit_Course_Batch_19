
import React from "react";
import { useParams,Link } from "react-router-dom";

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

function BookDetails() {
  const { id } = useParams();


  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4 text-center text-white">
        <div>
          <h1 className="text-3xl font-bold">Book Not Found</h1>
          <p className="mt-3 text-gray-400">
            The book you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 px-5 py-12 text-white md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Breadcrumb */}
        <p className="mb-8 text-sm text-gray-400">
          <Link to={"/"}>Home</Link><span className="mx-2">/</span>
         <Link to={"/books"}>Books</Link> <span className="mx-2">/</span>
          <span className="text-cyan-400">{book.title}</span>
        </p>

        {/* Details Card */}
        <div className="grid overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 md:grid-cols-2">

          {/* Book Image */}
          <div className="flex min-h-[400px] items-center justify-center bg-gray-800 p-8 md:p-12">
            <img
              src={book.image}
              alt={book.title}
              className="max-h-[450px] max-w-full rounded-xl object-contain shadow-2xl transition duration-300 hover:scale-105"
            />
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center p-7 md:p-12">
            <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
              {book.category}
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
              {book.title}
            </h1>

            <p className="mt-3 text-gray-400">
              Written by{" "}
              <span className="font-medium text-white">
                {book.author}
              </span>
            </p>

            <div className="my-7 h-px bg-gray-800" />

            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              About This Book
            </h2>

            <p className="mt-3 leading-7 text-gray-300">
              {book.description}
            </p>

            <div className="mt-8">
              <p className="text-sm text-gray-400">Price</p>

              <p className="mt-1 text-3xl font-bold text-cyan-400">
                Rs. {book.price.toLocaleString()}
              </p>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-gray-950 transition hover:bg-cyan-300 md:w-fit"
            >
              Buy This Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
