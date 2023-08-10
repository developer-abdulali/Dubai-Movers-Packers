import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import DMP from "./components/DMP/DMP";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  return (
    <>
      <Carousel />
      <DMP />
      <Services />
      <Testimonial />
      <WhyUs />
    </>
  );
}

export default App;
