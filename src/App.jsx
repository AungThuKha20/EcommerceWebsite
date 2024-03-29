import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
// core styles are required for all packages
import "@mantine/core/styles.css";
import PdDetail from "./Components/PdDetail";
import Slider from "./Components/Slider";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import CheckOut from "./Components/CheckOut";
import PayPal from "./Components/PayPal";

const App = () => {
  const location = useLocation();
  const shouldShowFooter = !location.pathname.startsWith("/product/");
  return (
    <div className="overflow-hidden">
      <Slider />
      <Navbar />
      <ContactUs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<PdDetail />} />
      </Routes>
      {shouldShowFooter && (
        <>
          <CheckOut />
          <PayPal />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
