'use client'

const HeroSection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Discover Quality Products <br />
            for Everyday Life
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-md">
            Kinmel brings you premium products at affordable prices.
            Shop smart, shop fast, and enjoy a seamless online shopping experience.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
              Shop Now
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition">
              Explore Products
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1607082352121-fa243f3dde32"
            alt="E-commerce shopping"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection
