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
