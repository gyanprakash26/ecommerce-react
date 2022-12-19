import React from "react"
import { Link } from "react-router-dom"
const ShopCart = ({ shopItems, addToCart }) => {
  return (
    <>
      {shopItems.map((shopItems, index) => {
        return (
          <div className='box'>
              <div className='product mtop'> 
              <Link to='detail' addToCart={addToCart} shopItems = {shopItems}>
                <div className='img'>
                <img src={shopItems.cover} alt='' />
              </div>
              </Link>
              <div className='product-details'>
                <Link to='/detail'><h3>{shopItems.name}</h3>
              </Link>
                <div className='price'>
                  <h4>Rs.{shopItems.price}.00 </h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
              
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
