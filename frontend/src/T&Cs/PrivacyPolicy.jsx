import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div>
        <div className="bg-[#1F2456] p-32">
          <h1 className="flex justify-center items-center text-3xl text-white h-32">
            Privacy Policy
          </h1>
        </div>
        <div className="bg-white p-12 flex  flex-col items-center justify-center">
          <div className="w-[60vw] space-y-2">
            <p>
              At{" "}
              <Link to="/" className="text-blue-500">
                Microthinks.com
              </Link>
              , it is our ultimate responsibility to protect your privacy. We
              adopt strict rules to ensure the protection of your private data
              throughout every phase of our project. We safeguard your critical
              facts from potential threats by using cutting-edge tools and
              industry best practices.
            </p>
            <p>
              <Link to="/" className="text-blue-500">
                Microthinks.com
              </Link>{" "}
              conducts security audits daily and monitors our systems to
              identify and address risks.
            </p>
            <p>
              Our dedicated team stays updated with all the latest safety
              protocols and makes sure that we are securing your interests
              carefully. With our emphasis on transparent communication and
              dedicated support, you can feel confident that your brand is fully
              secure at our company. Trust{" "}
              <Link to="/" className="text-blue-500">
                Microthinks.com
              </Link>{" "}
              to deliver innovative hotel marketing solutions while prioritizing
              your security at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
