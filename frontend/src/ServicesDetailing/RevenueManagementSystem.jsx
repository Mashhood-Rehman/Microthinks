import { useEffect } from "react";

const GoogleAdsManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div className="text-gray-900 relative w-full bg-gray-100">
      {/* Hero Section */}
      <div className="w-full px-4 lg:px-5 lg:pt-10 pt-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-gray-900 mt-16 sm:mt-20">
           Revenue Management System
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
          We optimize your hotel's revenue strategy with data-driven insights, ensuring dynamic pricing, higher occupancy, and increased profitability.
          </p>

          {/* Images Section */}
          <div className="relative mt-2 pb-12 sm:pb-16 lg:pb-32">
            {/* Mobile Layout */}
            <div className="block sm:hidden">
              <div className="relative mt-5 w-[90%] mx-auto h-[200px]">
                <img
                  src="/15.webp"
                  alt="Boost visibility"
                  className="rounded-2xl shadow-2xl w-full h-full"
                />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-2 text-xs sm:text-sm rounded-md">
                Dynamic Pricing
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:block relative">
              <div className="max-w-6xl mx-auto relative h-[350px] sm:h-[450px]">
                {/* Dotted Line */}
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
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

                {/* Left Image */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-[200px] sm:w-[280px] h-[150px] sm:h-[190px]">
                    <img src="/PM3.webp" alt="Capture demand" className="rounded-lg shadow-xl" />
                    <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs rounded-full">
                    Maximize Revenue
                    </div>
                  </div>
                </div>

                {/* Center Image */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/3 z-20">
                  <div className="relative w-[500px] sm:w-[400px] h-[500px] sm:h-[340px]">
                    <img
                      src="/17.gif"
                      alt="Boost visibility"
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm rounded-md">
                    Dynamic Pricing
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                  <div className="relative w-[200px] sm:w-[280px] h-[150px] sm:h-[190px]">
                    <img src="/RM2.webp" alt="Drive direct" className="rounded-lg shadow-xl" />
                    <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs rounded-full">
                    Increase Profitability
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full z-0 overflow-hidden">
  <svg
    className="w-full h-auto"
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#E5E7EB" /* This is gray-200 */
      d="M0,192L48,192C96,192,192,192,288,208C384,224,480,256,576,234.7C672,213,768,139,864,133.3C960,128,1056,192,1152,218.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
</div>
          </div>
     
        
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-serif  text-gray-800">  Smart Revenue Management </h1>
          {/* About Section */}
          <div className="bg-white  p-6 md:p-10  mb-8   ">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src="/PM4.webp"
                  alt="Google Ads Management"
                  className="rounded-xl w-full h-[400px] object-cover  transition-transform duration-300"
                />
              </div>
              <div className="w-full md:w-1/2  mt-16 font-serif space-y-6">
                <h2 className="text-3xl sm:text-4xl   text-gray-900">
                Maximize Revenue with Smart Pricing
                </h2>
                <p className="text-gray-600  italic leading-relaxed">
                Our Revenue Management System utilizes cutting-edge technology and data analytics to optimize your hotel's pricing strategies. By analyzing demand patterns, market trends, and competitor rates, we ensure dynamic pricing that attracts more guests while maximizing profitability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 md:p-10 mb-8">
  <div className="flex flex-col md:flex-row-reverse gap-8">
    <div className="w-full md:w-1/2">
      <img
        src="/16.gif"
        alt="Google Ads Management"
        className="rounded-xl object-cover w-full h-auto transition-transform duration-300"
      />
    </div>
    <div className="w-full md:w-1/2 mx-5  mt-16 font-serif space-y-6">
      <h2 className="text-3xl sm:text-4xl text-gray-900">
      Data-Driven Insights for Higher Profitability
      </h2>
      <p className="text-gray-600  italic leading-relaxed">
      We harness real-time data and predictive analytics to make informed pricing decisions that align with your hotel's goals. Our Revenue Management System continuously adjusts rates based on demand fluctuations, seasonal trends, and guest behavior, ensuring you capture the highest possible revenue.
      </p>
    </div>
  </div>
</div>

      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-200 to-blue-900/80 py-12 lg:py-12 px-6 lg:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-800">
            Explore the newest hospitality tech trends and insights from Team Microthink.
          </h2>
          <button className="bg-gray-900 text-white px-6 py-3 text-lg rounded-full hover:bg-gray-800 transition-colors">
            Subscribe Today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleAdsManagement;
