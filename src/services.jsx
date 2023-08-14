import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="bg-[#0772BD] py-3 max-w-screen-xl mx-auto">
        <div className="">
          <p className="text-white font-medium text-2xl ml-5">Our Services</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 max-w-screen-xl mx-auto px-3">
        <div className="text-center">
          <img
            src="/images/House-shifting.jpeg"
            alt="House Shifting"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">House Shifting</span> <br />
          <a href="/">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </a>
        </div>
        <div className="text-center">
          <img
            src="/images/domesticShifting.png"
            alt="Domestic Shifting"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">Domestic Shifting</span> <br />
          <a href="/">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </a>
        </div>
        <div className="text-center">
          <img
            src="/images/officeShifting.png"
            alt="Office Shifting"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">Office Shifting</span> <br />
          <a href="/">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </a>
        </div>
        <div className="text-center">
          <img
            src="/images/MoversPackers.jpeg"
            alt="Movers packers"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">Movers and Packers</span> <br />
          <a href="/">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </a>
        </div>
        <div className="text-center">
          <img
            src="/images/goodTransportation.png"
            alt="Good Transportation"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">Good Transportation</span>{" "}
          <br />
          <a href="/">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </a>
        </div>
        <div className="text-center">
          <img
            src="/images/car-carier.png"
            alt="Car Carrier"
            className="mx-auto mb-2 w-full h-[200px] max-w-full"
          />
          <span className="text-xl md:text-2xl">Car Carrier</span> <br />
          <a href="/">
            <button className="mt-2 btn btn-primary">Book Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
