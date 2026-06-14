import { Link } from "react-router-dom";
import type { Category } from "../types/Category";

type CategoryCardProps = {
  category: Category;
};

// Colors matching Figma
const colors = [
  {
    bg: "bg-green-50",
    border: "border-green-300",
  },
  {
    bg: "bg-orange-50",
    border: "border-orange-300",
  },
  {
    bg: "bg-red-50",
    border: "border-red-300",
  },
  {
    bg: "bg-purple-50",
    border: "border-purple-300",
  },
  {
    bg: "bg-yellow-50",
    border: "border-yellow-300",
  },
  {
    bg: "bg-blue-50",
    border: "border-blue-300",
  },
];

function CategoryCard({ category }: CategoryCardProps) {
  const color =
    colors[(category.id - 1) % colors.length];

  return (
    <Link
  to={`/products/${category.slug}`}
  className={`
    w-[170px]
    h-[190px]
    flex-shrink-0
    rounded-2xl
    border
    ${color.bg}
    ${color.border}
    flex
    flex-col
    items-center
    justify-center
    text-center
    px-3
    transition-all
    duration-200
    hover:scale-[1.03]
  `}
>
      {/* Image */}
      <img
        src={category.image}
        alt={category.name}
        className="
          w-20
          h-20
          object-contain
        "
      />

      {/* Title */}
      <h3
        className="
          mt-4
          text-[16px]
          font-semibold
          text-[#181725]
          leading-5
        "
      >
        {category.name}
      </h3>
    </Link>
  );
}

export default CategoryCard;