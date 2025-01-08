import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ScrollToTop = () => {
    scroll.scrollToTop();
  };

  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about-us" },
    { name: "Services", id: "service" },
    { name: "OTA Platforms", id: "Ota-Platforms" },
    { name: "Contact", id: "Contact-page" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 ease-in-out transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black backdrop-blur-md shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div style={{ width: "100px", height: "50px" }}>
            <img
              onClick={ScrollToTop}
              src="/Logo.webp"
              className="w-full h-auto cursor-pointer"
              alt="MicroThink logo image"
              height="50"
              width="100"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navbar.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-orange-500 transition-colors"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          <button
            className="md:hidden"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden flex items-center justify-between p-4 bg-white">
            <div className="flex flex-col space-y-4">
              {navbar.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-center text-gray-700 hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </ScrollLink>
              ))}

              {location.pathname === "/" ? (
                <ScrollLink
                  to="Contact-page"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <div className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg w-full text-center py-2">
                    Get Started
                  </div>
                </ScrollLink>
              ) : (
                <Link to="/Contact">
                  <div className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg w-full text-center py-2">
                    Get Started
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
