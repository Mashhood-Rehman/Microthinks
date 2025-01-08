import { Route, Routes } from "react-router-dom";

import WebDesign from "./ServicesDetailing/WebDesign";
import Home from "./Pages/Home";
import GoogleAdsManagement from "./ServicesDetailing/GoogleAdsManagement";
import SocialMediaMarketing from "./ServicesDetailing/SocialMediaMarketing";
import PropertyManagementSystem from "./ServicesDetailing/PropertyManagementSystem";
import RevenueManagementSystem from "./ServicesDetailing/RevenueManagementSystem";
import OTAListingManagement from "./ServicesDetailing/OTAListingManagement";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WebDesign" element={<WebDesign />} />
        <Route
          path="/Google Ads Management"
          element={<GoogleAdsManagement />}
        />
        <Route
          path="/SocialMediaMarketing"
          element={<SocialMediaMarketing />}
        />
        <Route
          path="/PropertyManagementSystem"
          element={<PropertyManagementSystem />}
        />
        <Route
          path="/RevenueManagementSystem
"
          element={<RevenueManagementSystem />}
        />
        <Route
          path="/OTAListingManagement"
          element={<OTAListingManagement />}
        />
      </Routes>
    </div>
  );
};

export default App;
