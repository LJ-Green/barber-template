import React from "react";
import HeaderImg from "./../assets/Barbershop-Hero.jpg";
import lgScrollIcon from "./../assets/Arrow Down.svg";
import '../App.css'

const Header = () => {
  return (
    <div className="h-screen relative">
      <img className="h-full w-full object-cover -z-10 absolute" src={HeaderImg} alt="Header" />
      <img className="absolute h-[200px] scroll-icon" src={lgScrollIcon} alt="Scroll Icon" />
    </div>
  );
};

export default Header;
