import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white p-6 flex flex-col">

      {/* Logo */}
      <div className="flex justify-center mt-10">
        <span className="text-4xl">
          <img src="images/products/Group.svg" alt="" />
        </span>
      </div>

      {/* Heading */}
      <div className="mt-20">
        <h1 className="text-3xl font-semibold">
          Login
        </h1>

        <p className="text-gray-500 mt-2">
          Enter your email and password
        </p>
      </div>


      {/* Email */}
      <div className="mt-10">
        <label className="text-gray-500 text-sm">
          Email
        </label>

        <input
          type="email"
          className="w-full border-b py-3 outline-none"
        />
      </div>


      {/* Password */}
      <div className="mt-5">
        <label className="text-gray-500 text-sm">
          Password
        </label>

        <div className="flex items-center border-b">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full py-3 outline-none"
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
          </button>
        </div>
      </div>


      {/* Forgot Password */}
      <button className="self-end mt-4 text-sm">
        Forgot Password?
      </button>


      {/* Login Button */}
      <button
  onClick={() => navigate("/home")}
  className="
    mt-8
    bg-green-500
    text-white
    py-4
    rounded-xl
    font-medium
  "
>
  Log In
</button>


      {/* Signup Link */}
      <div className="flex justify-center mt-8 text-sm">
        <p>
          Don't have an account?
        </p>

        <Link
          to="/signup"
          className="text-green-500 ml-1"
        >
          Signup
        </Link>
      </div>

    </div>
  );
}

export default Login;