import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function OTP() {

    const navigate = useNavigate();

  return (
    <div className="h-screen bg-white p-5 flex flex-col">

      {/* Back button */}
      <button className="mb-10">
        <ArrowLeft size={22} />
      </button>

      {/* Heading */}
      <h1 className="text-2xl font-semibold">
        Enter your 4-digit code
      </h1>

      {/* OTP input */}
      <div className="mt-12">
        <p className="text-gray-500 text-sm mb-2">
          Code
        </p>

        <div className="flex gap-3">
          <input className="w-12 h-12 border rounded-md text-center text-lg outline-none" maxLength={1}/>
          <input className="w-12 h-12 border rounded-md text-center text-lg outline-none" maxLength={1}/>
          <input className="w-12 h-12 border rounded-md text-center text-lg outline-none" maxLength={1}/>
          <input className="w-12 h-12 border rounded-md text-center text-lg outline-none" maxLength={1}/>
        </div>
      </div>

      <div className="mt-auto flex justify-between items-center mb-10">
        <button className="text-green-500">
          Resend Code
        </button>

        <button
  onClick={() => navigate("/location")}
  className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center"
>
  <ArrowRight size={20}/>
</button>
      </div>
    </div>
  );
}

export default OTP;