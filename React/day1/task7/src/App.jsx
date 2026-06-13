import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";


function App(){

return(
<>
<div className="flex flex-col h-screen ">
<div>
<Header />
</div>

<div className="flex-1 bg-gray-200 text-center justify-center">
  <MainContent />
  </div>

<div className="text-center">
  <Footer />
  </div>


</div>
</>

)

}

export default App;