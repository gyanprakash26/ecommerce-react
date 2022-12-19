import React from "react"

import './style.css'
const detail = ({ shopItems, addToCart }) => {
  return (
    <>
    {shopItems.map((shopItems) =>{
      return(
        <section className='Product-detail d_flex'>
        <div className="dproduct d_flex">
          <div className="cc d_flex">
            <div className="pimg">
            <div className='img'>
                <img src={shopItems.cover} alt='' />
              </div>
            </div>
            <div className="summary">
            <h3>{shopItems.name}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sint 
                        maxime inventore officia at esse excepturi quaerat beatae nemo, 
                          cumque dolore eaque.</p>
            <div className='price'>
                  <h4>Rs.{shopItems.price}.00 </h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <i className=''>Add Cart</i>
                  </button>
                </div>
            </div>
          </div>

        </div>
      </section>
      )
    })
    } 
    </>
  )
}
export default detail;
