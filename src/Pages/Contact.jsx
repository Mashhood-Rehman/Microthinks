import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Link,
  Linkedin,
} from "lucide-react";
import toast from "react-hot-toast";

const Contact = ({ ref }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.process.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.process.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.process.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          toast("Submitted Successfully");
          setFormData({
            email: "",
            name: "",
            phone: "",
            message: "",
          });
        },
        () => {
          setIsSubmitting(false);
          toast("Submission failed");
        }
      );
  };

  return (
    <div
      className="min-h-screen mt-20 bg-white p-6"
      ref={ref}
      id="Contact-page"
    >
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="space-y-6">
  <h2 className="text-3xl font-bold text-[#1F2456]">Get In Touch</h2>
  <p className="text-gray-500">
    MicroThinks drives hotel growth with tailored digital solutions and
    expert support to maximize your online presence and revenue.
  </p>
  <div className="space-y-4">
    {/* Phone Link */}
    <a href="tel:+923084512116" className="flex items-center space-x-4">
      <div className="bg-blue-100  hover:bg-orange-300 p-3 rounded-full shadow-lg">
        <Phone className="h-5 w-5 text-[#1F2456]" />
      </div>
      <span className="text-gray-500 hover:text-orange-500">+92 308 4512116</span>
    </a>
    {/* Email Link */}
    <a href="mailto:info@microthinks.com" className="flex items-center space-x-4">
      <div className="bg-blue-100 p-3 hover:bg-orange-300 rounded-full shadow-lg">
        <Mail className="h-5 w-5 text-[#1F2456]" />
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
      <div className="bg-blue-100 hover:bg-orange-300  p-3 rounded-full shadow-lg">
        <MapPin className="h-5 w-5 text-[#1F2456]" />
      </div>
      <span className="text-gray-500 hover:text-orange-500 ">Pakistan, Lahore</span>
    </a>
  </div> 
  {/* Social Media Icons */}
  <div className="flex space-x-4 pt-6">
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

        {/* Form Section */}
        <form
          className="bg-[#1F2456] rounded-xl shadow-xl p-8 space-y-4 border border-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none hover:shadow-md transition"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none hover:shadow-md transition"
              required
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none hover:shadow-md transition"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none hover:shadow-md transition"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full rounded-full flex items-center justify-center bg-orange-500  text-white py-3 px-6 shadow-lg hover:from-orange-600 hover:to-orange-500 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-transform transform hover:scale-105"
            disabled={isSubmitting}
          >
            {/* <PaperPlane className="mr-2 h-5 w-5" /> */}
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
