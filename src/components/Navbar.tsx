import { useState, useEffect } from "react";
import { Menu, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import logo from "../images/LOGO.png";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About" },
    { to: "/product/ac/variants", label: "AC on Rent" },
    { to: "/product/room-heater/variants", label: "Heater on Rent" },
    { to: "/maintenance", label: "Maintenance" },
    { to: "/ac-amc-service", label: "AC AMC Service" },
  ];

  return (
    <nav
      className={`fixed top-0 font-mono w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 backdrop-blur-sm z-50 shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
          <img
            src={logo}
            alt="Smart Eager Logo"
            className="h-20 md:h-20 drop-shadow-lg"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 xl:px-4 py-2 text-sm xl:text-base text-white font-medium hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105"
            >
              {link.label}
            </Link>
          ))}

          {/* Phone Number */}
          <Link
            to="tel:+917419011364"
            className="flex items-center gap-2 px-3 xl:px-4 py-2 text-sm xl:text-base text-white font-semibold hover:bg-white/20 rounded-lg transition-all duration-200 border border-white/30"
          >
            <Phone className="h-4 w-4" />
            <span>+91 7419011364</span>
          </Link>

          {/* WhatsApp Button */}
          <Link
            to="https://wa.me/917419011364"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100 border-0 shadow-md"
              >
                <Menu className="h-6 w-6 text-blue-600" />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-gradient-to-b from-blue-700 to-blue-800 border-l-0">
              <div className="flex flex-col space-y-1 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-white hover:bg-white/20 font-medium px-4 py-3 rounded-lg transition-all text-lg"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Contact Section */}
                <div className="border-t border-white/20 pt-6 mt-6 space-y-3">
                  <Link
                    to="tel:+917419011364"
                    className="flex items-center gap-3 text-white hover:bg-white/20 font-semibold px-4 py-3 rounded-lg transition-all"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Phone className="h-5 w-5" />
                    +91 7419011364
                  </Link>

                  <Link
                    to="https://wa.me/917419011364"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold shadow-md flex items-center justify-center gap-2 py-6">
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp
                    </Button>
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
