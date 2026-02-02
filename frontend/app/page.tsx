"use client"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import Product from "@/components/productcard"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ProductHome from "./products/home/page"

const HomePage = () => {
  const [products, setProducts] = useState([])
  const router=useRouter()

  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setProducts(res.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ProductHome/>
      <Footer/>
    </div>
  )
}

export default HomePage
