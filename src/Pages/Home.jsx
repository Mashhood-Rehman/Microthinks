import HeroSection from "../Header/HeroSection";
import OTAPlatforms from "../Pages/OTAPlatforms";
import Services from "../Pages/Services";
import Specialist from "../Specialist";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
      <Services />
      <OTAPlatforms />
    </div>
  );
};

export default Home;
