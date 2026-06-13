import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/Splash";
import Onboarding from "../pages/Onboarding";
import PhoneLogin from "../pages/PhoneLogin";
import OTP from "../pages/OTP";
import Location from "../pages/Location";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/phone-login" element={<PhoneLogin />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/location" element={<Location />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;