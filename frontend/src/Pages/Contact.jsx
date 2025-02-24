import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

import { Phone, Mail, MapPin,Instagram ,Linkedin, Facebook } from "lucide-react";

const Contact = ({ ref }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      jobTitle: formData.jobTitle,
      company: formData.company,
      country: formData.country,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    };

    emailjs
      .send(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          toast.success("Submitted Successfully");
          setFormData({
            firstName: "",
            lastName: "",
            jobTitle: "",
            company: "",
            country: "",
            email: "",
            phone: "",
            message: ""
          });
        },
        () => {
          setIsSubmitting(false);
          toast.error("Submission failed");
        }
      );
  };

  return (
    <div
      className="min-h-screen bg-white p-6"
      ref={ref}
      id="Contact-page"
    >
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Section - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-gray-800">
            Get in touch<br />
            with our<br />
            <span className="italic">specialists today</span>
          </h2>
          
          <div className="mt-16 space-y-10">
           
             <div>
              <h3 className="font-bold  font-serif text-gray-800 text-lg mb-5">Connect With Us</h3>
              <div className="space-y-8">
                    
      <a href="tel:+923084512116" className="flex items-center space-x-4">
      <div className="bg-[#1F2456]  hover:bg-gray-800 p-3 rounded-full shadow-lg">
        <Phone className="h-5 w-5 text-white" />
      </div>
      <span className="text-gray-500 hover:text-orange-500">+92 308 4512116</span>
    </a>
    {/* Email Link */}
    <a href="mailto:info@microthinks.com" className="flex items-center space-x-4">
      <div className="bg-[#1F2456] p-3 hover:bg-gray-800 rounded-full shadow-lg">
        <Mail className="h-5 w-5 text-white" />
      </div>
      <span className="text-gray-500 hover:text-orange-500">info@microthinks.com</span>
    </a>
    {/* Location Link */}
    <a
     href="https://maps.app.goo.gl/tZvbk84Xks1YcW6G6"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-4"
    >
      <div className="bg-[#1F2456] hover:bg-gray-800  p-3 rounded-full shadow-lg">
        <MapPin className="h-5 w-5 text-white" />
      </div>
      <span className="text-gray-500 hover:text-orange-500 ">Pakistan, Lahore</span>
    </a>
  </div>
            </div>
            <div className="flex space-x-5 pt-5">
                    
                      
                      
      <a
      href="https://facebook.com" // Replace with actual Facebook link
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-orange-500 transition-transform transform hover:scale-125"
    >
      <Facebook />
    </a>
    <a
       href="https://www.linkedin.com/company/microthinks/posts/?feedView=all"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-orange-500 transition-transform transform hover:scale-125"
    >
      <Linkedin />
    </a>
    <a
    href="https://www.instagram.com/microthinks?igsh=YnJ4cGJkem9zZWtx"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 hover:text-orange-500 transition-transform transform hover:scale-125"
    >
      <Instagram />
    </a>
  </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-gray-100 p-8 rounded-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="font-medium">First Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="lastName" className="font-medium">Last Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="jobTitle" className="font-medium">Job Title <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="company" className="font-medium">Company <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium">Business Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="font-medium">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-medium">What can we help you with? <span className="text-red-500">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-[#1F2456] text-white px-6 py-3 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;