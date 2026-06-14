import { useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import SectionHeader from "../components/SectionHeader";

import categories from "../data/categories.json";
import { useProductStore } from "../store/productStore";

import SkeletonCard from "../components/SkeletonCard";

function Home() {
  const navigate = useNavigate();

  const {
    products,
    loading,
    error,
    fetchProducts,
  } = useProductStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="p-5">
  <div className="flex gap-4 overflow-hidden">
    {[...Array(3)].map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex justify-center items-center text-red-500">
        {error}
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
      <p className="text-center mt-2 font-medium">
        Dhaka, Banassre
      </p>


      {/* Search */}
      <div className="px-5 mt-5">
        <button
          onClick={() => navigate("/search")}
          className="
            w-full
            h-14
            bg-gray-100
            rounded-xl
            flex
            items-center
            px-4
            gap-3
            text-gray-500
          "
        >
          <Search size={20} />
          Search Store
        </button>
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
            justify-center
            items-center
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


      <SectionHeader title="Exclusive Offer" />

      <div className="flex gap-4 overflow-x-auto px-5 mt-4">
        {products.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>


      <SectionHeader title="Best Selling" />

      <div className="flex gap-4 overflow-x-auto px-5 mt-4">
        {products.slice(3, 6).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>


      <SectionHeader title="Groceries" />

      <div className="flex gap-4 overflow-x-auto px-5 mt-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
          />
        ))}
      </div>


      <BottomNav />
    </div>
  );
}

export default Home;