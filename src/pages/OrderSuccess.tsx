import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white px-8 flex flex-col items-center justify-center">

      {/* Success Image */}
      <img
        src="/images/products/order-success.svg"
        alt="Order Accepted"
        className="
          w-56
          h-56
          object-contain
        "
      />

      {/* Title */}
      <h1
        className="
          mt-10
          text-[28px]
          font-semibold
          text-center
          leading-9
          text-[#181725]
        "
      >
        Your Order has been accepted
      </h1>

      {/* Description */}
      <p
        className="
          mt-4
          text-center
          text-gray-400
          text-[16px]
          leading-6
        "
      >
        Your items have been placed and are on
        their way to being processed
      </p>

      {/* Track Order Button */}
      <button
        className="
          w-full
          h-16
          mt-16
          rounded-2xl
          bg-[#53B175]
          text-white
          text-lg
          font-semibold
        "
      >
        Track Order
      </button>

      {/* Back Home */}
      <button
        onClick={() => navigate("/home")}
        className="
          mt-6
          text-[#181725]
          text-[16px]
          font-medium
        "
      >
        Back to home
      </button>

    </div>
  );
}

export default OrderSuccess;