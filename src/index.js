import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import ArabicText from "./components/ArabicText/ArabicText";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArabicText />
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);
