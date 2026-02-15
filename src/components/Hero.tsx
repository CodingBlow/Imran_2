import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SL1 from "../images/AC-Repair-Slide1.jpg";
import SL2 from "../images/Oil-Heaters-Slide2.png";
import SL3 from "../images/Refrigrator-Service-Slide3.jpg";
import SL4 from "../images/Refrigrator-Slide4.png";
import SL5 from "../images/Repair-Nec-Slide5.jpg";
import SL6 from "../images/Split-AC-Slide6.png";

const SLIDES = [
  { image: SL1, text: "Beat the Heat and go the Chill" },
  { image: SL2, text: "Beat the chill and go the Heat" },
  { image: SL3, text: "Cooling solutions for every home" },
  { image: SL4, text: "Quality service at affordable prices" },
  { image: SL5, text: "Quality service at reasonable prices!" },
  { image: SL6, text: "We treat your home like you treat your home" },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        setIsVisible(true);
      }, 400);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsVisible(true);
    }, 300);
  };

  const { image, text } = SLIDES[currentSlide];

  return (
    <section className="relative w-full mt-20 md:mt-20 h-[40vh] md:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 139, 0.6), rgba(0, 0, 139, 0.4)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/20" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="backdrop-blur-sm bg-black/10 rounded-2xl p-4 md:p-8">
            <h1 className="text-2xl md:text-6xl font-bold mb-3 md:mb-6 drop-shadow-2xl leading-tight">
              {text}
            </h1>
            <p className="hidden md:block text-lg mb-6 drop-shadow-lg font-medium opacity-90">
              Smart Eager Aircon - Your Trusted Partner in Gurugram
            </p>
            <Link to="/product/ac/variants">
              <button className="bg-white text-blue-800 font-bold py-2 md:py-4 px-6 md:px-10 rounded-xl shadow-2xl hover:bg-blue-800 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                Rent Now
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-6 md:w-8 bg-white"
                : "w-1.5 md:w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};