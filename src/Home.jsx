import React from "react";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import DMP from "./components/DMP/DMP";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyUs from "./components/WhyUs/WhyUs";

// Defining the main App component
const Home = () => {
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
}

export default Home

// import React, { Suspense, lazy } from "react";
// import "./App.css";

// // Import components using lazy loading
// const Carousel = lazy(() => import("./components/Carousel/Carousel"));
// const DMP = lazy(() => import("./components/DMP/DMP"));
// const Services = lazy(() => import("./components/Services/Services"));
// const Testimonial = lazy(() => import("./components/Testimonial/Testimonial"));
// const WhyUs = lazy(() => import("./components/WhyUs/WhyUs"));

// // Defining the main App component
// function Home() {
//   return (
//     <div>
//       <Suspense
//         fallback={<div className="text-3xl text-center my-20">Loading...</div>}
//       >
//         {/* Rendering the Carousel component */}
//         <Carousel />

//         {/* Rendering the DMP (Dubai Movers & Packers) component */}
//         <DMP />

//         {/* Rendering the Services component */}
//         <Services />

//         {/* Rendering the Testimonial component */}
//         <Testimonial />

//         {/* Rendering the WhyUs component */}
//         <WhyUs />
//       </Suspense>
//     </div>
//   );
// }

// export default Home;
