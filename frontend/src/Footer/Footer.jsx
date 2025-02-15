import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import emailjs from "emailjs-com";

export default function Footer() {
  const services = [
    {
      title: "Website Development",
      path: "/WebDesign",
    },
    {
      title: "Google Ads Campaigns",
      path: "/GoogleAds",
    },
    {
      title: "Property Management System",
      path: "/PropertyManagementSystem",
    },
    {
      title: "Revenue Management System",
      path: "/Services/RevenueManagement",
    },
    {
      title: "OTA Listing Management",
      path: "/Services/OTAManagement",
    },
    {
      title: "Social Media Marketing",
      path: "/SocialMediaMarketing",
    },
  ];

  const [isClient, setIsClient] = useState(false);
  const [service, setService] = useState({ featured: false });

  const [formData, setFormData] = useState({
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      email: formData.email,
    };

    emailjs
      .send(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_EMAILJS_NEWS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          toast.success("Submitted Successfully");
          setFormData({
            email: "",
          });
        },
        () => {
          setIsSubmitting(false);
          toast.error("Submission failed");
        }
      );
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchedService = { featured: true };
    setService(fetchedService);
  }, []);

  if (!isClient) return null;

  return (
    <footer className="bg-[#1F2456] text-white">
      <div className="container px-4 py-8 mx-auto">
        {/* Top Section: Logo and Social Icons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="w-32">
            <img
              src="/Assets1.png"
              height={100}
              width={100}
              alt="microthinks-logo"
              className="w-48 h-auto"
            />
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/Microthinksbyzaheer?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/company/microthinks/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/microthinks?igsh=YnJ4cGJkem9zZWtx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <div className="space-y-2 text-sm text-gray-300">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className={`block ${
                    index >= 3 ? "mt-4" : ""
                  } hover:text-gray-100 transition`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Get In Touch</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="mailto:info@microthinks.com   "
                className="block text-gray-300 hover:text-white"
              >
                info@microthinks.com
              </Link>
              <Link
                target="_blank"
                to="https://maps.app.goo.gl/tZvbk84Xks1YcW6G6"
                className="block text-gray-300 hover:text-white"
              >
                Lawrence Road, Near China Chowk, Lahore, Punjab, Pakistan
              </Link>
              <p className="block text-gray-300 hover:text-white">
                Mon to Sat: 9am to 5pm
              </p>
              <Link
                to="tel:+923064312116"
                className="block text-gray-300 hover:text-white"
              >
                Call at: +92 306 4312116
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Need Help?</h3>
            <nav className="space-y-2 text-sm">
              <Link
                to="/Contact-page"
                className="block text-gray-300 hover:text-white"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-300">
              Sign up to our newsletter to receive our latest offers
            </p>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#001233]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Signup now"}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-4 text-sm border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-gray-400">
              Copyright © MicroThinks 2024 All rights reserved
            </p>
            <div className="flex flex-wrap gap-4 text-gray-400">
              <Link to="/TermsandCondition" className="hover:text-white">
                Terms of Use
              </Link>
              <Link to="/PrivacyPolicy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
