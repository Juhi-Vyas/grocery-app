import { X } from "lucide-react";

type FilterModalProps = {
  open: boolean;
  onClose: () => void;

  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<string[]>
  >;

  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<
    React.SetStateAction<string[]>
  >;

  categories: string[];
  brands: string[];
};

function FilterModal({
  open,
  onClose,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  categories,
  brands,
}: FilterModalProps) {

  if (!open) return null;


  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(
          (item) => item !== category
        )
      );
    } else {
      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);
    }
  };


  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(
        selectedBrands.filter(
          (item) => item !== brand
        )
      );
    } else {
      setSelectedBrands([
        ...selectedBrands,
        brand,
      ]);
    }
  };


  return (
    <div
      className="
        fixed
        inset-0
        bg-black/40
        z-50
        flex
        items-end
      "
    >
      <div
        className="
          bg-white
          w-full
          rounded-t-3xl
          p-6
          h-[80vh]
          overflow-y-auto
        "
      >

        {/* Header */}
        <div className="flex justify-between items-center">

          <button onClick={onClose}>
            <X size={20}/>
          </button>

          <h2 className="font-semibold text-lg">
            Filters
          </h2>

          <div className="w-5"/>
        </div>


        {/* Categories */}
        <div className="mt-8">

          <h3 className="font-semibold text-lg">
            Categories
          </h3>

          <div className="mt-5 space-y-4">

            {categories.map((category) => (

              <label
                key={category}
                className="
                  flex
                  items-center
                  gap-3
                  cursor-pointer
                "
              >

                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() =>
                    toggleCategory(category)
                  }
                  className="
                    w-5
                    h-5
                    accent-green-500
                  "
                />

                <span
                  className={
                    selectedCategories.includes(category)
                    ? "text-green-500 font-medium"
                    : ""
                  }
                >
                  {category}
                </span>

              </label>

            ))}

          </div>

        </div>


        {/* Brands */}
        <div className="mt-8">

          <h3 className="font-semibold text-lg">
            Brand
          </h3>


          <div className="mt-5 space-y-4">

            {brands.map((brand) => (

              <label
                key={brand}
                className="
                  flex
                  items-center
                  gap-3
                  cursor-pointer
                "
              >

                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() =>
                    toggleBrand(brand)
                  }
                  className="
                    w-5
                    h-5
                    accent-green-500
                  "
                />

                <span
                  className={
                    selectedBrands.includes(brand)
                    ? "text-green-500 font-medium"
                    : ""
                  }
                >
                  {brand}
                </span>

              </label>

            ))}

          </div>

        </div>


        {/* Apply Button */}
        <button
          onClick={onClose}
          className="
            w-full
            mt-12
            bg-[#53B175]
            text-white
            py-4
            rounded-2xl
            font-semibold
          "
        >
          Apply Filter
        </button>


      </div>

    </div>
  );
}

export default FilterModal;