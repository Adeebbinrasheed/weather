import React, { useEffect, useState } from "react";
import { FaWind } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FaCompass } from "react-icons/fa";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13q=" +
    encodeURIComponent(search);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "091341b824mshc233dcf3a533adbp1f2935jsn67268c49dc04",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  const fData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setData([result]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fData();
  }, []);

  const searchData = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault()
    // fData()
  };
  const change = (e) => {
    e.preventDefault();
    fData();
    setSearch("");
  };

  return (
    <div className="bg-hero bg-cover h-screen flex flex-col justify-center items-center space-y-8 ">
      <h1 className="text-2xl font-semibold text-slate-600 font-serif">Weather</h1>
      {data.map((data) => (
        <div className="text-gray-300 space-y-5 p-4 bg-opacity-80 w-72 rounded-2xl bg-gray-700 md:w-80">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="bg-black bg-opacity-70 text-white w-64 p-2 rounded-full placeholder:text-sm md:w-72"
                type="text"
                value={search}
                placeholder="Find your location..."
                onChange={searchData}
                required
              />
              <button
                className="absolute text-white bg-teal-400 rounded-full focus:outline-none focus:border-none px-2 py-1 end-1 bottom-1 md:px-3"
                onClick={change}
              >
                Find
              </button>
            </div>
          </form>
          <div className="">
            <h3 className="text-lg  font-medium">{data.location.name}</h3>
          </div>
          <div className="">
            <h1 className="text-8xl font-semibold ">{data.current.temp_c}°C</h1>
            <img
              src={`${data.current.condition.icon}`}
              alt=""
              className="w-24"
            />
            <p className="text-lg font-semibold ml-5 mb-8">{data.current.condition.text}</p>
          </div>
          <div className="flex justify-between px-2">
            <p className="flex items-center">
              <FaWind className="mx-2" />
              {data.current.wind_degree}°
            </p>
            <p className="flex items-center">
              <FaDroplet className="mx-2" />
              {data.current.humidity}Km/h
            </p>
            <p className="flex items-center">
              <FaCompass className="mx-2" />
              {data.current.wind_dir}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
