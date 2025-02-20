import HeroSection from "../Header/HeroSection";
import OTAPlatforms from "../Pages/OTAPlatforms";
import Services from "../Pages/Services";
import Specialist from "../Pages/Specialist";
import Contact from "./Contact";
import ContactLink from "./ContactLink";
import Testimonials from "./Testimonials";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
      <Services />
      <Testimonials/>
      <ContactLink/>
      <OTAPlatforms />
     
      <Contact />
    </div>
  );
};

export default Home;
