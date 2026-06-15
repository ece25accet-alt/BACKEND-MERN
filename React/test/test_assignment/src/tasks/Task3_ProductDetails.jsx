

function Product({ productName, productPrice, productCategory, productBrand }) {
  return (
    <div className="max-w-md bg-white border border-slate-100 shadow-xl rounded-2xl p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 text-xs rounded-bl-xl uppercase font-semibold tracking-wider">
        {productCategory}
      </div>
      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{productBrand}</span>
      <h3 className="text-xl font-bold text-slate-800 mt-1 mb-3">{productName}</h3>
      <div className="flex items-baseline text-slate-900">
        <span className="text-lg font-semibold">$</span>
        <span className="text-3xl font-extrabold tracking-tight">{productPrice}</span>
      </div>
      <button className="mt-5 w-full bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl font-medium transition-colors text-sm">
        View Specifications
      </button>
    </div>
  );
}

export default function Task3_ProductDetails() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">Task 3 - Product Details</h2>
      <p className="text-slate-500 mb-6">Component mapping with category badges and typography handling.</p>
      <Product productName="UltraWide Gaming Monitor 34" productPrice={449.99} productCategory="Electronics" productBrand="ApexTech" />
    </div>
  );
}