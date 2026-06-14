import type { Product } from "../types/Product";

function getCategory(title: string) {
  const name = title.toLowerCase();

  if (
    name.includes("apple") ||
    name.includes("banana") ||
    name.includes("vegetable") ||
    name.includes("fruit")
  ) {
    return "fresh-fruits-vegetables";
  }

  if (
    name.includes("milk") ||
    name.includes("cheese") ||
    name.includes("egg")
  ) {
    return "dairy-eggs";
  }

  if (
    name.includes("chicken") ||
    name.includes("fish") ||
    name.includes("meat")
  ) {
    return "meat-fish";
  }

  if (
    name.includes("bread") ||
    name.includes("cake") ||
    name.includes("cookie") ||
    name.includes("snack")
  ) {
    return "bakery-snacks";
  }

  if (
    name.includes("juice") ||
    name.includes("drink") ||
    name.includes("coffee") ||
    name.includes("tea")
  ) {
    return "beverages";
  }

  if (
    name.includes("oil") ||
    name.includes("ghee") ||
    name.includes("butter")
  ) {
    return "cooking-oil-ghee";
  }

  // default category
  return "fresh-fruits-vegetables";
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://dummyjson.com/products/category/groceries"
  );

  const data = await response.json();

  return data.products.map((item: any) => ({
    id: item.id,
    name: item.title,
    price: item.price,
    quantity: "1kg",
    image: item.thumbnail,
    description: item.description,
    category: getCategory(item.title),
  }));
}