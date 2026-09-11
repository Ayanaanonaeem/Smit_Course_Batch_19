
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [index, setIdx] = useState(0)

  const getdata = async () => {
    const response = await axios(
      `https://picsum.photos/v2/list?page=${index}&limit=8`
    )
    setData(response.data)
  }

  useEffect(() => {
    getdata()
    setData([])
  }, [index])

  let userAvailable = "Loading..."

  if (data.length > 0) {
    userAvailable = data.map((val, idx) => (
      <a
        key={idx}
        href={val.url}
        target="_blank"
        className="group"
      >
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:border-yellow-400/50 transition-all duration-300">
          
          <div className="overflow-hidden">
            <img
              className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={val.download_url}
              alt={val.author}
            />
          </div>

          <div className="p-4">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">
              Photographer
            </p>

            <h1 className="text-white text-lg font-semibold truncate">
              {val.author}
            </h1>
          </div>

        </div>
      </a>
    ))
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold">
              Photo<span className="text-yellow-400">Gallery</span>
            </h1>

            <p className="text-sm text-zinc-500 mt-1">
              Explore beautiful random photographs
            </p>
          </div>

          <div className="hidden sm:block text-sm text-zinc-400">
            Page <span className="text-yellow-400 font-semibold">{index}</span>
          </div>

        </div>
      </header>


      {/* Gallery */}
      <main className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {userAvailable}
        </div>

      </main>


      {/* Pagination */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        <div className="flex items-center justify-center gap-5">

          <button
            disabled={index <= 1}
            className="px-5 py-2.5 rounded-xl bg-zinc-800 text-white font-medium
            hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed
            transition-all"
            onClick={() => {
              if (index > 1) {
                setIdx(index - 1)
              }
            }}
          >
            ← Prev
          </button>

          <div className="h-10 min-w-10 px-3 rounded-xl bg-yellow-400 text-black
          flex items-center justify-center font-bold shadow-lg shadow-yellow-400/10">
            {index}
          </div>

          <button
            className="px-5 py-2.5 rounded-xl bg-yellow-400 text-black
            font-semibold hover:bg-yellow-300 active:scale-95
            transition-all"
            onClick={() => {
              setIdx(index + 1)
            }}
          >
            Next →
          </button>

        </div>

      </div>

    </div>
  )
}

export default App

