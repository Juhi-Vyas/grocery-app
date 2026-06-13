import categories from "../data/categories.json";
import CategoryCard from "../components/CategoryCard";
import BottomNav from "../components/BottomNav";

function Explore() {
  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Heading */}
      <h1 className="text-2xl font-semibold text-center pt-8">
        Find Products
      </h1>


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


      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-4 px-5 mt-5">

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