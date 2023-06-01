import React from 'react'
import './Home.css'
import Product from './Product.jsx'
function Home() {
  return (
    <div className='home'>
       <img  className='home__image' src="https://m.media-amazon.com/images/I/61SdeIIQEoL._SX1500_.jpg" />

      <div className='rowone'>
      <Product 
       id="23234123"
       title="This is one of the product among all other present on amazon" 
       price={11.98}
       rating={3}
       image="https://www.helium10.com/app/uploads/2020/04/vit-c.jpg"
       />
       <Product 
       id="23234123"
       title="This is one of the product among all other present on amazon"
       price={11.98}
       rating={3}
       image="https://img.buzzfeed.com/buzzfeed-static/static/2016-08/18/19/asset/buzzfeed-prod-fastlane02/sub-buzz-21973-1471563569-1.jpg"
       />
      </div>

      <div className='rowtwo'>
      <Product 
       id="23234123"
       title="This is one of the product among all other present on amazon"
       price={11.98}
       rating={3}
       image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
       />
       <Product 
       id="23234123"
       title="This is one of the product among all other present on amazon"
       price={11.98}
       rating={3}
       image="https://d3rlgjrg24xpvv.cloudfront.net/wp-content/uploads/2017/12/26073945/Amazon-A-Product-Image-Service-1.jpg"
       />
       <Product 
       id="23234123"
       title="This is one of the product among all other present on amazon"
       price={11.98}
       rating={3}
       image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-limits.png"
       />
      </div>
      <div className='rowthree'>
      <Product 
       id="23234123"
       title="This is one of the product among all other present on amazon"
       price={11.98}
       rating={3}
       image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-quiz.png"
       />
      </div>
       
    </div>
  )
}

export default Home