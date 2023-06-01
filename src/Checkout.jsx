import React from 'react'
import './Checkout.css'
function Checkout() {
//    const [{basket}]=useStateValue();
let basket =0;
  return (
    <div className='checkout'>
        <img className='checkout__ad'src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/PDAYILM/v1/01.jpg'/>
        { 
           
            basket===0?(
                <div className='checkout__title'>
                  <h1>Your Basket is Empty</h1>
                  <p>You hafe no items in your basket. To buy one ro more Click "Add to Basket" next to item.</p>
                </div>
            ) : (
                <div className='checkout__title'>
                  <h2>Your Shopping Basket</h2>

                  {/* {basket.map(item=>(<CheckoutProduct
                     item={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                  />))} */}
                </div>
            )
        }
    </div>
  )
}

export default Checkout