import { useState, useEffect } from "react";
// import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/pp.webp",
    title: "Deluxe Hotel",
    stats: [
      { value: "41:1 %", label: "Total impression generated" },
      { value: "17:1 %", label: "Booking generated" },
      { value: "$1.12M ", label: "revenue generated" },
    ],
  },
  {
    src: "/ppp.webp",
    title: "Luxury Stay",
    stats: [
      { value: "35:1 %", label: "Growth rate in clicks" },
      { value: "22:1 %", label: "Growth in clicks through rate" },
      { value: "$900K ", label: "Increase in reservation" },
    ],
  },
  {
    src: "/Hotel5.webp",
    title: "Air Reside Hotel & Apartments",
    stats: [
      { value: "35:1%", label: "metasearch roas" },
      { value: "22:1 %", label: "display roas" },
      { value: "$2.10M", label: "revenue generated" },
    ],
  },
  {
    src: "/Hotel3.jpg",
    title: "Hotel White Season",
    stats: [
      { value: "35:1 %", label: "Impression  generated by compaigns" },
      { value: "22:1 %", label: "display roas" },
      { value: "$970K ", label: "revenue generated by compaigns" },
    ],
  },
  {
    src: "/Hotel4.jpg",
    title: "Gold Pine Hotel & Apartments",
    stats: [
      { value: "35:1 %", label: "Year-on-Year Growth" },
      { value: "22:1 %", label: "display roas" },
      { value: "$1.10M ", label: "revenue generated" },
    ],
  },
];

export default function OTAPlatforms() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovering]);

  return (
    <section id="Ota-Platforms" className="container mx-auto py-16 px-4">
      <h1 className="text-4xl text-gray-800 font-bold mb-8 font-serif">
        Featured Case Studies
      </h1>
      <div
        className="relative rounded-3xl overflow-hidden shadow-2xl w-full h-[500px] bg-gray-900"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="object-cover w-full h-full"
              loading="lazy"
              onError={() => console.error(`Image failed to load: ${image.src}`)}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-8">
              <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
              <div className="grid grid-cols-3 gap-6 text-center">
                {image.stats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-3xl text-start font-bold">{stat.value}</span>
                    <p className="text-sm uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
          onClick={() =>
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
          }
        >
          {/* <ArrowLeft className="w-6 h-6" /> */}
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
          onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
        >
          {/* <ArrowRight className="w-6 h-6" /> */}
        </button>
      </div>
    </section>
  );
}
