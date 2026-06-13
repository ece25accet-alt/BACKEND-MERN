import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";


function App(){

return(
<>
<div className="flex flex-col h-screen ">
<div>
<Navbar />
</div>

<div className="text-amber-700 flex-1">
<HeroSection />
</div>

<div className="text-center">
<Footer />
</div>

</div>
</>
)

}

export default App;