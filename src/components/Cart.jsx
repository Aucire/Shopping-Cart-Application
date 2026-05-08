import React from 'react'

const Cart = ({cart}) => {

  const totals=cart.reduce((sum,x)=>sum+x.price,0)
  const total=totals.toFixed(2)

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div id='cart'>
        <div>Product ............................... Price</div>
        <ol>
          {cart.map((item, index) => (
            <>
              <li key={index}>{item.name} is in your cart</li>
              <p>{item.name} ................... @${item.price.toFixed(2)}</p>            
            </>
          ))}
        </ol>    
      <div>Total .............................. ${total}</div>    
      </div>
    </div>
  )
}

export default Cart
