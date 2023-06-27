import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AboutPopUp from "./../assets/arrow-turn-down-solid.svg";
import SpecialistOne from './../assets/Barber 1.jpg'
import SpecialistTwo from './../assets/Barber 2.jpg'
import SpecialistThree from './../assets/Barber 3.jpg'
import SpecialistFour from './../assets/Barber 4.jpg'

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [specialists, setSpecialists] = useState([
    {
      name: "John Doe",
      image: SpecialistOne,
      about:
        "With years of experience in the art of barbering, John brings a keen eye for detail and a passion for creating impeccable fades and perfectly groomed beards. His expertise and friendly demeanor make every visit a pleasant and memorable experience.",
      isAboutVisible: false,
      isDatePickerVisible: false,
    },
    {
      name: "George Smith",
      image: SpecialistTwo,
      about:
        "A skilled barber with a flair for classic haircuts and creative styling. Whether you're looking for a sophisticated gentleman's cut or a chic and trendy style, George’s expertise and attention to detail will leave you feeling confident and satisfied.",
      isAboutVisible: false,
      isDatePickerVisible: false,
    },
    {
      name: "Michael Johnson",
      image: SpecialistThree,
      about:
        "Meet Michael, our master barber with a passion for the art of traditional straight razor shaves. With his expert hand and attention to detail, he provides a luxurious and indulgent shaving experience that leaves your skin feeling smooth and rejuvenated. Sit back, relax, and let Michael transport you to a world of old-school grooming excellence.",
      isAboutVisible: false,
      isDatePickerVisible: false,
    },
    {
      name: "Sam Reynolds",
      image: SpecialistFour,
      about:
        "our visionary hairstylist with a knack for creative and trendsetting hairstyles. With his artistic approach and deep understanding of current fashion trends, Sam can bring your hair dreams to life. Whether it's a bold colour transformation or a unique haircut, trust Sam to deliver a personalized and fashion-forward look that reflects your individual style.",
      isAboutVisible: false,
      isDatePickerVisible: false,
    },
    
  ]);

  const toggleAboutVisibility = (index) => {
    setSpecialists((prevState) =>
      prevState.map((specialist, i) =>
        i === index
          ? { ...specialist, isAboutVisible: !specialist.isAboutVisible }
          : specialist
      )
    );
  };

  const toggleDatePickerVisibility = (index) => {
    setSpecialists((prevState) =>
      prevState.map((specialist, i) =>
        i === index
          ? { ...specialist, isDatePickerVisible: !specialist.isDatePickerVisible }
          : specialist
      )
    );
  };

  const handleDateChange = (date, index) => {
    setSpecialists((prevState) =>
      prevState.map((specialist, i) =>
        i === index ? { ...specialist, selectedDate: date } : specialist
      )
    );
  };

  return (
    <div className="bg-[#2C2C2C] pb-20" id="booking">
      <h1 className="text-center text-white py-10 text-[40px] font-bold">
        Meet & Book your Specialist
      </h1>
      {specialists.map((specialist, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center md:justify-center mb-10">
          <img className="w-[300px] xl:w-[400px] rounded-xl" src={specialist.image} alt={`Staff${index + 1}`} />
          <div className="flex flex-col justify-center max-w-[300px] md:ml-10">
            <p className="text-[60px] text-center text-white blur-sm font-bold mt-10">
              {specialist.name}
            </p>
            <div
              className="cursor-pointer flex justify-between items-center border-b-4 text-left my-10 text-[32px] text-white"
              onClick={() => toggleAboutVisibility(index)}
            >
              About
              <img className="w-[20px]" src={AboutPopUp} alt="about arrow" />
            </div>
            {specialist.isAboutVisible && (
              <p
                className="text-center text-[20px] text-white transition-opacity duration-500"
                style={{ opacity: specialist.isAboutVisible ? 1 : 0 }}
              >
                {specialist.about}
              </p>
            )}
            <button
              className="bg-[#d9d9d9] rounded-lg my-10 py-2 px-3 drop-shadow"
              onClick={() => toggleDatePickerVisibility(index)}
            >
              Book
            </button>
            {specialist.isDatePickerVisible && (
              <div className="flex justify-between">
                <DatePicker
                  className="cursor-pointer bg-[#d9d9d9] w-[150px] rounded-lg mt-2 py-2 px-3 drop-shadow text-center"
                  selected={specialist.selectedDate}
                  onChange={(date) => handleDateChange(date, index)}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a date"
                />
                <button className="bg-[#56ed3b] rounded-lg mt-2 mb-10 py-2 px-3 drop-shadow">Confirm</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Booking;