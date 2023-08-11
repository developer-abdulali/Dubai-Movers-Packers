// Importing the main CSS file to apply global styles to the app
import "./App.css";
// Importing custom components
import Carousel from "./components/Carousel/Carousel";
import DMP from "./components/DMP/DMP";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyUs from "./components/WhyUs/WhyUs";

// Defining the main App component
function App() {
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

// Exporting the App component as the default export
export default App;
