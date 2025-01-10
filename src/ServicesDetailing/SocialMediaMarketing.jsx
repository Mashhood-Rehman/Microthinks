import { useState } from "react";
import {BarChart,  Rocket,Edit3,PieChart,TrendingUp,MessageCircle} from "lucide-react";

const services = [
  {
    icon: <PieChart className="w-8 h-8 " />,
    title: "Strategy & Planning",
    description:
      "Developing thoughtful strategies and comprehensive plans to drive growth and ensure long-term success.",
      features: [
        "Goal Setting",
        "Market Research",
        "Actionable Plans",
        "Targeting Insights",
      ],

    image:
      "/Planing.webp",
  },
  {
    icon: <Edit3 className="w-8 h-8 " />,
    title: "Content Creation",
    description:
      "Crafting engaging, original content tailored to captivate your audience and elevate your brand’s voice.",
      features: [
        "Creative Writing",
        "Visual Design",
        "Brand Messaging",
        "Engaging Media",
      ],
   
    image:
      "content.webp",
      
  },
  {
    icon: <TrendingUp className="w-8 h-8 " />,
    title: "Paid Ads Campaigns",
    description:
      "Maximizing reach and ROI through targeted paid ad campaigns that drive results and boost visibility",
      features: [
        "Targeted Ads",
        "Budget Optimization",
        "ROI Tracking",
        "Audience Reach",
      ],
      
   
    image:
      "Ads.webp",
  },
  {
    icon: <MessageCircle className="w-8 h-8 " />,
    title: "Audience Engagement",
    description:
      "Building meaningful connections with your audience through interactive content and consistent, engaging communication.",
      features: [
        "Interactive Content",
        "Community Building",
        "Real-time Interaction",
        "Brand Loyalty",
      ],
      
   
    image:
      "AudienceEngagement.webp",
  },
  {
    icon: <Rocket className="w-8 h-8 " />,
    title: "Brand Growth Campaigns",
    description:
      "Designing impactful campaigns to enhance brand visibility, foster loyalty, and accelerate business growth.",
      features: [
        "Market Expansion",
        "Customer Acquisition",
        "Brand Awareness",
        "Creative Campaigns",
      ],
      
   
    image:
      "digital Marketing.webp",
  },
  {
    
    icon: <BarChart className="w-8 h-8" />,
    title: "Analytics & Tracking",
    description:
      "Leveraging data-driven insights to track performance, optimize strategies, and drive measurable results for growth.",
      features: [
        "Data Insights",
        "Performance Metrics",
        "Conversion Tracking",
        "Continuous Optimization",
      ],
      
   
    image:
      "Analytics.webp",
  },
];

function SocialMediaMarketing() {
  const [activeService, setActiveService] = useState(services[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleServiceChange = (service) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveService(service);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-6xl font-bold text-center mb-6">
            Digital Excellence
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
            Crafting exceptional digital experiences through innovative design
            and cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Service Selection */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceChange(service)}
                  className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300
                    ${
                      activeService.title === service.title
                        ? "bg-orange-500 text-white"
                        : "bg-[#1F2456] text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  <div className="relative z-10">
                    <div className={`mb-4 ${activeService.title === service.title
                      ? " text-white"
                        : "text-orange-500"
                    }`}>{service.icon}</div>
                    
                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div
            className={`transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="rounded-2xl overflow-hidden bg-[#1F2456]">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${activeService.color}`}>
                    {activeService.icon}
                  </div>
                  <h2 className="text-3xl font-bold">{activeService.title}</h2>
                </div>
                <p className="text-gray-300 text-lg mb-8">
                  {activeService.description}
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 px-8 py-4 rounded-xl font-medium bg-orange-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaMarketing;
