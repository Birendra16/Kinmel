"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState()

  const fetchProduct = async () => {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    )
    setProduct(res.data)
  }

  useEffect(() => {
    if (id) fetchProduct()
  }, [id])

  if (!product) {
    return (
      <div className="p-10 text-center text-lg">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
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

          <button className="mt-auto bg-amber-600 text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
