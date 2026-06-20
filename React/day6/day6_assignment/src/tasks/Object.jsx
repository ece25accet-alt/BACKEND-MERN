import { useState } from "react";

const SingleProduct = () => {

  const [product, setProduct] = useState({
    id: "PROD-992",
    title: "Wireless Headphones",
    basePrice: 200,
    offerPercentage: 10,
    category: "Electronics",
    stockStatus: "In Stock"
  });


  const updateOffer = (newDiscount) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      offerPercentage: newDiscount
    }));
  };


  const editTitle = (newTitle) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      title: newTitle
      
    }));
  };


  const finalPrice = product.basePrice * (1 - product.offerPercentage / 100);

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <div>
        <h1 className="text-center mt-5 text-2xl font-bold"> Object Project</h1>
      </div>


      <div className="mt-5 w-full flex justify-center flex-wrap">
        
        <div className="bg-white text-black p-5 rounded-lg w-72 m-5 flex flex-col justify-between shadow-xl">
          <div>
         
            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              {product.stockStatus}
            </span>
            
            <p className="text-xl font-bold mt-3">{product.title}</p>
            <p className="text-slate-500 text-sm font-medium">Category: {product.category}</p>
          
            
            <hr className="my-3 border-slate-200" />
            
            <p className="text-lg text-slate-8 ">Base Price: ${product.basePrice}</p>
            <p className="text-lg font-semibold text-red-500">Current Offer: {product.offerPercentage}% Off</p>
            

            <p className="text-2xl font-extrabold text-slate-900 mt-2 bg-amber-100/60 p-2 rounded border border-amber-200 text-center">
              Final Price: ${finalPrice.toFixed(2)}
            </p>
          </div>


          <button
            className="bg-amber-200 text-black p-2 rounded-lg hover:text-red-600 mt-5 font-medium transition-colors w-full"
            onClick={() => editTitle("Premium Headphones (Pro Edition)")}
          >
            Change Title Card
          </button>
        </div>

      </div>

      <div className="flex flex-row gap-4 justify-center mt-5">
        <button 
          className="bg-amber-200 text-black p-2 rounded-lg hover:text-red-600 font-medium transition-colors" 
          onClick={() => updateOffer(20)}
        >
          Apply 20% Discount
        </button>
        
        <button 
          className="bg-amber-200 text-black p-2 rounded-lg hover:text-red-600 font-medium transition-colors" 
          onClick={() => updateOffer(50)}
        >
          Apply Mega 50% Sale
        </button>
        
        <button 
          className="bg-amber-200 text-black p-2 rounded-lg hover:text-red-600 font-medium transition-colors" 
          onClick={() => updateOffer(0)}
        >
          Reset Discount (0%)
        </button>
      </div>
      
    </div>
  );
};

export default SingleProduct;