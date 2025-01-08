import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "./Header/Navbar";
import WebDesign from "./ServicesDetailing/WebDesign";
const tabs = [
  "Hotel marketing services",
  "Hotel's direct booking",
  "Custom Web Design",
  "Revenue Management System",
  "OTA Listing Management",
];

export default function Specialist() {
  const [activeTab, setActiveTab] = useState("Hotel marketing services");
  const [mounted, setMounted] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Hotel marketing services":
        return <WebDesign />;
      case "Hotel’s direct booking":
        return <WebDesign />;
      case "Custom Web Design":
        return <WebDesign />;
      case "Revenue Management System":
        return <WebDesign />;
      case "OTA Listing Management":
        return <WebDesign />;
      default:
        return null;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div id="about-us" className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <Navbar />

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-md leading-tight">
          Giving the best just for you
        </h1>
      </motion.div>

      {/* Navbar buttons for tabs */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 rounded-lg font-medium ${
              activeTab === tab ? "bg-[#1F2456] text-white" : " text-gray-700"
            }  hover:bg-[#1F2456] hover:text-white transition-colors duration-300`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Display the content based on activeTab */}
      <div className="p-5 rounded-lg ">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2"
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>

        {/* Right Content Section */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif mb-4">
              Boost Your Hotel’s Success with Our Expert Marketing Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Microthinks.com, we elevate your hotel’s online visibility with
              innovative and customized solutions to strengthen guest
              satisfaction. We leverage our skills in hotel marketing services,
              providing digital tactics for the hospitality industry. Our
              mission is to increase your hotel’s digital footprint and
              profitability through our tailored hotel promotion strategies.
            </p>
          </motion.div>

          {/* Second Content Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-serif mb-4">
              Empowering the Hospitality Industry with Targeted Digital Tactics
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We focus on advanced analytics and market insights to recognize
              opportunities that will assist your hotel in capturing attention
              in a competitive landscape.
            </p>
          </motion.div>

          {/* Call to Action Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1F2456] text-white p-6 rounded-xl mt-8"
          >
            <h3 className="text-xl font-serif mb-3">Grow your Hotels</h3>
            <p className="mb-4">
              Microthinks.com offers essential approaches for increasing hotel
              sales and marketing.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("Contact-page")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="py-2 px-4 outline outline-1 text-white group hover:rounded-3xl duration-300 hover:outline-orange-500 flex items-center gap-2"
            >
              Book Now <ArrowRight className="w-4 h-4 text-orange-500" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
