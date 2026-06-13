import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PhoneLogin() {

  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white p-5 flex flex-col">
      
      {/* Back Button */}
      <button className="mb-10">
        <ArrowLeft size={22} />
      </button>

      {/* Heading */}
      <h1 className="text-2xl font-se~mibold">
        Enter your mobile number
      </h1>

      {/* Input Section */}
      <div className="mt-12">
        <p className="text-gray-500 text-sm mb-2">
          Mobile Number
        </p>

        <div className="flex items-center border-b pb-3">
          <span className="text-xl mr-3">🇮🇳</span>

          <span className="mr-3 text-gray-700">
            +91
          </span>

          <input
            type="tel"
            placeholder="9876543210"
            className="outline-none flex-1"
          />
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-auto mb-10">
        <button
  onClick={() => navigate("/otp")}
  className="bg-green-500 text-white w-14 h-14 rounded-full 
  flex items-center justify-center"
>
  <ArrowRight size={20}/>
</button>
      </div>
    </div>
  );
}

export default PhoneLogin;