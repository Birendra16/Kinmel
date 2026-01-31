import { ShoppingBag } from "lucide-react"

const Navbar = () => {
  const cartCount = 2

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <h1 className="text-2xl font-bold tracking-wide text-black">
          Kinmel
        </h1>

        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Products</li>
          <li className="hover:text-black cursor-pointer">Categories</li>
        </ul>

        <div className="relative cursor-pointer">
          <ShoppingBag size={24} />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
