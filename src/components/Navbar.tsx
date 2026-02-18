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
    if (currentScrollY > lastScrollY && currentScrollY > 60) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }
      bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]
      backdrop-blur-md border-b border-white/10 shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Smart Eager Logo"
            className="h-14 md:h-16 object-contain drop-shadow"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 text-sm font-medium text-white rounded-full
              hover:bg-white/20 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}

          {/* PHONE */}
          <Link
            to="tel:+917419011364"
            className="ml-2 flex items-center gap-2 px-4 py-2 text-sm font-semibold
            text-white border border-white/30 rounded-full hover:bg-white/20 transition"
          >
            <Phone className="h-4 w-4" />
            +91 7419011364
          </Link>

          {/* WHATSAPP */}
          <Link
            to="https://wa.me/917419011364"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="ml-2 rounded-full bg-white text-[#203a43]
              hover:bg-gray-100 font-semibold px-5 shadow-md"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button size="icon" className="bg-white text-[#203a43] shadow-md">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-gradient-to-b from-[#0f2027] to-[#2c5364] border-l-0">
              <div className="flex flex-col mt-10 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-white px-5 py-3 rounded-lg text-lg
                    hover:bg-white/20 transition"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* MOBILE CONTACT */}
                <div className="border-t border-white/20 pt-6 mt-6 space-y-4">
                  <Link
                    to="tel:+917419011364"
                    className="flex items-center gap-3 text-white px-5 py-3 rounded-lg hover:bg-white/20"
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
                    <Button className="w-full bg-white text-[#203a43] font-semibold py-6 rounded-lg">
                      <MessageCircle className="h-5 w-5 mr-2" />
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
