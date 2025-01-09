import { useEffect, useState } from "react";
  const GoogleAdsManagement= () => {
    const services = [
      {
        title: "Custom Website Design",
        description:
          "Designing unique and visually appealing websites tailored to a client’s brand involves creating a site that reflects their identity and meets their goals. This includes understanding their brand's colors, typography, and overall tone, as well as considering their target audience and purpose, such as selling products or showcasing services. The process starts with planning the site structure and designing layouts that are easy to navigate, visually striking, and responsive across all devices. Elements like high-quality images, custom graphics, consistent branding, and engaging features such as sliders or animations help make the website stand out. The focus is on creating a user-friendly experience while ensuring accessibility for all users. Finally, testing and feedback ensure the design aligns perfectly with the client’s vision and business objectives.",
        image: "/public/webdesign.jpg",
      },
      {
        title: "UI/UX Design",
        description:
          "UI/UX design focuses on creating intuitive, visually appealing, and user-friendly digital experiences. User Interface (UI) design emphasizes the look and feel of a product, including colors, typography, buttons, and layout, ensuring it is visually cohesive and attractive. On the other hand, User Experience (UX) design is about usability and functionality, ensuring that the product is easy to navigate, meets user needs, and provides a seamless experience. Together, UI/UX design involves understanding the target audience, planning the user journey, and designing interfaces that are not only beautiful but also practical and engaging. The ultimate goal is to make digital interactions enjoyable and efficient for users, aligning with both their expectations and business objectives.",
        image: "/public/uiuxx.jpg",
      },
      {
        title: "CMS",
        description:
          "We specialize in WordPress, a powerful and user-friendly Content Management System (CMS) designed to create and manage professional websites effortlessly. WordPress provides a wide range of customizable themes and plugins, making it ideal for blogs, portfolios, business websites, or informational platforms. Our expertise ensures that your WordPress site is visually appealing, responsive, and optimized for performance. Whether you’re looking to showcase your brand, share content, or build a professional online presence, we tailor WordPress solutions to align perfectly with your goals.",
        image: "/public/wordpress.jpg",
      },
      {
        title: "Website Maintenance Services",
        description:
          "Website maintenance services ensure that your website remains functional, secure, and up-to-date. These services include regular updates to the website’s software, plugins, and themes, as well as monitoring for potential issues like broken links or downtime. Maintenance also involves optimizing website performance, improving loading speeds, and ensuring compatibility across devices and browsers. Security measures, such as backups and protection against malware or hacking attempts, are also a critical part of maintenance. By keeping your website fresh, secure, and fully operational, website maintenance helps provide a seamless experience for users and supports your business goals.",
        image: "/public/websitemant.png",
      },
      {
        title: "Web Content",
        description:
          "Website content services focus on creating, managing, and optimizing the text, images, and multimedia that make up your website. These services ensure your content is engaging, informative, and aligned with your brand's voice and goals. From crafting compelling headlines and blog posts to writing clear and concise service descriptions, website content services help communicate your message effectively. They also include SEO optimization, ensuring your content ranks well on search engines and attracts the right audience. By delivering high-quality, audience-focused content, these services enhance user engagement, build credibility, and support your website's overall success.",
        image: "/public/content.png",
      },
      {
        title: "SEO-Optimized Web Design",
        description:
          "Our SEO-optimized website design services focus on creating visually appealing websites that are built to perform well on search engines. We design user-friendly layouts that not only reflect your brand but also enhance navigation and user experience. By integrating SEO best practices into the design process, such as fast-loading pages, mobile responsiveness, clean coding, and proper meta-tagging, we ensure your website ranks higher on search engine results. With attention to keyword placement and structured content, our designs attract organic traffic, improve visibility, and help your business stand out in a competitive digital landscape.",
        image: "/public/seo.png",
      },
    ];
    const [activeService, setActiveService] = useState(services[0]);
    useEffect(() => {
      scrollTo(0, 0);
    }, []);
    return (
      <div className="min-h-80 bg-gray-900">
        {/* Navigation Badge */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2"></div>
  
        {/* Main Content */}
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="grid grid-cols-12 gap-8">
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
              <h1 className="text-5xl font-bold text-white mb-8">
                Website Design
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
                  src="/public/Hotel1.webp"
                  alt="Office"
                  className="object-cover w-[100%] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Render Webdes Component */}
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
                    className="w-[100%] h-[60vh]"
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
  
  export default GoogleAdsManagement;
  

