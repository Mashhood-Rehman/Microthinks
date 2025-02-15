<<<<<<< HEAD:frontend/src/ServicesDetailing/SocialMediaMarketing.jsx
import { useState } from "react";
import {
  BarChart,
  Rocket,
  Edit3,
  PieChart,
  TrendingUp,
  MessageCircle,
} from "lucide-react";

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

    image: "/Planing.webp",
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

    image: "content.webp",
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

    image: "Ads.webp",
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

    image: "AudienceEngagement.webp",
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

    image: "digital Marketing.webp",
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

    image: "Analytics.webp",
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
=======
import { useEffect } from "react";

const SocialMediaMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const workProcessSteps = [
    {
      step: "01",
      title: "Strategic Planning",
      description: "We analyze your business goals, target audience, and competitors to develop a data-driven social media marketing strategy tailored to your objectives. This ensures your brand reaches the right audience with impactful and engaging content."
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "Our experts set up your social media campaigns with precise audience targeting, engaging content, and proper tracking to ensure optimal performance and measurable results."
    },
    {
      step: "03",
      title: "Optimization & Testing",
      description: "We conduct continuous A/B testing, audience refinement, and performance optimization to maximize your social media campaign's engagement, reach, and ROI."
    },
    {
      step: "04",
      title: "Analysis & Scaling",
      description: "We regularly analyze campaign performance and strategically scale successful social media campaigns to enhance engagement and expand your brand’s market presence."
    }
  ];
>>>>>>> e6799705663251be32418bd7a3d54df7c09b513e:src/ServicesDetailing/SocialMediaMarketing.jsx

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD:frontend/src/ServicesDetailing/SocialMediaMarketing.jsx
      <div className="relative">
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="lg:text-6xl text-xl  font-bold text-center mb-6">
            Digital Excellence
          </h1>
          <p className="lg:text-xl text-md text-center text-gray-300 max-w-2xl mx-auto">
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
                    <div
                      className={`mb-4 ${
                        activeService.title === service.title
                          ? " text-white"
                          : "text-orange-500"
                      }`}
                    >
                      {service.icon}
                    </div>

                    <h3 className="text-lg font-semibold mb-2">
                      {service.title}
=======
      <div className="container mx-auto px-4 pt-32 pb-16 h-[70vh]">
        <div className=" gap-8 items-center ">
          <div className="col-span-12 md:col-span-6 text-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold mb-8">
              Social Media Marketing
              </h1>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <a href="/" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
                  Home
                </a>
                <span className="text-gray-500">→</span>
                <span className="text-white">Services Details</span>
              </div>
            </div>
          </div>
          {/* <div className="col-span-12 md:col-span-3">
          <img
                src="/public/gads.svg"
                alt="Team"
              />
            <div className="rounded-2xl overflow-hidden h-48 relative group">
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">         
          {/* About Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-xl mb-12 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row  gap-8">
              <div className="w-full md:w-1/2">
             
                <img
                  src="/public/socialmedia.png"
                  alt="Google Ads Management"
                  className="rounded-xl object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">
                Our Approach to Social Media Marketing
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxe">
                  We combine innovative strategies with years of expertise to deliver social media campaigns that achieve outstanding results. Through detailed audience research, content planning, and platform-specific strategies, we maximize ROI by ensuring your brand connects with the right audience and drives measurable engagement. From crafting compelling posts to optimizing campaigns for reach and performance, we manage every aspect of your social media marketing with precision. Our commitment to continuous improvement ensures your campaigns consistently perform at their best, 
                  helping you grow your audience, increase engagement, and achieve your business goals effectively.</p>
                
                </div>
              </div>
            </div>
          </div>

          {/* Work Process Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Our Work Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workProcessSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connection Line */}
                  {index < workProcessSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/4 right-0 w-full h-0.5 bg-gray-200 transform translate-x-1/2">
                      <div className="absolute right-0 w-3 h-3 bg-gray-200 transform rotate-45 -translate-y-1/2"></div>
                    </div>
                  )}
                  
                  {/* Card Content */}
                  <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10 h-full group">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center text-2xl font-bold rounded-lg group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                      {step.title}
>>>>>>> e6799705663251be32418bd7a3d54df7c09b513e:src/ServicesDetailing/SocialMediaMarketing.jsx
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD:frontend/src/ServicesDetailing/SocialMediaMarketing.jsx
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
=======
          <div className="bg-gray-900 rounded-2xl p-12 text-white text-center transform hover:scale-[1.02] transition-transform duration-300">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Social Media?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Let our experts create and manage high-performing social media marketing campaigns that deliver exceptional results and drive growth for your business

</p>
              <button className="bg-orange-500 text-white px-10 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-colors duration-300 inline-flex items-center group shadow-lg hover:shadow-xl">
                <span>Start Your Campaign</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
>>>>>>> e6799705663251be32418bd7a3d54df7c09b513e:src/ServicesDetailing/SocialMediaMarketing.jsx
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaMarketing;
