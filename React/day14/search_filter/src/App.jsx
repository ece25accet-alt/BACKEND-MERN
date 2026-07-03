import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const App = () => {

  const [unidata, setUnidata] = useState([])
  const [showdata, setShowData] = useState([])

  const [cat, setCat] = useState("")
  

  const getData = async () => {

    try {

      const responseData = await fetch('https://dummyjson.com/products');
      const parseData = await responseData.json();      
      //console.log('Data', parseData);

      const cat = parseData.products.map((e)=>e.category)
      //console.log(cat)

      const uniqueCat = [...new Set(cat)]
      console.log(uniqueCat)

      setUnidata(uniqueCat)
      
      setShowData(parseData.products)

      
    }
    catch (error) {
      console.error('Error', error);
    }


  };

  useEffect(() => {
    getData();
  }, []);

  let sortData = [...showdata]

  
  const handleCat=(e)=>{
    setCat(e.target.value)
  }

  if(cat){
    sortData = sortData.filter((e)=>e.category === cat)
        }


  
  return (
    <>
    <div className="flex flex-col">
      <div>
        <select onChange={handleCat}>
      <option selected > Select all</option>
      {unidata.map((e,i)=>(
        <option key={i+1}>{e}</option>
      ))}

        </select>
      </div>


      <div className="flex flex-row">
        {sortData.map((e)=>(
          <div className="bg-amber-200 mx-5 my-5 w-50" key={e.id}>
            <h3>{e.title}</h3>
            <h4>{e.category}</h4>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default App
