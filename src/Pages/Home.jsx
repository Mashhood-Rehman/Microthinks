import HeroSection from "../Header/HeroSection";
import OTAPlatforms from "../Pages/OTAPlatforms";
import Services from "../Pages/Services";
import Specialist from "../Pages/Specialist";
import Contact from "./Contact";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
      <Services />
      <OTAPlatforms />
      <Contact />
    </div>
  );
};

export default Home;
