import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div id="home" className="relative w-full h-auto bg-gray-100">
      {/* Main content */}
      <div className="w-full px-4 lg:px-5 lg:pt-10 pt-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-gray-900 mt-16 sm:mt-20">
            Your Trusted Hotel Marketing Company
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
            Grow your Hotels with our Marketing Services, We elevate your
            hotel's online presence with customized solutions to enrich guest's
            experiences.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => {
              document
                .getElementById("Contact-page")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#1F2456] mt-4 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 hover:outline-orange-500"
          >
            Get Started
          </button>

          {/* Images Section */}
          <div className="relative mt-2 pb-12 sm:pb-16 lg:pb-40">
            {/* Mobile Layout - Show Only One Image */}
            <div className="block sm:hidden">
              <div className="relative w-[90%] mx-auto h-[200px]">
                <img
                  src="/Planing.webp"
                  alt="Boost visibility"
                  className="rounded-2xl shadow-2xl w-full h-full"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-2 text-xs sm:text-sm rounded-md">
                  BOOST VISIBILITY
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:block relative">
              <div className="max-w-6xl mx-auto relative h-[350px] sm:h-[450px]">
                {/* Dotted Line */}
                <svg
                  className="absolute w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="15%"
                    y1="50%"
                    x2="50%"
                    y2="35%"
                    stroke="black"
                    strokeDasharray="5,5"
                    strokeWidth="2"
                  />
                  <line
                    x1="50%"
                    y1="35%"
                    x2="85%"
                    y2="50%"
                    stroke="black"
                    strokeDasharray="5,5"
                    strokeWidth="2"
                  />
                </svg>

                {/* Left image */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-[200px] sm:w-[280px] h-[150px] sm:h-[190px] group">
                    <img
                      src="/H1.webp"
                      alt="Capture demand"
                      className="rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs rounded-full">
                      CAPTURE DEMAND
                    </div>
                  </div>
                </div>

                {/* Center image */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/3 z-20">
                  <div className="relative w-[300px] sm:w-[560px] h-[200px] sm:h-[360px] group">
                    <img
                      src="/Sitting.jpg"
                      alt="Boost visibility"
                      className="rounded-2xl shadow-2xl"
                      width={400}
                      height={300}
                    />
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm rounded-md">
                      BOOST VISIBILITY
                    </div>
                  </div>
                </div>

                {/* Right image */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-[200px] sm:w-[280px] h-[150px] sm:h-[190px] group">
                    <img
                      src="/H3.webp"
                      alt="Drive direct"
                      className="rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs rounded-full">
                      Increase Direct Bookings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background curved shape */}
          <div className="hidden sm:block absolute bottom-0 left-0 w-full h-1/4 sm:h-1/3 min-h-[120px] sm:min-h-[180px] bg-gray-200 rounded-t-[60px] sm:rounded-t-[80px]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
