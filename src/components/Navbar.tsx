import { useState, useEffect } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import logo from "../images/LOGO.png";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State for menu

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full bg-[#0416c7] z-50 shadow-md transition-transform duration-300 font-sans antialiased ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-28 md:h-44 rounded-md" />
        </Link>

        <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-wrap justify-end flex-1">
          {/* Desktop Menu Links */}
          <Link
            to="/"
            className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/product/ac/variants"
            className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
          >
            AC on Rent
          </Link>
          <Link
            to="/product/room-heater/variants"
            className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
          >
            Heater on Rent
          </Link>
          <Link
            to="/maintenance"
            className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
          >
            Maintenance
          </Link>
          <Link
            to="/ac-amc-service"
            className="px-2 lg:px-3 py-2 text-sm lg:text-base text-white hover:bg-white hover:text-[#0416c7] font-medium rounded-md transition-colors duration-200"
          >
            AC AMC Service
          </Link>
          <Link
            to="tel:+917419011364"
            className="flex items-center px-2 lg:px-3 py-2 text-sm lg:text-base text-white font-medium hover:bg-white hover:text-[#0416c7] rounded-md transition-colors duration-200"
          >
            <Phone className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
            <span className="hidden xl:inline">+917419011364</span>
          </Link>

          <Link
            to="https://wa.me/917419011364"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button
              variant="default"
              size="sm"
              className="bg-white text-[#0416c7] hover:bg-gray-100 text-sm lg:text-base whitespace-nowrap px-3 lg:px-4"
            >
              WhatsApp
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100"
              >
                <Menu className="h-5 w-5 text-[#0416c7]" />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-[#0416c7]">
              <div className="flex flex-col space-y-5 mt-10 text-lg">
                <Link
                  to="/"
                  className="text-white hover:text-gray-200 font-medium"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/about-us"
                  className="text-white hover:text-gray-200 font-medium"
                  onClick={() => setIsSheetOpen(false)}
                >
                  About
                </Link>

                <Link
                  to="/product/ac/variants"
                  className="text-white hover:text-gray-200 font-medium"
                  onClick={() => setIsSheetOpen(false)}
                >
                  AC on Rent
                </Link>

                <Link
                  to="/product/room-heater/variants"
                  className="text-white hover:text-gray-200 font-medium"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Heater on Rent
                </Link>

                <Link
                  to="/maintenance"
                  className="text-white hover:text-gray-200 font-medium"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Maintenance
                </Link>

                <Link
                  to="/ac-amc-service"
                  className="text-white hover:text-gray-200 font-medium"
                  onClick={() => setIsSheetOpen(false)}
                >
                  AC AMC Service
                </Link>

                <div className="border-t border-white/20 pt-5 mt-5">
                  <Link
                    to="tel:+917419011364"
                    className="flex items-center text-white hover:text-gray-200 font-medium mb-4"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    +917419011364
                  </Link>

                  <Link
                    to="https://wa.me/917419011364"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#0416c7] px-4 py-2 rounded-md font-semibold inline-block"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};