import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The most impactful feature was their upsell and cross-sell strategy. During the booking process, guests receive personalized recommendations for spa treatments, room upgrades, and dining experiences. This has led to a 15% increase in ancillary revenue and a higher average booking value.",
      author: "Elyse Curtis",
      position: "Vice President of Hospitality Marketing, Margaritaville Hotels & Resorts",
    },
    {
      quote:
        "One of the most impressive results was from their social media-exclusive promotions. By using a strategic mix of Instagram Stories, Facebook Ads, and engaging CTAs, we saw a 20% increase in direct bookings in just three months. Our engagement rates have also doubled.",
      author: "Michel Dubois",
      position: "Directeur Marketing, Grand Hôtel du Lac",
    },
    {
      quote:
        "We partnered with a hotel digital marketing agency to revamp our website, and the transformation has been nothing short of incredible. The new design is visually appealing and optimized for conversions, ensuring a seamless booking experience for our guests.",
      author: "Sophie Moreau",
      position: "Responsable Communication, Elysian Resorts & Spas",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 mb-20">
      <div className="relative  p-6 sm:p-10 md:p-16 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center text-center transition-opacity duration-700 ${
              index === current ? "opacity-100 z-10" : "opacity-0 -z-10"
            }`}
          >
            {/* Left Quote - Hidden on Small Screens */}
            <div className="hidden sm:block absolute -top-4 -left-4 sm:-top-6 sm:-left-6 text-orange-500 text-4xl sm:text-6xl">
              &ldquo;
            </div>

            {/* Testimonial Quote */}
            <p className="text-base sm:text-lg md:text-xl font-serif text-gray-800 leading-relaxed italic max-w-2xl">
              {testimonial.quote}
            </p>

            {/* Right Quote - Hidden on Small Screens */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 text-orange-500 text-4xl sm:text-6xl">
              &rdquo;
            </div>

            {/* Author Details */}
            <div className="mt-6 mb-5">
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                {testimonial.author}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {testimonial.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
