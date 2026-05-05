import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import "./App.css"
import { sampleProducts } from './components/ProductList'

const App = () => {
  // state for dark mode toggle
  const [Dark,setDark]=useState(false)

  // state for cart management
  const [cart, setCart]=useState([])

  // state for category filtering
  const [products,setProducts]=useState(sampleProducts)
  const [selectedCategory,setSelectedCategory]=useState("All")
  const filteredProducts=selectedCategory==="All"
      ?products
      :products.filter(product=>product.category===selectedCategory)

  return (
    <main className={Dark?"dark":"light"}>
      <header>
        <h1>🛒 Shopping App</h1>
        {/* dark mode functionality */}
        <DarkModeToggle
          Dark={Dark}
          setDark={setDark}/><br/>
      </header>

      <p id='par'>
      Dynamic Shopping App with React Hooks focusing on filtering, <br/>cart management, and dark
        mode.
      </p>      

      <section>
        <div>
          {/* category filter dropdown */}
          <label>Filter by Category: </label>
          <select
            value={selectedCategory}
            onChange={e=>setSelectedCategory(e.target.value)}>
              <option value="All">All</option>
              <option value="Fruits">Fruits</option>
              <option value="Snacks">Snacks</option>
              <option value="Proteins">Proteins</option>
          </select>
        </div>

        <ProductList 
          filteredProducts={filteredProducts}
          cart={cart}
          setCart={setCart}/>

      </section>
      <section>
        {/* TODO: Implement and render Cart component */}
        <Cart
          cart={cart}/>
      </section>
    </main>
  )
}

export default App
