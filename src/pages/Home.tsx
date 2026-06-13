import BottomNav from "../components/BottomNav";

import products from "../data/products.json";
import categories from "../data/categories.json";

import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import SectionHeader from "../components/SectionHeader";

function Home() {
  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Logo */}
      <div className="pt-8 flex justify-center">
        <span className="text-4xl">
          🥕
        </span>
      </div>

      {/* Location */}
      <div className="text-center mt-2">
        <p className="font-medium">
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
          "
        />
      </div>


      {/* Banner */}
      <div className="mx-5 mt-5">
        <div
          className="
            bg-green-100
            rounded-xl
            h-28
            flex
            items-center
            justify-center
            text-xl
            font-semibold
          "
        >
          Fresh Vegetables
        </div>
      </div>


      {/* Product sections will come here */}

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

<div className="flex gap-4 overflow-x-auto px-5 mt-4 mb-6">
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