import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);
  const [service, setService] = useState({ featured: false });

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
              <p>Website Development</p>
              <p>Google Ads Campaigns</p>
              <p>Property Management System</p>
              <p className="mt-4">Revenue Management System</p>
              <p className="mt-4">OTA Listing Management</p>
              <p className="mt-4">Social Media Marketing</p>
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
                href="https://maps.app.goo.gl/tZvbk84Xks1YcW6G6"
                className="block text-gray-300 hover:text-white"
              >
                Lawrence Road, Near China Chowk, Lahore, Punjab, Pakistan
              </Link>
              <Link to="#" className="block text-gray-300 hover:text-white">
                Mon to Sat: 9am to 5pm
              </Link>
              <Link to="#" className="block text-gray-300 hover:text-white">
                Call at: +92 306 4312116
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Need Help?</h3>
            <nav className="space-y-2 text-sm">
              <Link to="#" className="block text-gray-300 hover:text-white">
                Help Center
              </Link>
              <Link to="#" className="block text-gray-300 hover:text-white">
                Support
              </Link>
              <Link to="#" className="block text-gray-300 hover:text-white">
                Manage Booking
              </Link>
              <Link to="#" className="block text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-300">
              Sign up to our newsletter to receive our latest offers
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#001233]"
              >
                Go Sign Up
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
