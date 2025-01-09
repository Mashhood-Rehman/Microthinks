import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../Header/Navbar";

const tabs = [
  "Hotel marketing services",
  "Hotel's direct booking",
  "Custom Web Design",
  "Revenue Management System",
  "OTA Listing Management",
];

const tabContent = [
  {
    pic: "/pp.webp",
    tabName: "Hotel marketing services",
    title: "Boost Your Hotel’s Success with Our Expert Marketing Solutions",
    description:
      "At Microthinks.com, we elevate your hotel’s online visibility with innovative and customized solutions to strengthen guest satisfaction. We leverage our skills in hotel marketing services, providing digital tactics for the hospitality industry. Our mission is to increase your hotel’s digital footprint and profitability through our tailored hotel promotion strategies.",
  },
  {
    pic: "/ppp.webp",
    tabName: "Hotel's direct booking",
    title: "Maximize Your Hotel's Direct Bookings",
    description:
      "Our tailored strategies help hotels increase direct bookings, reducing reliance on OTAs while improving profitability and customer relationships. We provide innovative marketing techniques and optimize booking platforms for greater conversion rates.",
  },
  {
    pic: "/pp.webp",
    tabName: "Custom Web Design",
    title: "Transform Your Hotel’s Online Presence with a Custom Web Design",
    description:
      "Our custom web design services focus on creating user-friendly, aesthetically pleasing, and functional websites tailored to your hotel's unique brand identity, driving more traffic and conversions.",
  },
  {
    pic: "/ppp.webp",
    tabName: "Revenue Management System",
    title: "Optimize Your Hotel’s Pricing with Revenue Management Systems",
    description:
      "We help hotels maximize revenue through dynamic pricing strategies that adapt to market demand and optimize room rates for maximum profitability.",
  },
  {
    pic: "/pp.webp",
    tabName: "OTA Listing Management",
    title: "Increase Visibility with OTA Listing Management",
    description:
      "Our OTA Listing Management services ensure your hotel is listed correctly and consistently across various online travel agencies, improving visibility and driving more bookings.",
  },
];

export default function Specialist() {
  const [activeTab, setActiveTab] = useState("Hotel marketing services");
  const [mounted, setMounted] = useState(false);

  const renderContent = () => {
    const activeContent = tabContent.find(
      (content) => content.tabName === activeTab
    );
    if (activeContent) {
      return (
        <div className="  space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=" grid grid-cols-1 lg:grid-cols-2  items-center  justify-between gap-6"
          >
            {/* Left Column: Image */}
            <div className=" w-full h-full">
              <img
                width={500}
                src={activeContent.pic}
                alt={activeContent.tabName}
                className=" h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right Column: Title & Description */}
            <div className="">
              <h2 className="text-xl w-72 lg:w-96  lg:text-3xl font-serif mb-4">
                {activeContent.title}
              </h2>
              <p className="text-gray-600 text-sm w-72 lg:w-96 leading-relaxed mb-4">
                {activeContent.description}
              </p>
            </div>
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
      );
    }
    return null;
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
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`  border px-2 py-1 border-gray-500  rounded-full text-md lg:text-md ${
              activeTab === tab ? "bg-[#1F2456] text-white" : " text-gray-800"
            }  hover:bg-[#1F2456] hover:text-white transition-colors duration-300`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-lg">
        <motion.div
          className=" "
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
}
