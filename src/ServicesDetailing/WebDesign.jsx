import { useEffect } from "react";
import Webdes from "../ServicesDetailing/Webdes.jsx";

const WebDesign = () => { 
   useEffect(()=>{
    scrollTo(0,0)
   })
  return (
    <div className="min-h-80 bg-gray-900">
      {/* Navigation Badge */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Circle Image */}
          <div className="col-span-12 md:col-span-3">
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto relative">
              <img
                src="/public/HeroImage.webp"
                alt="Team"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="col-span-12 md:col-span-6 text-center">
            <h1 className="text-5xl font-bold text-white mb-8">Website Design</h1>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <a
                href="/"
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                Home
              </a>
              <span className="text-gray-500">→</span>
              <span className="text-white">Services Details</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-span-12 md:col-span-3">
            <div className="rounded-2xl overflow-hidden h-48 relative">
              <img
                src="/public/Hotel1.webp"
                alt="Office"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Render Webdes Component */}
      <Webdes />
    </div>
  );
};

export default WebDesign;
