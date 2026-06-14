import { useParams } from "react-router-dom";
import { useState } from "react";
import { Heart, Plus, Minus, ChevronRight } from "lucide-react";

import productsData from "../data/products.json";
import BackButton from "../components/BackButton";

import type { Product } from "../types/Product";

import { useCartStore } from "../store/cartStore";

import { useFavoriteStore } from "../store/favoriteStore";

function ProductDetails() {
  const { id } = useParams();

  const products = productsData as Product[];

  const product = products.find((item) => item.id === Number(id));

  const productId = Number(id);

  const isFavorite = useFavoriteStore((state) => state.isFavorite(productId));

  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);

  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);

  //   const items = useCartStore(
  //   (state) => state.items
  // );

  // console.log(items);

  if (!product) {
    return (
      <div className="h-screen flex justify-center items-center">
        Product not found
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <div className="bg-gray-100 rounded-b-3xl p-5">
        <BackButton />

        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-48 h-48 object-contain"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Name and Favorite */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>

            <p className="text-gray-500">{product.quantity}</p>
          </div>

          <button
            onClick={() => toggleFavorite(product)}
            className="transition"
          >
            <Heart
              size={24}
              className={
                isFavorite ? "fill-green-500 text-green-500" : "text-gray-500"
              }
            />
          </button>
        </div>

        {/* Quantity and Price */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center gap-4">
            <button onClick={decreaseQuantity} className="text-gray-400">
              <Minus />
            </button>

            <span className="border px-5 py-2 rounded-lg">{quantity}</span>

            <button onClick={increaseQuantity} className="text-green-500">
              <Plus />
            </button>
          </div>

          <h2 className="text-2xl font-bold">${product.price * quantity}</h2>
        </div>

        <hr className="my-6" />

        {/* Product Detail */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Product Detail</h3>

          <ChevronRight />
        </div>

        <p className="text-gray-500 text-sm mt-3">{product.description}</p>

        <hr className="my-6" />

        {/* Nutrition */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Nutritions</h3>

          <div className="flex items-center gap-2">
            <span className="bg-gray-100 px-3 py-1 rounded">100gr</span>

            <ChevronRight />
          </div>
        </div>

        <hr className="my-6" />

        {/* Reviews */}
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Review</h3>

          <div className="flex items-center gap-2">
            ⭐⭐⭐⭐⭐
            <ChevronRight />
          </div>
        </div>

        {/* Add Button */}
        <button
          onClick={() => addItem(product, quantity)}
          className="
    w-full
    bg-green-500
    text-white
    py-4
    rounded-2xl
    mt-8
    font-medium
  "
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
