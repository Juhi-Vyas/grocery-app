import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

import { useCartStore } from "../store/cartStore";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <Link
      to={`/product/${product.id}`}
      className="
        min-w-[170px]
        bg-white
        border
        border-gray-200
        rounded-2xl
        p-4
        block
        hover:shadow-lg
        transition
      "
    >
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-28
            h-28
            object-contain
          "
        />
      </div>

      {/* Product Name */}
      <h3 className="font-semibold text-[16px] mt-4">
        {product.name}
      </h3>

      {/* Quantity */}
      <p className="text-gray-400 text-sm mt-1">
        {product.quantity}
      </p>

      {/* Price & Add Button */}
      <div className="flex justify-between items-center mt-6">
        <span className="text-lg font-bold">
          ${product.price}
        </span>

        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product, 1);
          }}
          className="
            bg-[#53B175]
            text-white
            p-3
            rounded-xl
            hover:bg-green-600
            transition
          "
        >
          <Plus size={18} />
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;