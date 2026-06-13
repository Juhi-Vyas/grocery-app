import { Minus, Plus, X } from "lucide-react";
import { useCartStore } from "../store/cartStore";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

function Cart() {
  const items = useCartStore((state) => state.items);

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);

  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const removeItem = useCartStore((state) => state.removeItem);

  const totalPrice = useCartStore((state) => state.getTotalPrice());

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-center pt-8">My Cart</h1>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-gray-500">Your cart is empty 🛒</p>
        </div>
      ) : (
        <div className="px-5 mt-6">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="
                flex
                justify-between
                items-center
                border-b
                py-4
              "
            >
              {/* Product */}
              <div className="flex items-center gap-4">
                <span className="text-4xl">{item.product.image}</span>

                <div>
                  <h2 className="font-medium">{item.product.name}</h2>

                  <p className="text-gray-500 text-sm">
                    {item.product.quantity}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-end">
                <button onClick={() => removeItem(item.product.id)}>
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 mt-3">
                  <button onClick={() => decreaseQuantity(item.product.id)}>
                    <Minus size={18} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="text-green-500"
                    onClick={() => increaseQuantity(item.product.id)}
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="mt-6 flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <button
            onClick={() => navigate("/checkout")}
            className="
    w-full
    bg-green-500
    text-white
    py-4
    rounded-2xl
    mt-6
    font-mediumc
  "
          >
            Go to Checkout
          </button>
        </div>
      )}

      <BottomNav />
    </div>
  );
}

export default Cart;
