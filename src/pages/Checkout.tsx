import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function Checkout() {
  const navigate = useNavigate();

  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="min-h-screen bg-white p-5">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-center">Checkout</h1>

      {/* Delivery */}
      <div className="mt-10 border-b pb-4 flex justify-between">
        <span className="text-gray-500">Delivery</span>

        <span>Select Method</span>
      </div>

      {/* Payment */}
      <div className="mt-6 border-b pb-4 flex justify-between">
        <span className="text-gray-500">Payment</span>

        <span>💳 Card</span>
      </div>

      {/* Promo */}
      <div className="mt-6 border-b pb-4 flex justify-between">
        <span className="text-gray-500">Promo Code</span>

        <span>Pick Discount</span>
      </div>

      {/* Total */}
      <div className="mt-8 flex justify-between text-xl font-semibold">
        <span>Total Cost</span>

        <span>${totalPrice.toFixed(2)}</span>
      </div>

      {/* Terms */}
      <p className="text-xs text-gray-500 mt-8">
        By placing an order you agree to our Terms and Conditions.
      </p>

      {/* Place Order */}
      <button
        onClick={() => {
          clearCart();
          navigate("/order-success");
        }}
        className="
          mt-8
          w-full
          bg-green-500
          text-white
          py-4
          rounded-2xl
          font-medium
        "
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
