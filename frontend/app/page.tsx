import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import ProductHome from "./products/home/page"
import { Suspense } from "react"
import ProductSkeleton from "@/components/product-skeleton"

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Suspense
        fallback={
          <div className="px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        }
      >
      <ProductHome/>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default HomePage
