import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

import categories from "../data/categories.json";
import CategoryCard from "../components/CategoryCard";
import BottomNav from "../components/BottomNav";

function Explore() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Heading */}
      <h1 className="text-[22px] font-semibold text-center pt-8">
        Find Products
      </h1>


      {/* Search */}
      <div className="px-5 mt-6">

        <button
          onClick={() => navigate("/search")}
          className="
            w-full
            h-14
            bg-[#F2F3F2]
            rounded-2xl
            flex
            items-center
            px-4
            gap-3
            text-gray-500
          "
        >
          <Search size={20}/>
          Search Store
        </button>

      </div>


      {/* Categories */}
      <div className="
        grid
        grid-cols-2
        gap-4
        px-5
        mt-5
        mb-5
      ">
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