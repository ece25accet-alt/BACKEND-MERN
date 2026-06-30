import AppRoutes from "./routes/AppRoutes"


const App = () => {
  return (
    <>
    <h1 className="fixed left-1/2 top-4 z-10 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-center text-xs font-bold uppercase tracking-[0.25em] text-white shadow-lg shadow-black/20 backdrop-blur-md">
      Login and Register with Local Storage
    </h1>
    <AppRoutes />
    </>
  )
}

export default App
