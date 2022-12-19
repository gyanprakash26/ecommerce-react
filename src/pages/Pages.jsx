import React from "react"
import Shop from "../components/shops/Shop"
const Pages = ({ addToCart, shopItems }) => {
  return (
    <>
      <Shop shopItems={shopItems} addToCart={addToCart} />
    </>
  )
}
export default Pages
