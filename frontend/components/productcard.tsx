"use client";

import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  const { id, image, title, price } = item;

  return (
    <div className="bg-white m-4 p-6 min-h-[420px]
                    rounded-lg border border-gray-200 shadow-lg
                    hover:shadow-xl transition-shadow
                    flex flex-col">
      
      <div className="relative w-full h-60 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
        {title}
      </h2>

      <p className="text-amber-600 font-bold mb-4">
        ${price}
      </p>

      {/* Push button to bottom */}
      <div className="mt-auto">
        <Link href={`/products/${id}`}>
          <button className="bg-amber-600 hover:bg-amber-700
                             text-white rounded-xl p-2 w-full">
            View Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
