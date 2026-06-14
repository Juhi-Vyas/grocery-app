import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Location() {

  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white p-5 flex flex-col">
      
      {/* Back Button */}
      <button className="mb-8">
        <ArrowLeft size={22} />
      </button>

      {/* Location Image */}
      <div className="flex justify-center mt-4">
        <div className="text-6xl">
          <img src="/images/products/location.svg" alt="" />
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-6">
        <h1 className="text-2xl font-semibold">
          Select Your Location
        </h1>

        <p className="text-gray-500 mt-2 text-sm">
          Switch on your location to stay in tune with
          what's happening in your area
        </p>
      </div>


      {/* Form */}
      <div className="mt-12 space-y-8">

        {/* Zone */}
        <div>
          <label className="text-gray-500 text-sm">
            Your Zone
          </label>

          <select className="w-full border-b mt-2 pb-3 outline-none">
            <option>Banasree</option>
            <option>Dhaka</option>
            <option>Delhi</option>
          </select>
        </div>


        {/* Area */}
        <div>
          <label className="text-gray-500 text-sm">
            Your Area
          </label>

          <select className="w-full border-b mt-2 pb-3 outline-none">
            <option>Types of your area</option>
            <option>Urban</option>
            <option>Rural</option>
          </select>
        </div>

      </div>


      {/* Submit Button */}
      <button
  onClick={() => navigate("/login")}
  className="
    mt-auto 
    mb-10 
    bg-green-500 
    text-white 
    py-4 
    rounded-xl 
    font-medium
  "
>
  Submit
</button>

    </div>
  );
}

export default Location;