import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ArabicText from "./components/ArabicText/ArabicText";
import Footer from "./components/Footer/Footer";
import WhatsappContact from "./components/WhatsappContact/WhatsappContact";
import Loader from "./components/Loader/Loader";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data (replace with your actual data fetching logic)
    const fetchData = async () => {
      try {
        // Set loading to true when data fetching starts
        setLoading(true);

        // Simulate data fetching delay (replace with actual data fetching logic)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Set loading to false when data fetching is complete
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Run this effect only once on component mount

  return (
    <React.StrictMode>
      {loading ? (
        <Loader /> // Display the loader if data is still loading
      ) : (
        // Render your actual content once data is loaded
        <>
          <ArabicText />
          <App />
          <Footer />
          <WhatsappContact />
        </>
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
