import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="text-center text-3xl md:text-4xl mt-4">
        <span>Our Services</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 max-w-screen-xl mx-auto px-3">
        <div className="text-center border border-gray-200 p-2 hover:scale-105 duration-200 hover:shadow-md hover:rounded-md">
          <img
            src="/images/HouseShifting.jpeg"
            alt="House Shifting"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
            
          />
          <span className="text-xl md:text-2xl">House Shifting</span> <br />
          <Link to="/houseShifting">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </Link>
        </div>
        <div className="text-center border border-gray-200 p-2 hover:scale-105 duration-200 hover:shadow-md hover:rounded-md">
          <img
            src="/images/domesticShifting.png"
            alt="Domestic Shifting"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">Domestic Shifting</span> <br />
          <Link to="/domesticShifting">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </Link>
        </div>
        <div className="text-center border border-gray-200 p-2 hover:scale-105 duration-200 hover:shadow-md hover:rounded-md">
          <img
            src="/images/officeShifting.png"
            alt="Office Shifting"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">Office Shifting</span> <br />
          <Link to="/officeRelocation">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </Link>
        </div>
        <div className="text-center border border-gray-200 p-2 hover:scale-105 duration-200 hover:shadow-md hover:rounded-md">
          <img
            src="/images/MoversPackers.jpeg"
            alt="Movers packers"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">Movers and Packers</span> <br />
          <Link to="/moversPackers">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Services;

