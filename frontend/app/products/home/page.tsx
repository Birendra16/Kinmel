import ProductCard from "@/components/productcard";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 }, // ISR: revalidate every 1 hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

const ProductHome = async() => {
  const products = await getProducts();
  return (
    <div className="px-6 py-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
      </div>
    </div>
  );
};

export default ProductHome;
