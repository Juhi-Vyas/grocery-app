import { Eye, EyeOff, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen bg-white p-6 flex flex-col">

      {/* Logo */}
      <div className="flex justify-center mt-10">
        <span className="text-4xl">🥕</span>
      </div>

      {/* Heading */}
      <div className="mt-12">
        <h1 className="text-3xl font-semibold">
          Sign Up
        </h1>

        <p className="text-gray-500 mt-2">
          Enter your credentials to continue
        </p>
      </div>


      {/* Username */}
      <div className="mt-8">
        <label className="text-gray-500 text-sm">
          Username
        </label>

        <input
          type="text"
          className="w-full border-b py-3 outline-none"
        />
      </div>


      {/* Email */}
      <div className="mt-5">
        <label className="text-gray-500 text-sm">
          Email
        </label>

        <div className="flex items-center border-b">
          <input
            type="email"
            className="w-full py-3 outline-none"
          />

          <Check 
            size={18}
            className="text-green-500"
          />
        </div>
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
            {
              showPassword 
              ? <EyeOff size={20}/>
              : <Eye size={20}/>
            }
          </button>
        </div>
      </div>


      {/* Terms */}
      <p className="text-xs text-gray-500 mt-5">
        By continuing you agree to our{" "}
        <span className="text-green-500">
          Terms of Service
        </span>
        {" "}and{" "}
        <span className="text-green-500">
          Privacy Policy
        </span>
      </p>


      {/* Sign Up Button */}
      <button className="mt-8 bg-green-500 text-white py-4 rounded-xl font-medium">
        Sign Up
      </button>


      {/* Login Link */}
      <div className="flex justify-center mt-6 text-sm">
        <p>
          Already have an account?
        </p>

        <Link
          to="/login"
          className="text-green-500 ml-1"
        >
          Login
        </Link>
      </div>

    </div>
  );
}

export default Signup;