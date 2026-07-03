import { useEffect, useState } from "react"

const App = () => {
  const [dataShow, setdataShow] = useState([])

  const fetchData = async () => {
    const dataFetch = await fetch("https://dummyjson.com/products")
    const res = await dataFetch.json()
    setdataShow(res.products)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
            Fresh Picks
          </p>
          <h1 className="mt-2 text-4xl font-bold">Product Gallery</h1>
          <p className="mt-3 text-slate-300">
            Browse a small collection fetched from the products API.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {dataShow.map((e) => (
            <article
              key={e.id}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50"
            >
              <div className="flex aspect-square items-center justify-center bg-white p-4">
                <img
                  src={e.thumbnail}
                  alt={e.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="space-y-3 p-4">
                <span className="inline-flex rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                  {e.category}
                </span>
                <h2 className="min-h-12 text-lg font-semibold leading-tight">
                  {e.title}
                </h2>
                <div className="flex items-center justify-between border-t border-white/10 pt-3">
                  <p className="text-xl font-bold text-cyan-200">${e.price}</p>
                  <p className="text-sm text-slate-300">Rating {e.rating}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
