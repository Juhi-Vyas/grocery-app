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
        border
        border-gray-200
        rounded-2xl
        p-4
        block
        hover:shadow-lg
        transition
      "
    >
      <div className="text-6xl text-center">
        {product.image}
      </div>

      <h3 className="font-semibold mt-5">
        {product.name}
      </h3>

      <p className="text-gray-400 text-sm mt-1">
        {product.quantity}
      </p>

      <div className="flex justify-between items-center mt-6">
        <span className="font-bold">
          ${product.price}
        </span>

        <button
  onClick={(e) => {
    e.preventDefault();
    addItem(product, 1);
  }}
  className="
    bg-green-500
    text-white
    p-2
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