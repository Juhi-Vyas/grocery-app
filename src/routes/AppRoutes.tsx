import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../pages/Splash";
import Onboarding from "../pages/Onboarding";
import PhoneLogin from "../pages/PhoneLogin";
import OTP from "../pages/OTP";
import Location from "../pages/Location";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderSuccess from "../pages/OrderSuccess";
import Favorites from "../pages/Favorites";
import Account from "../pages/Account";
import OrderFailure from "../pages/OrderFailure";

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
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/account" element={<Account />} />
        <Route path="/order-failure" element={<OrderFailure />} />
        <Route path="/demo" element={<Home />} />


      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;