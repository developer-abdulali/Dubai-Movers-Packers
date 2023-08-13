// // Importing the main CSS file to apply global styles to the app
// import "./App.css";
// // Importing custom components
// import Carousel from "./components/Carousel/Carousel";
// import DMP from "./components/DMP/DMP";
// import Services from "./components/Services/Services";
// import Testimonial from "./components/Testimonial/Testimonial";
// import WhyUs from "./components/WhyUs/WhyUs";

// // Defining the main App component
// function App() {
//   return (
//     <>
//       {/* Rendering the Carousel component */}
//       <Carousel />

//       {/* Rendering the DMP (Dubai Movers & Packers) component */}
//       <DMP />

//       {/* Rendering the Services component */}
//       <Services />

//       {/* Rendering the Testimonial component */}
//       <Testimonial />

//       {/* Rendering the WhyUs component */}
//       <WhyUs />
//     </>
//   );
// }import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./about";
import Services from "./services";
import HouseShifting from "./houseShifting";
import GetAQuote from "./getAQuote";
import Contact from "./contact";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div>
        {/* Render the Navbar */}
        <Navbar />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/houseShifting" element={<HouseShifting />} />
          <Route path="/getAQuote" element={<GetAQuote />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




// import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./about";
// import Services from "./services";
// import HouseShifting from "./houseShifting";
// import GetAQuote from "./getAQuote";
// import Contact from "./contact";

// const App = () => {
//   return (
//     <div>
//       {/* Your Navbar component can be placed here */}
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/services" component={Services} />
//         <Route path="/houseShifting" component={HouseShifting} />
//         <Route path="/getAQuote" component={GetAQuote} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//       {/* Other components and content */}
//     </div>
//   );
// };

// export default App;
