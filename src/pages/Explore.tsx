import categories from "../data/categories.json";
import CategoryCard from "../components/CategoryCard";
import BottomNav from "../components/BottomNav";
import { Search } from "lucide-react";

function Explore() {
  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Heading */}
      <div className="pt-8">
        <h1 className="text-[22px] font-semibold text-center">
          Find Products
        </h1>
      </div>

      {/* Search */}
      <div className="px-5 mt-6">
        <div
          className="
            flex
            items-center
            gap-3
            bg-[#F2F3F2]
            rounded-2xl
            px-4
            h-14
          "
        >
          <Search
            size={20}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search Store"
            className="
              bg-transparent
              w-full
              outline-none
              text-sm
              text-gray-700
            "
          />
        </div>
      </div>

      {/* Categories */}
      <div
        className="
          grid
          grid-cols-2
          gap-4
          px-5
          mt-5
          mb-5
        "
      >
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

export default Explore;