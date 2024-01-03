import React, { useEffect, useState } from "react";
import {FaWind} from "react-icons/fa" 
import {FaDroplet} from "react-icons/fa6"
import { FaCompass } from "react-icons/fa";

const App = () => {
  const [data,setData]=useState([])
  const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13/kerala';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '091341b824mshc233dcf3a533adbp1f2935jsn67268c49dc04',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};



  const fData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData([result])
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fData();
  },[]);

  return(
    <div className=" bg-hero bg-cover h-screen flex flex-col justify-center items-center space-y-8 ">
      <form>
      <div className="relative">
        

        <input className="bg-black bg-opacity-70 text-white w-80 p-2 rounded-full placeholder:text-sm md:w-[600px] sm:w-96 lg:w-[700px]" type="text" placeholder="Find your location..." required/>
        <button className="absolute text-white bg-blue-500 rounded-full focus:ring-2 focus:ring-blue-300 focus:outline-none px-5 py-1 end-1 bottom-1 md:px-7">Find</button>
        </div>

      </form>
      {
        data.map((data)=>(
          <div className="text-gray-300 space-y-5 p-3 bg-opacity-60 w-80 h-80 rounded-2xl bg-gray-700 md:w-[600px] sm:w-96 lg:w-[700px]">
          <div className="">
            <h3 className="text-lg  font-medium">{data.location.name}</h3>
          </div>
          <div className="">
            <h1 className="text-8xl font-semibold ">{data.current.temp_c}°C</h1>
           <img src={`${data.current.condition.icon}`} alt="" className="w-24"/>
  
  
          </div>
          <div className="flex justify-between px-2">
           <p className="flex items-center"><FaWind className="mx-2"/>{data.current.wind_degree}°</p>
           <p className="flex items-center"><FaDroplet className="mx-2"/>{data.current.humidity}Km/h</p>
           <p className="flex items-center"><FaCompass className="mx-2"/>{data.current.wind_dir}</p>
  
          </div>
  
        </div>

        ))
      }
     
      
     
     

    </div>
  )
};

export default App;
