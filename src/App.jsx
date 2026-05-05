import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import "./App.css"
import { sampleProducts } from './components/ProductList'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [Dark,setDark]=useState(false)

  // TODO: Implement state for cart management
  const [cart, setCart]=useState([])

  // TODO: Implement state for category filtering
  const [products,setProducts]=useState(sampleProducts)
  const [selectedCategory,setSelectedCategory]=useState("all")
  const filteredProducts=selectedCategory==="all"
      ?products
      :products.filter(product=>product.category===selectedCategory)

  return (
    <div className={Dark?"dark":"light"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>      
      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
        <DarkModeToggle
          Dark={Dark}
          setDark={setDark}/><br/>


      {/* TODO: Implement category filter dropdown */}

      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={e=>setSelectedCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
        filteredProducts={filteredProducts}
        cart={cart}
        setCart={setCart}/>

      {/* TODO: Implement and render Cart component */}
      <Cart
        cart={cart}/>
        
    </div>
  )
}

export default App
