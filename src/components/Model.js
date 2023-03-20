import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import suyash from "../assets/suyash.jpg";
import solar from "../assets/solar.jpg";
import "./Model.css";

const Model = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modelText, setModelText] = useState("Model 3");
  const [scrollCount, setScrollCount] = useState(0);


  

  useEffect(() => {
    let timer;

    const handleScroll = () => {
      setIsScrolled(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsScrolled(false);
      }, 300);

      if (window.pageYOffset > 0 && window.pageYOffset < window.innerHeight) {
        setModelText("Model X");
      } else if (window.pageYOffset >= window.innerHeight) {
        setModelText("Solar Panel");
      } else {
        setModelText("Model 3");
      }
    };

    

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [scrollCount]);

  return (
    <div>
      <div
        className={`fixed inset-x-0 top-[15%] text-center transition-all duration-500 ${
          isScrolled
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <h1 className="text-4xl font-bold"> {modelText}</h1>
        <p className="text-sm p-2">
          {" "}
          Order Online for{" "}
          <a href="https://www.tesla.com/support/taking-delivery?redirect=no">
            <span className="underline underline-offset-4 hover:cursor-pointer">
              Touchles Delivery
            </span>
          </a>
        </p>
      </div>
      <div
        className={`flex flex-col items-center justify-center text-sm lg:flex-row fixed bottom-[10%] w-screen z-50 transition-all duration-500 ${
          isScrolled
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <div className="aligner">
          <a href="https://www.tesla.com/modelx/design">
            <button className="rounded-md bg-[#393c41] w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white custom-order">
              Custom Order
            </button>
          </a>
          <a href="https://www.tesla.com/modelx/design">
            <button className="rounded-md bg-[#f4f4f4] w-96 lg:w-64 h-10 lg:mx-4 mt-2 existing-inventory">
              Existing Inventory
            </button>
          </a>
        </div>
      </div>
      <div
        className={`flex justify-center animate-bounce absolute inset-x-0 bottom-[3%] transition-all duration-500 ${
          isScrolled
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        <FiChevronDown size={24} />
      </div>
      <img
        className="h-screen bg-cover bg-center object-right w-full "
        src={suyash}
      />
      <div>
        <img
          className="h-screen bg-cover bg-center object-right w-full  "
          src={solar}
        />
      </div>
    </div>
  );
};

export default Model;
