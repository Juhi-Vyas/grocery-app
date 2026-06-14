import {
  X,
  ChevronRight,
  CreditCard,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

function Checkout() {
  const navigate = useNavigate();

  const totalPrice = useCartStore(
    (state) => state.getTotalPrice()
  );

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  return (
    <div className="min-h-screen bg-black/20 flex items-end">

      {/* Bottom Sheet */}
      <div
        className="
          w-full
          bg-white
          rounded-t-3xl
          p-6
          animate-slide-up
        "
      >

        {/* Header */}
        <div className="flex justify-between items-center">

          <h1 className="text-2xl font-semibold">
            Checkout
          </h1>

          <button
            onClick={() => navigate(-1)}
            className="text-gray-500"
          >
            <X size={22}/>
          </button>

        </div>


        <hr className="mt-5"/>


        {/* Delivery */}
        <div className="py-5 flex justify-between items-center border-b">

          <span className="text-gray-400">
            Delivery
          </span>

          <div className="flex items-center gap-2">

            <span className="font-medium">
              Select Method
            </span>

            <ChevronRight size={18}/>

          </div>

        </div>


        {/* Payment */}
        <div className="py-5 flex justify-between items-center border-b">

          <span className="text-gray-400">
            Payment
          </span>

          <div className="flex items-center gap-2">

            <CreditCard
              size={18}
              className="text-blue-500"
            />

            <ChevronRight size={18}/>

          </div>

        </div>


        {/* Promo */}
        <div className="py-5 flex justify-between items-center border-b">

          <span className="text-gray-400">
            Promo Code
          </span>

          <div className="flex items-center gap-2">

            <span className="font-medium">
              Pick discount
            </span>

            <ChevronRight size={18}/>

          </div>

        </div>


        {/* Total */}
        <div className="py-5 flex justify-between items-center">

          <span className="text-gray-400">
            Total Cost
          </span>

          <div className="flex items-center gap-2">

            <span className="text-lg font-bold">
              ${totalPrice.toFixed(2)}
            </span>

            <ChevronRight size={18}/>

          </div>

        </div>


        {/* Terms */}
        <p className="text-[12px] text-gray-400 leading-5">

          By placing an order you agree to our{" "}

          <span className="text-black font-medium">
            Terms
          </span>

          {" "}and{" "}

          <span className="text-black font-medium">
            Conditions
          </span>

        </p>


        {/* Place Order */}
        <button
          onClick={() => {
            clearCart();
            navigate("/order-success");
          }}
          className="
            w-full
            mt-8
            h-16
            rounded-2xl
            bg-[#53B175]
            text-white
            font-semibold
            text-lg
          "
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;