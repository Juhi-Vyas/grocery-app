import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Heart,
  Plus,
  Minus,
  ChevronRight,
} from "lucide-react";

import BackButton from "../components/BackButton";

import { useCartStore } from "../store/cartStore";
import { useFavoriteStore } from "../store/favoriteStore";
import { useProductStore } from "../store/productStore";

function ProductDetails() {
  const { id } = useParams();

  const productId = Number(id);

  // Product Store
  const {
    products,
    loading,
    fetchProducts,
  } = useProductStore();

  // Fetch products on refresh/direct URL
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Find current product
  const product = products.find(
    (item) => item.id === productId
  );

  // Favorite Store
  const isFavorite = useFavoriteStore((state) =>
    state.isFavorite(productId)
  );

  const toggleFavorite = useFavoriteStore(
    (state) => state.toggleFavorite
  );

  // Cart Store
  const addItem = useCartStore(
    (state) => state.addItem
  );

  // Quantity
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-green-500 text-lg">
          Loading product...
        </p>
      </div>
    );
  }

  // Product not found
  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Top Section */}
      <div className="bg-gray-100 rounded-b-3xl p-5">

        <BackButton />

        <div className="flex justify-center mt-5">
          <img
            src={product.image}
            alt={product.name}
            className="w-52 h-52 object-contain"
          />
        </div>

      </div>


      {/* Product Information */}
      <div className="p-5">

        {/* Name & Favorite */}
        <div className="flex justify-between items-center">

          <div>
            <h1 className="text-2xl font-bold">
              {product.name}
            </h1>

            <p className="text-gray-500 mt-1">
              {product.quantity}
            </p>
          </div>


          <button
            onClick={() => toggleFavorite(product)}
          >
            <Heart
              size={24}
              className={
                isFavorite
                  ? "fill-green-500 text-green-500"
                  : "text-gray-400"
              }
            />
          </button>

        </div>


        {/* Quantity & Price */}
        <div className="flex justify-between items-center mt-8">

          <div className="flex items-center gap-4">

            <button
              onClick={decreaseQuantity}
              className="text-gray-400"
            >
              <Minus />
            </button>


            <span className="border px-5 py-2 rounded-lg">
              {quantity}
            </span>


            <button
              onClick={increaseQuantity}
              className="text-green-500"
            >
              <Plus />
            </button>

          </div>


          <h2 className="text-2xl font-bold">
            ${(product.price * quantity).toFixed(2)}
          </h2>

        </div>


        <hr className="my-6" />


        {/* Product Detail */}
        <div className="flex justify-between items-center">

          <h3 className="font-semibold">
            Product Detail
          </h3>

          <ChevronRight />

        </div>


        <p className="text-gray-500 text-sm mt-3 leading-6">
          {product.description}
        </p>


        <hr className="my-6" />


        {/* Nutrition */}
        <div className="flex justify-between items-center">

          <h3 className="font-semibold">
            Nutritions
          </h3>

          <div className="flex items-center gap-2">

            <span className="bg-gray-100 px-3 py-1 rounded">
              100gr
            </span>

            <ChevronRight />

          </div>

        </div>


        <hr className="my-6" />


        {/* Reviews */}
        <div className="flex justify-between items-center">

          <h3 className="font-semibold">
            Review
          </h3>

          <div className="flex items-center gap-2">
            ⭐⭐⭐⭐⭐
            <ChevronRight />
          </div>

        </div>


        {/* Add To Basket */}
        <button
          onClick={() => addItem(product, quantity)}
          className="
            w-full
            mt-8
            py-4
            rounded-2xl
            bg-[#53B175]
            text-white
            font-semibold
            hover:bg-green-600
            transition
          "
        >
          Add To Basket
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;