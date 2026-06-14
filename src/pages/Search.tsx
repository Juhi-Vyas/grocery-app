import {
  Search as SearchIcon,
  SlidersHorizontal,
} from "lucide-react";

import { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";
import FilterModal from "../components/FilterModal";

import { useProductStore } from "../store/productStore";

import SkeletonCard from "../components/SkeletonCard";


function Search() {

  const [query, setQuery] = useState("");

  const [openFilter, setOpenFilter] =
    useState(false);

  const [selectedCategories, setSelectedCategories] =
    useState<string[]>([]);

  const [selectedBrands, setSelectedBrands] =
    useState<string[]>([]);


  const {
    products,
    loading,
    fetchProducts,
  } = useProductStore();


  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [products.length, fetchProducts]);


  // Get unique categories
  const categories = [
    ...new Set(
      products.map((product) => product.category)
    ),
  ];


  // Get unique brands
  const brands = [
    ...new Set(
      products.map((product) => product.brand)
    ),
  ];


  // Apply search + filters
  const filteredProducts = products.filter(
    (product) => {

      const matchSearch =
        product.name
          .toLowerCase()
          .includes(query.toLowerCase());


      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);


      const matchBrand =
        selectedBrands.length === 0 ||
        selectedBrands.includes(product.brand);


      return (
        matchSearch &&
        matchCategory &&
        matchBrand
      );
    }
  );


  return (
    <div className="min-h-screen bg-white pb-24">

      {/* Heading */}
      <h1 className="text-2xl font-semibold text-center pt-8">
        Search
      </h1>


      {/* Search Box */}
      <div className="px-5 mt-5">

        <div
          className="
            flex
            items-center
            bg-[#F2F3F2]
            rounded-xl
            px-4
            py-3
          "
        >

          <SearchIcon
            size={20}
            className="text-gray-500"
          />


          <input
            type="text"
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Search Store"
            className="
              flex-1
              bg-transparent
              outline-none
              ml-3
            "
          />


          <button
            onClick={() =>
              setOpenFilter(true)
            }
          >
            <SlidersHorizontal
              size={20}
              className="text-gray-600"
            />
          </button>

        </div>

      </div>


      {/* Product List */}
      <div
        className="
          grid
          grid-cols-2
          gap-4
          px-5
          mt-5
        "
      >

        {loading ? (

          <>
  {[...Array(4)].map((_, index) => (
    <SkeletonCard key={index} />
  ))}
</>

        ) : filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))

        ) : (

          <div
            className="
              col-span-2
              text-center
              mt-10
              text-gray-500
            "
          >
            No products found
          </div>

        )}

      </div>


      {/* Filter Modal */}
      <FilterModal
        open={openFilter}
        onClose={() =>
          setOpenFilter(false)
        }
        categories={categories}
        brands={brands}
        selectedCategories={
          selectedCategories
        }
        setSelectedCategories={
          setSelectedCategories
        }
        selectedBrands={
          selectedBrands
        }
        setSelectedBrands={
          setSelectedBrands
        }
      />


      <BottomNav />

    </div>
  );
}


export default Search;