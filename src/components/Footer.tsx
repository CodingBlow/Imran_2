import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/LOGO.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.88)), url("https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <img
            src={logo}
            alt="Smart Eager"
            className="h-20 md:h-24 mb-4 object-cover"
          />
          <p className="text-gray-200 leading-relaxed">
            Premium appliances on rent with professional installation,
            maintenance and same-day support across Gurugram.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-200">
            {[
              { name: "AC on Rent", link: "/product/ac/variants" },
              {
                name: "Room Heater on Rent",
                link: "/product/room-heater/variants",
              },
              { name: "AC Maintenance", link: "/maintenance" },
              { name: "AC AMC Services", link: "/ac-amc-service" },
            ].map((service, i) => (
              <li key={i}>
                <Link
                  to={service.link}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="text-blue-400">›</span>
                  <span>{service.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
          <div className="space-y-3 text-gray-200 text-sm">
            <p>📧 info@smarteager.com</p>
            <p>📞 +91 7419011364</p>
            <p>📞 +91 7419011361</p>
          </div>
        </div>

        {/* LOCATION */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Location</h4>
          <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
            <p>
              <span className="font-semibold text-white">Head Office:</span>
              <br />
              Phase-06, Hariom Kunj, Palwal Road,
              <br />
              Sohna, Gurugram (HR) – 122103
            </p>

            <p>
              <span className="font-semibold text-white">Workshop-1:</span>
              <br />
              Teekli Road, Noorpur Mor,
              <br />
              City-Badshahpur, Gurugram (HR) – 122101
            </p>

            <p>
              <span className="font-semibold text-white">Workshop-2:</span>
              <br />
              Phase-06, Hariom Kunj, Palwal Road,
              <br />
              Sohna, Gurugram (HR) – 122103
            </p>
          </div>

          {/* SOCIAL ICONS */}
          {/* <div className="flex gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-blue-400">
              📸
            </a>
            <a href="#" className="hover:text-blue-400">
              🐦
            </a>
            <a href="#" className="hover:text-blue-400">
              💼
            </a>
            <a href="#" className="hover:text-blue-400">
              📘
            </a>
          </div> */}
        </div>
      </div>

      {/* BOTTOM BLUE BAR */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex gap-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about-us" className="hover:underline">
              About Us
            </Link>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </Link>
          </div>

          <p className="text-white/90">
            © {currentYear} Smart Eager. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
