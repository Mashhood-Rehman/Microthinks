import React, { useState } from 'react';

const ServiceItem = ({ isActive, setActive, title }) => (
  <div
    className={`p-4 rounded-lg cursor-pointer transition-all ${
      isActive ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
    }`}
    onClick={() => setActive(title)}
  >
    {title}
  </div>
);

const DigitalMarketingPage = () => {
  const [activeService, setActiveService] = useState('Digital Marketing');

  const services = [
    'Custom Website Design',
    'UI/UX Designing',
    ' Website Redesign',
    'Landing Page Design',
    'Branding and Visual Design',
    ' Content Management System (CMS) Design',
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 bg-gray-800 rounded-2xl p-4">
            {services.map((service) => (
              <ServiceItem
                key={service}
                isActive={activeService === service}
                setActive={setActiveService}
                title={service}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="h-64 rounded-2xl bg-gray-700 flex items-center justify-center">
              <h1 className="text-3xl font-bold text-white">{activeService}</h1>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 mt-6">
              <p className="text-gray-300">
                Explore our professional services in {activeService} to grow your business effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingPage;