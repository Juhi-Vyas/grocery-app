import { useNavigate } from "react-router-dom";

function OrderFailure() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">

      {/* Failure Icon */}
      <div className="text-8xl">
        ❌
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-8 text-center">
        Oops! Order Failed
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-center mt-4">
        Something went wrong while placing your order.
        Please try again.
      </p>

      {/* Try Again */}
      <button
        onClick={() => navigate("/checkout")}
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
        Try Again
      </button>

      {/* Back Home */}
      <button
        onClick={() => navigate("/home")}
        className="
          mt-4
          font-medium
        "
      >
        Back To Home
      </button>

    </div>
  );
}

export default OrderFailure;