import "./productCard.css"

const ProductCard = ({ cart,setCart,product }) => {

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div id="display">
      <span>{product.pic}</span>
      <div id="prdct">
        <h3>{product.name}</h3>
        <p>Price: {product.price}</p>
        <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            {/* Add to Cart button functionality */}
        <button 
        data-testid={'product-' + product.id} 
        onClick={() => addToCart(product)}>Add to Cart</button>
      
      </div>
    </div>
  )
}
export default ProductCard
