import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/LOGO.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative bg-primary text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 54, 126, 0.92), rgba(20, 42, 99, 0.95)), url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Smart Eager Logo" className="h-32 mb-4 ml-6 drop-shadow-lg" />
            <p className="text-gray-200">
              Premium appliances on rent with hassle-free service and
              maintenance.
            </p>
            <p className="text-gray-200 mt-4">
              We offer service for AC rent and maintenance in all over Gurgaon
              with free delivery, free installation and same-day delivery.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/product/ac/variants"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  AC on Rent
                </Link>
              </li>
              <li>
                <Link
                  to="/product/room-heater/variants"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Oil Heater
                </Link>
              </li>
              <li>
                <Link
                  to="/maintenance"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Us</h4>

            <ul className="space-y-4 text-gray-200 text-sm">

              <li className="flex items-start gap-3">
                <span className="text-blue-300 mt-1">📧</span>
                <a href="mailto:info@smarteager.com" className="hover:text-white transition-colors">
                  info@smarteager.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-300 mt-1">📞</span>
                <div>
                  <a href="tel:+917419011364" className="hover:text-white transition-colors block">
                    +91 7419011364
                  </a>
                  <a href="tel:+917419011361" className="hover:text-white transition-colors block">
                    +91 7419011361
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-red-300 mt-1">📍</span>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-white">Head Office:</span><br/>
                    Phase-06, Hariom Kunj, Palwal Road, Sohna, Gurugram (HR) - 122103
                  </p>

                  <p>
                    <span className="font-semibold text-white">Workshop-1:</span><br/>
                    Teekli Road, Noorpur Mor, City-Badshahpur, Gurugram (HR) - 122101
                  </p>

                  <p>
                    <span className="font-semibold text-white">Workshop-2:</span><br/>
                    Phase-06, Hariom Kunj, Palwal Road, Sohna, Gurugram (HR) - 122103
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* <div className="mt-8 pt-8 text-gray-200">
          <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
          <p className="text-sm leading-relaxed">
            Sector 24, Sector 25, Sector 25A, Sector 26, Sector 26A, Sector 27,
            Sector 28, Sector 30, Sector 31, Sector 32, Sector 33, Sector 38,
            Sector 39, Sector 40, Sector 41, Sector 42, Sector 43, Sector 44,
            Sector 45, Sector 46, Sector 47, Sector 48, Sector 49, Sector 50,
            Sector 51, Sector 52, Sector 52A, Sector 53, Sector 54, Sector 55,
            Sector 56, Sector 57, Sector 58, Sector 59, Sector 60, Sector 61,
            Sector 62, Sector 63, Sector 63A, Sector 63B, Sector 64, Sector 65,
            Sector 66, Sector 67, Sector 67A, Sector 68, Sector 69, Sector 70,
            Sector 70A, Sector 71, Sector 72, Sector 73, Sector 74 Additional
            Serve Locations Sikandarpur, South City ,DLF City, Sushant Lok,
            Palam Vihar, MG Road, Ardee City, Golf Course Road, Sohna Road, or
            North Sohna area, Manesar road etc
          </p>
        </div> */}

        <div className="border-t border-gray-400/30 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; {currentYear} Smart Eager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};