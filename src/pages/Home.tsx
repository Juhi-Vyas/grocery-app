import { useEffect } from "react";

import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import SectionHeader from "../components/SectionHeader";

import categories from "../data/categories.json";
import { useProductStore } from "../store/productStore";

function Home() {
  const {
    products,
    loading,
    error,
    fetchProducts,
  } = useProductStore();

  // Fetch products only once
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  // Loading state
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-green-500 text-lg font-medium">
          Loading products...
        </h2>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-red-500 text-lg font-medium">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Logo */}
      <div className="pt-8 flex justify-center">
        <img
          src="/images/products/Group.svg"
          alt="Logo"
          className="w-8 h-8"
        />
      </div>

      {/* Location */}
      <div className="text-center mt-2">
        <p className="font-medium text-gray-700">
          Dhaka, Banassre
        </p>
      </div>

      {/* Search */}
      <div className="px-5 mt-5">
        <input
          type="text"
          placeholder="Search Store"
          className="
            w-full
            bg-gray-100
            rounded-xl
            px-4
            py-3
            outline-none
            text-sm
          "
        />
      </div>

      {/* Banner */}
      <div className="mx-5 mt-5">
        <div
          className="
            h-28
            rounded-xl
            bg-cover
            bg-center
            flex
            items-center
            justify-center
            text-white
            text-xl
            font-semibold
          "
          style={{
            backgroundImage:
              "url('/images/products/banner.svg')",
          }}
        >
          Fresh Vegetables
        </div>
      </div>

      {/* Exclusive Offer */}
      <SectionHeader title="Exclusive Offer" />

      <div className="flex gap-4 overflow-x-auto px-5 mt-4">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Best Selling */}
      <SectionHeader title="Best Selling" />

      <div className="flex gap-4 overflow-x-auto px-5 mt-4">
        {products.slice(3, 6).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      {/* Groceries Categories */}
      <SectionHeader title="Groceries" />

      <div className="flex gap-4 overflow-x-auto px-5 mt-4 mb-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}

export default Home;