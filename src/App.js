import React, { useEffect } from "react";
import Booking from "./componants/Booking";
import BookingCTA from "./componants/BookingCTA";
import Features from "./componants/Features";
import Footer from "./componants/Footer";
import Header from "./componants/Header";
import LandingContent from "./componants/LandingContent";
import Nav from "./componants/Nav";
import Services from "./componants/Services";
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
    AOS.refresh(); // Refresh AOS library to apply animations
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <LandingContent />
      <Features />
      <BookingCTA />
      <Services />
      <Booking />
      <Footer />
    </>
  );
}

export default App;