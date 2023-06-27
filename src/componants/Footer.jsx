import React from "react";
import Logo from "./../assets/Dapper Studio Logo.png";
import TwitterIcon from "./../assets/square-twitter.svg";
import FacebookIcon from "./../assets/square-facebook.svg";
import InstagramIcon from "./../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col items-center" id="footer">
      <img className="w-[200px]" src={Logo} alt="Logo" />
      <h1 className="text-white text-[40px] font-bold">Contact Us</h1>
      <div className="flex flex-col w-[300px] mt-10">
        <input
          className="bg-[#2e2e2e] mb-2 p-2 border-2 rounded-lg"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-[#2e2e2e] mb-2 p-2 border-2 rounded-lg"
          type="text"
          placeholder="Email"
        />
        <input
          className="bg-[#2e2e2e] mb-2 p-2 border-2 rounded-lg h-[100px]"
          type="text"
          placeholder="Message"
        />
        <button className="bg-[#d9d9d9] rounded-lg py-2 px-3 drop-shadow">
          Submit
        </button>
      </div>
      <div>
        <h1 className="text-[40px] text-white my-10 font-bold text-center">
          Follow Us
        </h1>
        <div className="flex justify-between">
          <button className="bg-[#d9d9d9] rounded-[50%]">
            <img className="w-12 p-3" src={TwitterIcon} alt="Icon" />
          </button>
          <button className="bg-[#d9d9d9] rounded-[50%]">
            <img className="w-12 p-3" src={InstagramIcon} alt="Icon" />
          </button>
          <button className="bg-[#d9d9d9] rounded-[50%]">
            <img className="w-12 p-3" src={FacebookIcon} alt="Icon" />
          </button>
        </div>
      </div>
      <div className="my-20">
      <ul className="text-white text-[20px] flex justify-center">
          <li className="mx-2">
            <a href="#home">Home</a>
          </li>
          <li className="mx-2">
            <a href="#features">Features</a>
          </li>
          <li className="mx-2">
            <a href="#services">Services</a>
          </li>
          <li className="mx-2">
            <a href="#booking">Book In</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
