import React from 'react'
import Navbar from '../Components/Navbar'
import Offers from '../Components/Offers'
import Website from '../Components/Website'
import Footer from '../Components/Shared/Footer'
import Featured from '../Components/Featured'
import service from '../services/services'
import { useEffect } from 'react'
import { useState } from 'react'
import DataProducts from '../Components/DataProducts'

function Home() {
  const [products, setProducts] = useState()

  useEffect(() => {
    getProducts()
  }, [])

  async function getProducts() {
    const data = await service.getAllProducts('', 16, 0, 0, 0, [])
    setProducts(data)
  }

  if (!products) {
    return null
  }

  return (
    <div>
      <Navbar />
      <Website />
      {/* <Products doesShow={true} products={products} /> */}
      <DataProducts doesShow={true} products={products} />
      <Offers />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home
