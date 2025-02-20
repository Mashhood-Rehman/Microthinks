import React from 'react';
import { useNavigate } from "react-router-dom";

const ContactLink = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/Contact');
  };

  return (
    <div className="relative w-full min-h-[500px] bg-gray-50 p-8 md:p-16 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10">
          <h2 className="font-serif text-gray-800 text-4xl md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
            Let's get started!
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-lg">
            Start capturing demand with compelling digital ads and metasearch campaigns from one single platform.
          </p>
          
          <button
              onClick={() => {
                document
                  .getElementById("Contact-page")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#1F2456] text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 hover:outline-orange-500"
            >
              Contact Us{" "}
              {/* <ChevronRight className="w-5 h-5 inline-block ml-2 transform group-hover:translate-x-1 transition-transform" /> */}
            </button>
        </div>

        {/* Right Content - Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-[2rem] overflow-hidden">
            <img 
              src="/Contact.webp"
              alt="Person jumping with excitement"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              BOOKED DIRECT
            </div>
            <div className="absolute bottom-8 left-8 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              FOUND ONLINE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLink;
