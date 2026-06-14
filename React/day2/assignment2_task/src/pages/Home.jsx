function Home() {
  return (
    <>
    <div>
      {/* Banner Section */}
      <div className="bg-red-600 text-white text-center py-24 px-4 shadow-md">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          Place order after adding to wishlist
        </p>
      </div>
      
      {/* Page Body */}
      <div className="max-w-4xl mx-auto mt-10 p-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Home Page Content</h2>
        <p className="text-gray-600 mt-2">Your main landing content lives right here.</p>
      </div>
    </div>
    </>
  );
}

export default Home;