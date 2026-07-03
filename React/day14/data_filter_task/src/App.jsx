import { useEffect, useState } from "react"


const App = () => {

  const[data, setData] = useState([])
  const[cat, setCat] = useState([])
  const[selectCat, setSelectCat] = useState("")
  const[selectInp, setSelectInp] = useState("")
  const[selectSort, setSelectSort] = useState("")

  const storeData = async()=>{

    const getData = await fetch("https://dummyjson.com/products")
    const parseData = await getData.json()

    setData(parseData.products)

    const category = parseData.products.map((e)=>e.category)
    // console.log(category);
    
    const unicat = [...new Set(category)]
    setCat(unicat)
    // console.log(unicat);
  
    

  }
  useEffect(()=>{
    storeData()
  },[])

  const handlecat=(e)=>{
    const presentCat = e.target.value
    setSelectCat(presentCat)
    //console.log(presentCat)
  }

  
  let sortProducts = [...data]

  if(selectCat){
    sortProducts = (selectCat === "Select all" || selectCat === "") ? data : data.filter((e)=>e.category === selectCat)
  }
  
  
  const handelinp=(e)=>{
    const presentInp = e.target.value
    setSelectInp(presentInp)
    //console.log(selectInp);
    
  }

  const handleSort=(e)=>{
    const presentSort = e.target.value
    setSelectSort(presentSort)
    console.log(presentSort);
    
  }

  if(selectSort === "asc"){
    sortProducts = sortProducts.sort((a,b)=>a.price - b.price)
  }

    if(selectSort === "dec"){
    sortProducts = sortProducts.sort((b,a)=>a.price - b.price)
  }


  if(selectInp){
      sortProducts = sortProducts.filter((e)=>e.title.toLowerCase().includes(selectInp.toLowerCase()))
  }

  return (
    <>
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-950 sm:px-6 lg:px-10">
    <div className="mx-auto max-w-7xl">
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Premium collection</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Store Products</h1>
      </div>
      <p className="text-sm font-medium text-slate-500">{sortProducts.length} products found</p>
    </div>

    <div className="mb-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-3">
    <select className="h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" onChange={handlecat}>
      <option disabled> Select Category</option>
      <option>Select all</option>
      {cat.map((e,i)=>(
        <option key={i+1}>{e}</option>
      ))}
    </select>

    <input className="h-12 rounded-md border border-slate-300 px-3 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" onChange={handelinp} type="text" placeholder="Search products"></input>

    <select className="h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-700 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100" onChange={handleSort}>
      <option disabled selected>Select Sort Option</option>
      <option value="asc">low to high price</option>
      <option value="dec">high to low price</option>
    </select>

    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sortProducts.map((e)=>(
        <div key={e.id} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
        <div className="aspect-square bg-slate-100 p-5">
          <img className="h-full w-full object-contain transition duration-300 group-hover:scale-105" src={e.thumbnail} alt={e.title} />
        </div>
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold capitalize text-emerald-700">{e.category}</span>
            <span className="text-xs font-semibold text-slate-400">#{e.id}</span>
          </div>
          <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-slate-900">{e.title}</h3>
          <div className="mt-4 flex items-end justify-between gap-3">
            <h3 className="text-xl font-bold text-slate-950">${e.price}</h3>
            <p className="text-sm font-semibold text-amber-600">Rating {e.rating}</p>
          </div>
        </div>
        </div>
      ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default App
