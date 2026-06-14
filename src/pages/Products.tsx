import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import categoriesData from "../data/categories.json";

import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton";
import BottomNav from "../components/BottomNav";

import type { Category } from "../types/Category";

import { useProductStore } from "../store/productStore";

function Products() {
  const { category } = useParams();

  const categories = categoriesData as Category[];

  const {
    products,
    loading,
    error,
    fetchProducts,
  } = useProductStore();

  // Fetch products
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Current category details
  const currentCategory = useMemo(
    () =>
      categories.find(
        (item) => item.slug === category
      ),
    [category, categories]
  );

  // For now showing all API products
  const filteredProducts = useMemo(
  () =>
    products.filter(
      (product) => product.category === category
    ),
  [products, category]
);

  // Loading
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-green-500 text-lg">
          Loading products...
        </p>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-red-500">
          {error}
        </p>
      </div>
    );
  }

  // Category not found
  if (!currentCategory) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500">
          Category not found
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen pb-24">
        <div className="max-w-7xl mx-auto p-5">

          {/* Header */}
          <div className="flex items-center gap-4">
            <BackButton />

            <h1 className="text-2xl font-semibold">
              {currentCategory.name}
            </h1>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                gap-4
                mt-8
              "
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="mt-20 text-center">
              <p className="text-gray-500">
                No products available
              </p>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </>
  );
}

export default Products;