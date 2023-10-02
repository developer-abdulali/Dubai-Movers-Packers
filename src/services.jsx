import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // Import the CSS

// Import the aos library
import AOS from "aos";

const Services = () => {
  useEffect(() => {
    document.title = "Services - Dubai Movers & Packers";
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="container mx-auto py-4">
      <div className="text-center text-3xl md:text-4xl mt-4">
        <span>Our Services</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 max-w-screen-xl mx-auto px-3">
        <div
          className="text-center border border-gray-200 p-2 hover:scale-105 duration-200 hover:shadow-md hover:rounded-md"
          data-aos="fade-up" // Specify the animation type here
          data-aos-duration="1000" // Animation duration in milliseconds
          data-aos-delay="100" // Delay before animation starts in milliseconds
        >
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

        <div
          className="text-center border border-gray-200 p-2 hover:scale-105 duration-200 hover:shadow-md hover:rounded-md"
          data-aos="fade-up" // Specify the animation type here
          data-aos-duration="1000" // Animation duration in milliseconds
          data-aos-delay="200" // Delay before animation starts in milliseconds
        >
          <img
            src="/images/domesticshifting.jpeg"
            alt="Domestic Shifting"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">Domestic Shifting</span> <br />
          <Link to="/domesticShifting">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </Link>
        </div>
        <div
          className="text-center border border-gray-200 p-2 hover:scale-105 duration-200 hover:shadow-md hover:rounded-md"
          data-aos="fade-up" // Specify the animation type here
          data-aos-duration="1000" // Animation duration in milliseconds
          data-aos-delay="300" // Delay before animation starts in milliseconds
        >
          <img
            src="/images/ofcShifting.jpeg"
            alt="Office Shifting"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">Office Shifting</span> <br />
          <Link to="/officeRelocation">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </Link>
        </div>
        <div className="sm:hidden lg:block"></div>
        <div
          className="text-center border border-gray-200 p-2 hover:scale-105 duration-200 hover:shadow-md hover:rounded-md"
          data-aos="fade-up" // Specify the animation type here
          data-aos-duration="1000" // Animation duration in milliseconds
          data-aos-delay="400" // Dlay before animation starts in millisecondse
        >
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
