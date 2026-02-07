import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

type PageProps = {
  params: {
    id: string;
  };
};

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }

  return res.json();
};

const ProductDetailPage = async ({ params }: PageProps) => {
  const {id} =await params;
  if(!id){
    return <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-2xl font-bold">Product ID is missing.</h2>
    </div>
    }
  const product = await getProduct(id);

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-3">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-xl font-bold text-green-600 mb-2">
            ${product.price}
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Category: {product.category}
          </p>

          <button className="mt-auto bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
