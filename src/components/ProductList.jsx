import "./list.css"
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, pic:"🍎", name: 'Apple', price: 12.20, category: 'Fruits', inStock: true },
  { id: 2, pic:"🥛", name: 'Milk', price: 2.50, category: 'Proteins', inStock: false },
  { id: 4, pic:"🍞", name: 'Bread', price: 4.50, category: 'Snacks', inStock: true},
  { id: 5, pic:"🥭", name: 'Mango', price: 18.50, category: 'Fruits', inStock: true},
  { id: 6, pic:"🌮", name: 'Taco', price: 3.50, category: 'Snacks', inStock: true},
  { id: 7, pic:"🥚", name: 'Eggs', price: 6.25, category: 'Proteins', inStock: true},
  { id: 8, pic:"🥞", name: 'Bagels', price: 15.50, category: 'Snacks', inStock: true},
  { id: 9, pic:"🍑", name: 'Peach', price: 5.50, category: 'Fruits', inStock: true},
  { id: 10, pic:"🥩", name: 'Meat', price: 20.50, category: 'Proteins', inStock: true},
  { id: 11, pic:"🍇", name: 'Grapes', price: 8.50, category: 'Fruits', inStock: true},
  { id: 12, pic:"🍕", name: 'Pizza', price: 30.50, category: 'Snacks', inStock: true},
  { id: 13, pic:"🍗", name: 'Chicken', price: 15.50, category: 'Proteins', inStock: true},
]

const ProductList = ({cart,setCart,filteredProducts}) => {
  return (
    <div>
      <h2 id="h2">Available Products</h2>
      <div id="list">
        {/* TODO: Filter sample data using selected category */}
        {filteredProducts.length===0
            ?<p>No products available</p>
            :filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                cart={cart}
                setCart={setCart} />
              ))
          }        
      </div>

    </div>
  )
}

export default ProductList
