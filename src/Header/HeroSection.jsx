"use client";

import CircleLogo from "./CircleLogo";

const HeroSection = () => {
  return (
    <div id="/" className="relative w-full h-[60vh] lg:h-screen ">
      <div
        className="absolute top-0 left-0 w-full h-full bg-fixed bg-center bg-cover custom-img"
        style={{ backgroundImage: "url('/HeroImage.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      </div>

      <div className="relative z-10  text-center flex justify-center items-center h-full  text-white px-10">
        <div className=" flex flex-col items-center ">
          <h1 className="mb-5 flex      text-xl   font-semibold   lg:text-5xl">
            Grow your Hotels with our Marketing
            <span className="text-orange-500 mt-1  ml-1"> Services</span>
          </h1>
          <p className="mb-5 scroll-m-20 text-md   tracking-tight">
            We elevate your hotel&apos;s online presence with customized
            solutions to enrich guest&apos;s experiences.
          </p>

          <button
            onClick={() => {
              document
                .getElementById("Contact-page")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="outline px-3 py-2 w-32 outline-1 text-white  group hover:rounded-3xl duration-300 hover:outline-orange-500"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* CircleLogo in the Bottom-Right */}
      <div className=" hidden lg:block absolute bottom-5 right-5">
        <CircleLogo />
      </div>
    </div>
  );
};

export default HeroSection;
