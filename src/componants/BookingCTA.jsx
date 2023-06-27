import React from "react";
import ctaImg from "./../assets/Call to action image.jpg";

const BookingCTA = () => {
  const backgroundStyle = {
    backgroundImage: `url(${ctaImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="text-center bg-black py-10" style={backgroundStyle}>
      <div className="flex flex-col items-center">
        <p className="text-white text-[20px] mx-8">
          Ready to step up your grooming game? Book your appointment today and
          discover the art of transformative style at Dapper Studios. Experience
          the difference that passion, expertise, and exceptional service can
          make. Join our community of satisfied clients and embrace a new level
          of confidence and refinement.
        </p>
        <a href="#booking">
          <button className="bg-[#d9d9d9] rounded-lg mt-10 py-2 px-3 drop-shadow">
            Book Your Appointment!
          </button>
        </a>
      </div>
    </div>
  );
};

export default BookingCTA;
