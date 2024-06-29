import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import weather from "../../public/weather.jpeg";
import nodejs from "../../public/node.png";
import gym from "../../public/gym.png";
import food from "../../public/food.jpeg";
import love from "../../public/love.jpeg";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: food,
      name: "Meal Magic",
      link: "https://neetipatel11.github.io/OnlineFoodService/index.html",
      description: "To build a food restaurant website."
    
    },
    {
      id: 2,
      logo: gym,
      name: "Gym Management System",
      link: "https://neetipatel11.github.io/OnlineFoodService/index.html",
      description:"Manage gym efficiently with our easy-to-use system"
    },
    {
      id: 3,
      logo: love,
      name: "Love Calculator",
      link: "https://neetipatel11.github.io/lovecalculator/lovecal.html",
      description: "A platform for finding and sharing love stories."
    },
    {
      id: 4,
      logo: weather,
      name: "Weather App",
      link: "https://github.com/neetipatel11/WeatherApp.git",
      description: "weather app provides up-to-date and accurate weather information"
    },
    
    
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold"> Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name ,link,description}) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  {description}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
               
               
              <a href={link}>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>



                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
