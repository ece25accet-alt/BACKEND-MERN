import { useState, useEffect } from "react";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ prodName: "", price: "", category: "", brand: "" });

  useEffect(() => {
    const saved = localStorage.getItem("products");
    if (saved) setProducts(JSON.parse(saved));
  }, []);

  const handleSubmit = (e) => {
  
    if (!formData.prodName || !formData.price || !formData.category || !formData.brand) return;
    const updated = [...products, { ...formData}];

    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    setFormData({ prodName: "", price: "", category: "", brand: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Product Management System</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Product Name" value={formData.prodName} onChange={(e) => setFormData({...formData, prodName: e.target.value})} className="border p-2 rounded w-full" />
          <input type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="border p-2 rounded w-full" />
          <input type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="border p-2 rounded w-full" />
          <input type="text" placeholder="Brand" value={formData.brand} onChange={(e) => setFormData({...formData, brand: e.target.value})} className="border p-2 rounded w-full" />
        </div>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Add Product</button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((e) => (
          <div key={e.id} className="border p-4 rounded-lg bg-gray-50 shadow-sm relative">
            <span className="text-xs uppercase bg-purple-100 text-purple-800 px-2 py-1 rounded font-semibold absolute top-3 right-3">{prod.category}</span>
            <h3 className="text-lg font-bold text-gray-800">{e.prodName}</h3>
            <p className="text-gray-500 text-sm">Brand: {e.brand}</p>
            <p className="text-purple-600 font-bold mt-2">${e.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement