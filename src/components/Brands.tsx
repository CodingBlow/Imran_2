import React from "react";

import mitsubishiElectric from "../images/Mits.png";
import oGeneral from "../images/general.png";
import mitsubishiHeavy from "../images/Heavy.png";
import daikin from "../images/daikin.png";
import carrier from "../images/Career.png";
import lg from "../images/lg.png";
import blueStar from "../images/star.png";
import voltas from "../images/voltas.png";
import godrej from "../images/gordrej.png";
import samsung from "../images/samsung.png";

export const Brands: React.FC = () => {
  const brands = [
    { name: "Mitsubishi Electric", logo: mitsubishiElectric },
    { name: "O General", logo: oGeneral },
    { name: "Mitsubishi Heavy", logo: mitsubishiHeavy },
    { name: "Daikin", logo: daikin },
    { name: "Carrier", logo: carrier },
    { name: "LG", logo: lg },
    { name: "Blue Star", logo: blueStar },
    { name: "Voltas", logo: voltas },
    { name: "Godrej", logo: godrej },
    { name: "Samsung", logo: samsung },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <p className="text-blue-600 font-semibold tracking-wide uppercase">
          Our Offers
        </p>
        <h2 className="text-4xl font-bold mt-2 mb-12">
          Most Trusted Brands
        </h2>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center justify-items-center">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.logo}
              alt={brand.name}
              className="h-14 object-contain"
            />
          ))}
        </div>

      </div>
    </section>
  );
};