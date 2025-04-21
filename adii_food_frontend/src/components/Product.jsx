import React from 'react'
import { product } from '../Data'

const Product = () => {
  return (
    <section className='products' id='product'>
        <h1 className='heading'>OUR <span>PRODUCT</span></h1>
        <div className='box-container'>
            {product.map((item,index)=>(
                <div className='box' key={index}>
                    <div className='icons'>
                        <a href='#' className='fas fa-shopping-cart'></a>
                        <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                    </div>
                    <div className='image'>
                        <img src={item.img}/>
                    </div>
                    <div className='content'>
                        <h3>{item.name}</h3>
                        <div className='stars'>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star-half-alt'/>
                        </div>
                        <div className='price'>
                ₹{item.price.toFixed(2)} <span>₹{item.originalPrice.toFixed(2)}</span>
              </div>
                    </div>
                </div>
            ))}

        </div>
    </section>
  )
}

export default Product