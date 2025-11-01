import axios from "axios"
import { useEffect, useState } from "react"
import Filters from './Filters'
import ProductCard from './ProductCard'
import Greet from './Greet'
import ShowHideFilter from "./ShowHideFilter"

const Body = () => {
  const [productsList, setProductsList] = useState(null)
  const [showFilter, setShowFilter] = useState(true)
  useEffect(() =>{
    fetchProducts()
  }, [])
  const fetchProducts = async() => {
    const data = await axios.get('https://fakestoreapi.com/products')
    setProductsList(data.data)   
  }
  const handleChildMessage = (childData) => {
    setShowFilter(childData)
  }
  return (
    <main>
        <Greet/>
        <Filters sendDataToParent={handleChildMessage}/>
        <div className="filters-and-products-container">
          <ShowHideFilter filter={showFilter}/>
          <div className="all-products-container"> 
            {productsList && productsList.map(product => <ProductCard product={product}/>)}
          </div>
        </div>
    </main>
  )
}

export default Body
