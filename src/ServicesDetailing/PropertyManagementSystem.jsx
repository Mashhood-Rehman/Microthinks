import { useEffect, useState } from "react";

const PropertyManagementSystem = () => {
  const services = [
    {
      title: "Property Listing Management",
      description:
        "Our property listing management service ensures that your property listings are effectively managed across multiple platforms. From updating property details to uploading photos and managing availability, we streamline the process to ensure your listings are always up-to-date and optimized to attract the right tenants or buyers.",
      image: "/public/property-listing.jpg",
    },
    {
      title: "Tenant & Lease Tracking",
      description:
        "With our tenant and lease tracking service, property owners can efficiently manage their tenants' information, lease dates, payments, and renewals. We offer an easy-to-use platform that keeps all lease data in one place, making it simple to track lease expirations, rent payments, and tenant requests.",
      image: "/public/tenant-tracking.jpg",
    },
    {
      title: "Maintenance Management",
      description:
        "We provide comprehensive maintenance management services, allowing property managers to quickly respond to tenant maintenance requests and keep properties in top condition. Our system helps track maintenance issues, schedule repairs, and manage vendor information to ensure efficient and timely resolutions.",
      image: "/public/maintenance-management.jpg",
    },
    {
      title: "Accounting & Financial Reporting",
      description:
        "Our accounting and financial reporting services help property managers easily track income, expenses, and generate detailed financial reports. Whether it's rent collection, utility billing, or property-related expenses, our system provides transparency and keeps you informed with accurate financial data.",
      image: "/public/financial-reporting.jpg",
    },
    {
      title: "Online Rent Payments",
      description:
        "We offer secure and convenient online rent payment options for tenants. Our platform enables tenants to pay rent on time using various payment methods, while property managers can easily track and manage payments, reducing administrative work and improving cash flow.",
      image: "/public/online-payments.jpg",
    },
    {
      title: "Communication Tools",
      description:
        "Effective communication between property managers, tenants, and vendors is crucial. Our communication tools allow for seamless messaging, notifications, and alerts. Whether it's a maintenance update, lease renewal reminder, or rent payment notice, we help you stay connected and keep everyone informed.",
      image: "/public/communication-tools.jpg",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  // Scroll to top when component mounts
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-80 bg-gray-900">
      {/* SEO-friendly Meta Tags */}
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Comprehensive Property Management System services for efficient tenant tracking, property maintenance, accounting, and more."
        />
        <meta
          name="keywords"
          content="Property Management System, Tenant Tracking, Property Listings, Maintenance Management, Online Rent Payments, Financial Reporting, Property Management Software"
        />
        <title>
          Property Management System | Efficient Solutions for Property Managers
        </title>
      </head>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Circle Image */}
          <div className="col-span-12 md:col-span-3">
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto relative">
              <img
                src="/PMS1.jpg"
                alt="Property Management"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="col-span-12 md:col-span-6 text-center">
            <h1 className="text-5xl font-bold text-white mb-8">
              Property Management System
            </h1>
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
                src="/PMS2.jpeg"
                alt="Property Office"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {/* Titles Section (Left) */}
          <div className="col-span-3">
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(service)}
                  className={`block w-full text-left px-4 py-2 rounded-md transition-colors duration-300 ${
                    activeService.title === service.title
                      ? "bg-blue-900 text-white"
                      : "bg-gray-800 text-white hover:bg-gray-600"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content Section (Right) */}
          <div className="col-span-9">
            <div className="space-y-6">
              {/* Image */}
              <div className="rounded-lg h-auto object-cover overflow-hidden shadow-lg">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-[60vh]"
                />
              </div>

              {/* Description and Button */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 mb-6">
                  {activeService.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagementSystem;
