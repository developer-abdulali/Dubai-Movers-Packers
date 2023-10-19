import React, { useEffect } from "react";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import DMP from "./components/DMP/DMP";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyUs from "./components/WhyUs/WhyUs";

// Defining the main App component
const Home = () => {
  useEffect(() => {
    document.title = "Dubai Movers & Packers";
  }, []);
  return (
    <>
      {/* Rendering the Carousel component */}
      <Carousel />

      {/* Rendering the DMP (Dubai Movers & Packers) component */}
      <DMP />

      {/* Rendering the Services component */}
      <Services />

      {/* Rendering the Testimonial component */}
      <Testimonial />

      {/* Rendering the WhyUs component */}
      <WhyUs />
    </>
  );
};

export default Home;
