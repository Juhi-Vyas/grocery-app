import { useMemo } from "react";
import { useParams } from "react-router-dom";

import productsData from "../data/products.json";
import categoriesData from "../data/categories.json";

import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton";
import BottomNav from "../components/BottomNav";

import type { Product } from "../types/Product";
import type { Category } from "../types/Category";

function Products() {
  const { category } = useParams();

  const products = productsData as Product[];
  const categories = categoriesData as Category[];

  const currentCategory = useMemo(
    () =>
      categories.find((item) => item.slug === category),
    [category, categories]
  );

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) => product.category === category
      ),
    [category, products]
  );

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