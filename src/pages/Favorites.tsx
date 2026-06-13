import { Heart } from "lucide-react";

import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";

import { useFavoriteStore } from "../store/favoriteStore";

function Favorites() {
  const items = useFavoriteStore((state) => state.items);

  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Header */}
      <h1 className="text-2xl font-semibold text-center pt-8">
        Favorites
      </h1>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="h-[60vh] flex flex-col justify-center items-center">

          <Heart
            size={60}
            className="text-gray-300"
          />

          <p className="text-gray-500 mt-4">
            No favorite products yet
          </p>

        </div>
      ) : (

        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-4
            px-5
            mt-6
          "
        >
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      )}

      <BottomNav />

    </div>
  );
}

export default Favorites;