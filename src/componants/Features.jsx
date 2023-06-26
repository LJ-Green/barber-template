import React from "react";
import NumberOne from "./../assets/No-1.png";
import NumberTwo from "./../assets/No-2.png";
import NumberThree from "./../assets/No-3.png";
import NumberFour from "./../assets/No-4.png";

const Features = () => {
  return (
    <div className="features-content">
      <h1 className="text-white text-center text-[40px] py-10">Features</h1>
      <div>
        <div className="flex flex-col items-center">
          <img className="w-[100px] absolute" src={NumberOne} />
          <div className="mt-[80px]">
            <h2 className="text-[32px] text-white text-center">Experts</h2>
            <p className="text-[20px] text-white text-center mx-10 mb-10">
              Our team of highly trained barbers is dedicated to mastering their
              craft, bringing years of experience and creativity to every
              haircut and grooming service we provide.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[100px] absolute" src={NumberTwo} />
          <div className="mt-[80px]">
            <h2 className="text-[32px] text-white text-center">
              Personalized Service
            </h2>
            <p className="text-[20px] text-white text-center mx-10 mb-10">
              We understand that each client is unique, with distinct
              preferences and desired outcomes. We take the time to listen,
              consult, and tailor our services to suit your individual needs,
              ensuring an exceptional experience every time.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[100px] absolute" src={NumberThree} />
          <div className="mt-[80px]">
            <h2 className="text-[32px] text-white text-center">
              Precision and Perfection
            </h2>
            <p className="text-[20px] text-white text-center mx-10 mb-10">
              From classic cuts to the latest trends, our barbers pay meticulous
              attention to detail, delivering precise cuts, sharp lines, and
              immaculate finishes. Your satisfaction is our top priority.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[100px] absolute" src={NumberFour} />
          <div className="mt-[80px]">
            <h2 className="text-[32px] text-white text-center">
              Premium Products
            </h2>
            <p className="text-[20px] text-white text-center mx-10 mb-10">
              We believe that quality goes hand in hand with style. That's why
              we exclusively use premium grooming products that nourish your
              hair, beard, and skin, ensuring you leave our barbershop looking
              and feeling your best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
