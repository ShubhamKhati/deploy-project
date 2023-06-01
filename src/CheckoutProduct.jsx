import React from 'react'
import './CheckoutProduct.css'
function CheckoutProduct() {
  return (
    <div className='checkoutProduct'>
          <img src={image} alt="" />
          <div className='checkoutProduct__info'>
            <p>{title}</p>
            <p>
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className='checkoutProduct__rating'>
                {Array(rating).fill().map((_)=>(
                    <p>*</p>
                ))}
            </div>

            <button>
                Remove from basket
            </button>
          </div>
    </div>
  )
}

export default CheckoutProduct