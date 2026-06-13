import CompanyInfo from "./components/CompanyInfo";
import EmployeeCard from "./components/EmployeeCard";
import MovieDetails from "./components/MovieDetails";
import ProductCard from "./components/ProductCard";
import StudentProfile from "./components/StudentProfile";

function App() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center bg-gray-200">

      <StudentProfile />
      <br />
      <EmployeeCard />
      <br />
      <ProductCard />
      <br />
      <MovieDetails />
      <br />
      <CompanyInfo />
    </div>
    </>
  );
}

export default App;