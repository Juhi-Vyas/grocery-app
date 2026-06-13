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
        p-4
        flex flex-col items-center
        justify-center
        text-center
        transition-transform duration-200
        hover:scale-105
        hover:shadow-md
      "
    >
      <span className="text-5xl">
        {category.image}
      </span>

      <h3 className="mt-3 text-sm font-medium">
        {category.name}
      </h3>
    </Link>
  );
}

export default CategoryCard;