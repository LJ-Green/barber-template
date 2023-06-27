import React from "react";
import "../App.css";
import Logo from "./../assets/Dapper Studio Logo.png";
import BackgroundImage from './../assets/description-image.jpg'

const LandingContent = () => {
  return (
    <>
      <div className="flex justify-center items-center landing-content">
        <div className="text-center my-10">
          <h1 className="text-white text-[40px] mx-2 font-bold">
            Unleash Your Style with Precision Cuts
          </h1>
          <p className="text-white text-[24px] lg:text-[32px] mx-2">
            Experience Unmatched Craftsmanship and Unforgettable Grooming at
            Dapper Studio’s
          </p>
          <a href="#booking">
          <button className="bg-[#d9d9d9] rounded-lg mt-10 py-2 px-3 drop-shadow">
            Book Your Appointment Now!
          </button>
        </a>
        </div>
      </div>
      <div className="flex flex-col items-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
      }}
      >
        <img className="w-[60%] max-w-[600px]" src={Logo} alt="Logo" />
        <p className="text-center text-white text-[24px] lg:text-[32px] mx-2 max-w-[1200px] mb-[80px]">
          Welcome to Dapper Studios, where grooming becomes an art. Step into
          our world of skilled barbers, meticulous attention to detail, and a
          passion for timeless style. With our expert craftsmanship and
          contemporary techniques, we are here to help you unleash your true
          style potential.
        </p>
      </div>
    </>
  );
};

export default LandingContent;
