import { useEffect } from "react";

const GoogleAdsManagement = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <span className="w-6 h-6 text-blue-500">🌐</span>,
      title: "Global Reach",
      description: "Connecting billions of people worldwide",
    },
    {
      icon: <span className="w-6 h-6 text-red-500">👥</span>,
      title: "Diverse Teams",
      description: "Bringing together talent from all backgrounds",
    },
    {
      icon: <span className="w-6 h-6 text-yellow-500">💡</span>,
      title: "Innovation",
      description: "Pushing the boundaries of technology",
    },
    {
      icon: <span className="w-6 h-6 text-green-500">📈</span>,
      title: "Sustainable Growth",
      description: "Building for a better future",
    },
  ];

  const stats = [
    { value: "150+", label: "Countries Served" },
    { value: "100K+", label: "Employees Worldwide" },
    { value: "3.5B+", label: "Daily Searches" },
    { value: "400+", label: "Products & Services" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-12 gap-8 items-center">
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
            <h1 className="text-5xl font-bold mb-8">Google Ads Management</h1>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <a
                href="/"
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                Home
              </a>
              <span className="text-gray-500">→</span>
              <span>Services Details</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-span-12 md:col-span-3">
            <div className="rounded-2xl overflow-hidden h-48 relative">
              <img
                src="/public/Hotel1.webp"
                alt="Office"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">         
          {/* About Content with Image */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 relative aspect-video md:aspect-square">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Google Campus"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Google was founded in 1998 by Larry Page and Sergey Brin while
                  they were Ph.D. students at Stanford University. Together, they
                  built one of the most influential companies globally.
                </p>
                <p className="text-gray-600">
                  Today, Google leads the development of products such as the
                  Android OS, Google Chrome, and various hardware and AI
                  innovations.
                </p>
              </div>
            </div>
          </div>
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4 p-3 bg-gray-50 rounded-lg w-fit group-hover:bg-gray-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
            Start reaching your target audience today with data-driven Google Ads campaigns
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center group">
            Get Started
            {/* < className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
          </button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default GoogleAdsManagement;
