import { useEffect, useState } from "react";
import { Code, Compass, Palette, Rocket, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: <Palette className="w-8 h-8 " />,
    title: "Creative Design",
    description:
      "Transforming ideas into stunning visual experiences that captivate and engage your audience.",
    features: [
      "Brand-aligned aesthetics",
      "Responsive layouts",
      "Modern UI patterns",
    ],
    color: "bg-white",
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=2340",
  },
  {
    icon: <Code className="w-8 h-8 " />,
    title: "Development",
    description:
      "Building robust, scalable websites with cutting-edge technologies and best practices.",
    features: ["Clean code", "Performance optimized", "SEO friendly"],
    color: "bg-white",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2340",
  },
  {
    icon: <Compass className="w-8 h-8 " />,
    title: "UX Strategy",
    description:
      "Crafting intuitive user experiences that guide visitors effortlessly to their goals.",
    features: ["User research", "Journey mapping", "Interaction design"],
    color: "bg-white",
    image:
      "https://images.unsplash.com/photo-1553484771-047a44eee27f?auto=format&fit=crop&q=80&w=2340",
  },
  {
    icon: <Shield className="w-8 h-8 " />,
    title: "Maintenance",
    description:
      "Keeping your digital presence secure, up-to-date, and performing at its best.",
    features: ["Security updates", "Performance monitoring", "Content updates"],
    color: "bg-white",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2340",
  },
  {
    icon: <Zap className="w-8 h-8 " />,
    title: "Performance",
    description:
      "Optimizing every aspect of your website for lightning-fast performance.",
    features: ["Speed optimization", "Core Web Vitals", "CDN integration"],
    color: "bg-white",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2340",
  },
  {
    icon: <Rocket className="w-8 h-8 " />,
    title: "Growth",
    description:
      "Implementing strategies that drive traffic, engagement, and conversions.",
    features: ["SEO optimization", "Analytics", "Conversion optimization"],
    color: "bg-white",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=2340",
  },
];

function WebDesign() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
<<<<<<< HEAD:frontend/src/ServicesDetailing/WebDesign.jsx
          <h1 className="lg:text-6xl text-xl font-bold text-center mb-6">
            Digital Excellence
          </h1>
          <p className="lg:text-xl text-md text-center text-gray-300 max-w-2xl mx-auto">
=======
          <h1 className="text-6xl font-bold text-center mb-6">
Website Design          </h1>
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto">
>>>>>>> e6799705663251be32418bd7a3d54df7c09b513e:src/ServicesDetailing/WebDesign.jsx
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
                      className={`mb-4  ${
                        activeService.title === service.title
                          ? "  text-white "
                          : "text-orange-500 "
                      }`}
                    >
                      {service.icon}
                    </div>
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
                  {/* <div className={`p-3 rounded-xl ${activeService.color}`}>
                    {activeService.icon}
                  </div> */}
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

export default WebDesign;
