import { useEffect, useState } from "react";

const SocialMediaMarketing = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const services = [
    {
      title: "Social Media Strategy",
      description:
        "Our social media strategy services help businesses develop a tailored approach to grow their brand online. By understanding your audience and business goals, we create engaging content that drives brand awareness, increases followers, and boosts conversions across social platforms like Facebook, Instagram, Twitter, LinkedIn, and more. Our experts analyze current trends, monitor performance, and optimize strategies to achieve measurable results.",
      image: "/public/social-media-strategy.jpg",
    },
    {
      title: "Content Creation & Management",
      description:
        "We offer content creation and management services designed to attract, engage, and convert your target audience. Our team produces high-quality, relevant content for social media, including graphics, videos, blog posts, and infographics. We ensure your content is optimized for each platform, boosting engagement and driving traffic to your website. Regular management and posting help maintain an active presence and foster a connection with your followers.",
      image: "/public/content-creation.jpg",
    },
    {
      title: "Social Media Advertising",
      description:
        "Our social media advertising services help you reach a broader audience through targeted ads. We manage paid campaigns across platforms like Facebook Ads, Instagram Ads, LinkedIn Ads, and more, optimizing them for performance. Whether you're aiming for brand awareness, lead generation, or sales conversions, we create ads that speak to your audience and deliver measurable ROI.",
      image: "/public/social-ads.jpg",
    },
    {
      title: "Community Management",
      description:
        "Community management is essential for building relationships with your audience. Our services ensure that your social media communities are active, engaged, and loyal. We monitor interactions, respond to comments and messages, and foster positive conversations that align with your brand values, ensuring customer satisfaction and retention.",
      image: "/public/community-management.jpg",
    },
    {
      title: "Social Media Analytics & Reporting",
      description:
        "Tracking social media performance is key to understanding what works and what needs improvement. Our social media analytics and reporting services provide actionable insights into your campaigns. We track key performance indicators (KPIs), including engagement rates, traffic, and conversions, providing detailed reports and recommendations to enhance future strategies.",
      image: "/public/social-analytics.jpg",
    },
    {
      title: "Influencer Marketing",
      description:
        "Our influencer marketing services help connect your brand with influencers who align with your values and goals. By leveraging the trust and reach of influencers, we create authentic campaigns that resonate with your target audience. We handle everything from influencer research and outreach to campaign execution and performance tracking.",
      image: "/public/influencer-marketing.jpg",
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
          content="Social Media Marketing services to boost brand awareness, increase engagement, and drive conversions on all major social platforms."
        />
        <meta
          name="keywords"
          content="Social Media Marketing, Content Creation, Social Media Ads, Community Management, Influencer Marketing, Social Media Strategy"
        />
        <title>Social Media Marketing | Boost Your Brand Online</title>
      </head>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Left Circle Image */}
          <div className="col-span-12 md:col-span-3">
            <div className="rounded-full overflow-hidden w-48 h-48 mx-auto relative">
              <img
                src="/public/HeroImage.webp"
                alt="Social Media Marketing"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="col-span-12 md:col-span-6 text-center">
            <h1 className="text-5xl font-bold text-white mb-8">
              Social Media Marketing
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
                alt="Social Media"
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

export default SocialMediaMarketing;
