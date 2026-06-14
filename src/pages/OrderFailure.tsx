import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function OrderFailure() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black/30 flex items-center justify-center px-5">

      {/* Modal */}
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6">

        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 text-gray-500"
        >
          <X size={20} />
        </button>


        {/* Failure Image */}
        <img
          src="/images/products/order-failure.svg"
          alt="Order Failed"
          className="w-40 h-40 object-contain mx-auto mt-5"
        />


        {/* Heading */}
        <h1
          className="
            text-center
            text-[28px]
            font-semibold
            text-[#181725]
            mt-8
            leading-8
          "
        >
          Oops! Order Failed
        </h1>


        {/* Description */}
        <p
          className="
            text-center
            text-gray-400
            text-sm
            mt-3
            leading-5
          "
        >
          Something went terribly wrong.
        </p>


        {/* Try Again Button */}
        <button
          onClick={() => navigate("/checkout")}
          className="
            w-full
            h-14
            mt-10
            rounded-2xl
            bg-[#53B175]
            text-white
            font-semibold
          "
        >
          Please Try Again
        </button>


        {/* Back Home */}
        <button
          onClick={() => navigate("/home")}
          className="
            w-full
            mt-5
            text-[#181725]
            font-medium
          "
        >
          Back to home
        </button>

      </div>

    </div>
  );
}

export default OrderFailure;