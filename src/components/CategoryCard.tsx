import { Link } from "react-router-dom";
import type { Category } from "../types/Category";

type CategoryCardProps = {
  category: Category;
};

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/products/${category.slug}`}
      className="
        min-w-[150px]
        md:min-w-[180px]
        bg-green-100
        rounded-2xl
        p-5
        flex
        flex-col
        items-center
        justify-center
        text-center
        transition-all
        duration-200
        hover:scale-105
        hover:shadow-lg
      "
    >
      {/* Category Image */}
      <img
        src={category.image}
        alt={category.name}
        className="
          w-20
          h-20
          object-contain
        "
      />

      {/* Category Name */}
      <h3
        className="
          mt-4
          text-sm
          font-semibold
          text-gray-800
        "
      >
        {category.name}
      </h3>
    </Link>
  );
}

export default CategoryCard;