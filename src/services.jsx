import React from "react";

const ServiceCard = ({ imageSrc, altText, title, link }) => {
  return (
    <div className="text-center border border-gray-200 p-2 hover:scale-105 duration-200 hover:shadow-md hover:rounded-md">
      <img
        src={imageSrc}
        alt={altText}
        className="mx-auto mb-2 w-full h-[200px] max-w-full"
      />
      <span className="text-xl md:text-2xl">{title}</span> <br />
      <a href={link}>
        <button className="mt-2 btn btn-primary">Book Now</button>
      </a>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      imageSrc: "/images/HouseShifting.jpeg",
      altText: "House Shifting",
      title: "House Shifting",
      link: "/houseShifting",
    },
    {
      imageSrc: "/images/domesticShifting.png",
      altText: "Domestic Shifting",
      title: "Domestic Shifting",
      link: "/domesticShifting",
    },
    {
      imageSrc: "/images/officeShifting.png",
      altText: "Office Shifting",
      title: "Office Shifting",
      link: "/officeShifting",
    },
    {
      imageSrc: "/images/MoversPackers.jpeg",
      altText: "Movers packers",
      title: "Movers and Packers",
      link: "/moversPackers",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <div className="bg-[#0772BD] py-3 max-w-screen-xl mt-3">
        <p className="text-white font-medium text-2xl ml-5">Our Services</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            altText={service.altText}
            title={service.title}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
