import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SL1 from "../images/AC-Repair-Slide1.jpg";
import SL2 from "../images/Oil-Heaters-Slide2.png";
import SL3 from "../images/Refrigrator-Service-Slide3.jpg";
import SL4 from "../images/Refrigrator-Slide4.png";
import SL5 from "../images/Repair-Nec-Slide5.jpg";
import SL6 from "../images/Split-AC-Slide6.png";

const sliderImages = [SL1, SL2, SL3, SL4, SL5, SL6];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % sliderImages.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sliderTexts = [
    "Beat the Heat and go the Chill",
    "Beat the chill and go the Heat",
    "Cooling solutions for every home",
    "Quality service at affordable prices",
    "Quality service at reasonable prices!",
    "We treat your home like you treat your home",
  ];

  return (
    <>
      {/* Laptop View */}
      <div className="hidden md:block relative h-[80vh] w-full mt-20 overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 139, 0.5), rgba(0, 0, 139, 0.3)), url(${sliderImages[currentImage]})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl mb-6 font-bold drop-shadow-lg">
              {sliderTexts[currentImage]}
            </h1>
            <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-800 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105">
              <Link to="/">Rent Now</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative h-[25vh] w-full mt-10 overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 139, 0.5), rgba(0, 0, 139, 0.3)), url(${sliderImages[currentImage]})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl mb-4 font-bold drop-shadow-lg">
              {sliderTexts[currentImage]}
            </h1>
            <button className="bg-white text-blue-800 font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-800 hover:text-white transition-all duration-500 ease-in-out transform hover:scale-105">
              <Link to="/">Rent Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
