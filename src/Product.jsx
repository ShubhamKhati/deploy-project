import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom';

function Product({id,title,image,price,rating}) {
   
    const [{}, dispatch]=useStateValue();
    
    const addToBasket= ()=>{
      //Add to basket....
      dispatch({
        type:'ADD_TO_BASKET',
        item:{
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating,
        },
      });
    };
  return (
    <div className='container'>
      <div className='product__info'>
         <p className='titleOfProduct'>{title}</p>
         <p className='product__price'>
         <small>$</small>
         <strong>{price}</strong>
         </p>
         <div className='product__rating'>
         {Array(rating).fill().map((x)=>(
           <p>* </p>
           ))}

         </div>
         <div className='productImgAndBtn'>
            <img src={image} alt="" />
            <Link to={'/checkout'}>
                <button className='addToBasketButton'/*onClick={addToBasket}*/>Add to Basket</button>
            </Link>
            
         </div>
      </div>
    </div>
  )   
}

export default Product