import { Heart, ChevronRight } from "lucide-react";
import BottomNav from "../components/BottomNav";
import { useFavoriteStore } from "../store/favoriteStore";
import { useCartStore } from "../store/cartStore";

function Favorites() {
  const items = useFavoriteStore((state) => state.items);

  const addItem = useCartStore((state) => state.addItem);

  const addAllToCart = () => {
    items.forEach((product) => {
      addItem(product, 1);
    });
  };

  return (
    <div className="min-h-screen bg-white pb-28">

      {/* Header */}
      <div className="border-b py-6">
        <h1 className="text-xl font-semibold text-center">
          Favourite
        </h1>
      </div>


      {/* Empty State */}
      {items.length === 0 ? (
        <div className="h-[60vh] flex flex-col justify-center items-center">

          <Heart
            size={60}
            className="text-gray-300"
          />

          <p className="text-gray-500 mt-4">
            No favourite products yet
          </p>

        </div>

      ) : (

        <div className="px-5">

          {/* Favourite Items */}
          {items.map((product) => (

            <div
              key={product.id}
              className="
                flex
                items-center
                justify-between
                py-5
                border-b
              "
            >

              {/* Left Side */}
              <div className="flex items-center gap-4">

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-16
                    h-16
                    object-contain
                  "
                />

                <div>

                  <h2 className="font-semibold text-[15px]">
                    {product.name}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    {product.quantity}, Price
                  </p>

                </div>

              </div>


              {/* Right Side */}
              <div className="flex items-center gap-3">

                <span className="font-semibold">
                  ${product.price.toFixed(2)}
                </span>

                <ChevronRight
                  size={18}
                  className="text-gray-400"
                />

              </div>

            </div>

          ))}


          {/* Add All Button */}
          <button
            onClick={addAllToCart}
            className="
              w-full
              mt-8
              h-16
              rounded-2xl
              bg-[#53B175]
              text-white
              font-semibold
              mb-4
            "
          >
            Add All To Cart
          </button>

        </div>

      )}


      {/* Bottom Navigation */}
      <BottomNav />

    </div>
  );
}

export default Favorites;