import { Minus, Plus, X } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

function Cart() {
  const items = useCartStore((state) => state.items);

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeItem = useCartStore(
    (state) => state.removeItem
  );

  const totalPrice = useCartStore(
    (state) => state.getTotalPrice()
  );

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Header */}
      <h1 className="text-2xl font-semibold text-center pt-8">
        My Cart
      </h1>

      {/* Empty Cart */}
      {items.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-gray-500 text-lg">
            Your cart is empty 🛒
          </p>
        </div>
      ) : (
        <div className="px-5 mt-6">

          {/* Cart Items */}
          {items.map((item) => (
            <div
              key={item.product.id}
              className="
                flex
                justify-between
                border-b
                py-5
              "
            >

              {/* Left Side */}
              <div className="flex gap-4">

                {/* Product Image */}
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="
                    w-20
                    h-20
                    object-contain
                  "
                />

                {/* Product Info */}
                <div className="flex flex-col justify-between">

                  <div>
                    <h2 className="font-semibold text-base">
                      {item.product.name}
                    </h2>

                    <p className="text-gray-500 text-sm mt-1">
                      {item.product.quantity}
                    </p>
                  </div>

                  <p className="font-bold text-lg">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>

                </div>

              </div>


              {/* Right Side */}
              <div className="flex flex-col justify-between items-end">

                {/* Remove Button */}
                <button
                  onClick={() =>
                    removeItem(item.product.id)
                  }
                  className="text-gray-400 hover:text-black"
                >
                  <X size={18} />
                </button>


                {/* Quantity Controls */}
                <div className="flex items-center gap-3">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.product.id)
                    }
                    className="text-gray-400"
                  >
                    <Minus size={18} />
                  </button>


                  <span className="border px-3 py-1 rounded-lg">
                    {item.quantity}
                  </span>


                  <button
                    onClick={() =>
                      increaseQuantity(item.product.id)
                    }
                    className="text-green-500"
                  >
                    <Plus size={18} />
                  </button>

                </div>

              </div>

            </div>
          ))}


          {/* Total */}
          <div className="mt-8 flex justify-between items-center">

            <h2 className="text-lg font-semibold">
              Total
            </h2>

            <h2 className="text-xl font-bold">
              ${totalPrice.toFixed(2)}
            </h2>

          </div>


          {/* Checkout Button */}
          <button
            onClick={() => navigate("/checkout")}
            className="
              w-full
              mt-6
              py-4
              rounded-2xl
              bg-[#53B175]
              text-white
              font-semibold
              hover:bg-green-600
              transition
            "
          >
            Go To Checkout
          </button>

        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav />

    </div>
  );
}

export default Cart;