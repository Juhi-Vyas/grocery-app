import { useNavigate } from "react-router-dom";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/images/products/onboarding.svg"
        alt="Onboarding"
        className="
          absolute 
          inset-0 
          w-full 
          h-full 
          object-cover 
          object-center
        "
      />

      {/* Gradient Overlay (makes text visible like Figma) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center px-6">

        {/* Logo */}
        <img
          src="/images/products/Group.svg"
          alt="Logo"
          className="w-10 h-10 mb-3 invert brightness-0"
        />

        {/* Heading */}
        <h1 className="text-white text-[34px] font-semibold leading-[40px] text-center">
          Welcome
          <br />
          to our store
        </h1>

        {/* Description */}
        <p className="mt-3 text-white/80 text-[12px] text-center">
          Get your groceries in as fast as one hour
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/phone-login")}
          className="
            mt-8
            w-full
            max-w-[300px]
            h-[56px]
            bg-[#53B175]
            rounded-[18px]
            text-white
            text-[16px]
            font-semibold
            shadow-lg
          "
        >
          Get Started
        </button>

      </div>
    </div>
  );
}

export default Onboarding;