import { Minus, Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import BottomNav from "../components/BottomNav";

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
    <div className="min-h-screen bg-white pb-28">

      {/* Header */}
      <div className="pt-8 pb-4 border-b">
        <h1 className="text-xl font-semibold text-center">
          My Cart
        </h1>
      </div>

      {items.length === 0 ? (
        <div className="h-[60vh] flex items-center justify-center">
          <p className="text-gray-500">
            Your cart is empty 🛒
          </p>
        </div>
      ) : (
        <div className="px-5">

          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex py-5 border-b gap-4"
            >
              
              {/* Product Image */}
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-contain"
              />

              {/* Product Info */}
              <div className="flex-1">

                {/* Name + Remove */}
                <div className="flex justify-between">
                  <div>
                    <h2 className="font-semibold text-[15px]">
                      {item.product.name}
                    </h2>

                    <p className="text-gray-400 text-sm">
                      {item.product.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      removeItem(item.product.id)
                    }
                    className="text-gray-400"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Quantity + Price */}
                <div className="flex justify-between items-center mt-4">

                  <div className="flex items-center gap-3">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.product.id)
                      }
                      className="
                        w-10
                        h-10
                        border
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        text-gray-400
                      "
                    >
                      <Minus size={16}/>
                    </button>

                    <span className="font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.product.id)
                      }
                      className="
                        w-10
                        h-10
                        border
                        rounded-xl
                        flex
                        items-center
                        justify-center
                        text-green-500
                      "
                    >
                      <Plus size={16}/>
                    </button>

                  </div>

                  <p className="font-bold text-lg">
                    $
                    {(item.product.price * item.quantity).toFixed(2)}
                  </p>

                </div>

              </div>

            </div>
          ))}


          {/* Checkout Button */}
          <button
            onClick={() => navigate("/checkout")}
            className="
              w-full
              h-16
              mt-5
              bg-[#53B175]
              rounded-2xl
              text-white
              font-semibold
              flex
              justify-center
              items-center
              relative
            "
          >
            Go to Checkout

            <span
              className="
                absolute
                right-4
                bg-green-600
                px-3
                py-1
                rounded-md
                text-sm
              "
            >
              ${totalPrice.toFixed(2)}
            </span>

          </button>

        </div>
      )}

      <BottomNav />
    </div>
  );
}

export default Cart;