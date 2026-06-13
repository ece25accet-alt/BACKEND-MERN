function ProductCard() {
  return (
    <div  className="w-80 p-5 bg-red-100 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-700 mb-3 text-center">Product Card</h1>
      <ul className="space-y-2">
      <li><b>Product Name:</b> ASUS TUFF</li>
      <li><b>Product Price:</b> 60000</li>
      <li><b>Category:</b> Electronics</li>
      <li><b>escription:</b> Gaming Laptop</li>
      </ul>
    </div>
  );
}

export default ProductCard;