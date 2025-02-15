import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navbar = [
    { name: "Home", id: "/" },
    { name: "About", id: "about-us" },
    { name: "Services", id: "service" },
    { name: "OTA Platforms", id: "Ota-Platforms" },
    { name: "Contact", id: "Contact-page" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (sectionId) => {
    const isHomePage = location.pathname === "/";

    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      navigate("/#" + sectionId);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 ease-in-out transition-all duration-300 ${
        isScrolled
          ? "bg-[#1F2456] text-white backdrop-blur-md shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div style={{ width: "100px", height: "50px" }}>
            <img
              onClick={() => handleNavigation("")}
              src="/Assets1.png"
              className="w-full h-auto cursor-pointer"
              alt="MicroThink logo image"
              height="50"
              width="100"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navbar.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className="cursor-pointer hover:text-orange-500 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 bg-white p-4">
            {navbar.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className="cursor-pointer text-center text-gray-700 hover:text-orange-500 transition-colors"
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => handleNavigation("Contact-page")}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg w-full text-center py-2"
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
