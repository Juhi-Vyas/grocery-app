import { useState } from "react";

import { useNavigate } from "react-router-dom";

function PhoneLogin() {
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Top Image */}
      <div>
        <img
          src="/images/products/signin.svg"
          alt="Sign In"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-7 mt-8">

        {/* Heading */}
        <h1 className="text-[28px] font-semibold leading-9 text-[#181725]">
          Get your groceries
          <br />
          with nectar
        </h1>


        {/* Phone Input */}
        <div className="mt-8">
          <div className="flex items-center gap-3 border-b pb-4">

            {/* Country Select */}
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="
                bg-transparent
                outline-none
                text-[15px]
                font-medium
                cursor-pointer
              "
            >
              <option value="+91">
                🇮🇳 +91
              </option>

              <option value="+1">
                🇺🇸 +1
              </option>

              <option value="+44">
                🇬🇧 +44
              </option>

              <option value="+971">
                🇦🇪 +971
              </option>

              <option value="+880">
                🇧🇩 +880
              </option>

              <option value="+61">
                🇦🇺 +61
              </option>

              <option value="+81">
                🇯🇵 +81
              </option>
            </select>


            {/* Phone Number */}
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter mobile number"
              className="
                flex-1
                outline-none
                text-[16px]
                placeholder:text-gray-400
              "
            />

          </div>

          <button
  onClick={() => navigate("/login")}
  className="
    w-full
    mt-8
    h-14
    rounded-xl
    bg-[#53B175]
    text-white
    font-semibold
  "
>
  Continue
</button>
        </div>


        {/* Divider */}
        <p className="text-center text-gray-400 text-sm mt-10">
          Or connect with social media
        </p>


        {/* Google Button */}
        <button
          className="
            w-full
            h-16
            mt-8
            rounded-xl
            bg-[#5383EC]
            text-white
            font-medium
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <img
            src="/images/products/google.svg"
            alt="Google"
            className="w-5 h-5"
          />

          Continue with Google
        </button>


        {/* Facebook Button */}
        <button
          className="
            w-full
            h-16
            mt-4
            rounded-xl
            bg-[#4A66AC]
            text-white
            font-medium
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <img
            src="/images/products/facebook.svg"
            alt="Facebook"
            className="w-5 h-5"
          />

          Continue with Facebook
        </button>

      </div>
    </div>
  );
}

export default PhoneLogin;