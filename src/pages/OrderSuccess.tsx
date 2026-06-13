import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">

      {/* Success Icon */}
      <div className="text-8xl">
        ✅
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-8">
        Your Order has been accepted
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-center mt-4">
        Your items have been placed and are on their way
        to being processed.
      </p>

      {/* Track Order Button */}
      <button
        className="
          mt-12
          w-full
          bg-green-500
          text-white
          py-4
          rounded-2xl
          font-medium
        "
      >
        Track Order
      </button>

      {/* Back Home */}
      <button
        onClick={() => navigate("/home")}
        className="
          mt-4
          text-black
          font-medium
        "
      >
        Back to home
      </button>

    </div>
  );
}

export default OrderSuccess;