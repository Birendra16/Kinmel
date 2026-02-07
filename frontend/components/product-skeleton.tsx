const ProductSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-lg border shadow animate-pulse flex flex-col">
      
      <div className="h-40 bg-gray-200 rounded mb-4"></div>

      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>

      <div className="h-5 bg-gray-200 rounded w-1/3 mb-6"></div>

      <div className="mt-auto h-10 bg-gray-200 rounded"></div>
    </div>
  );
};

export default ProductSkeleton;
