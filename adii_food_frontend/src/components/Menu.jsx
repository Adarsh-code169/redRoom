import React from 'react'
import {menu} from '../Data'

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <h1 className='heading'>OUR <span>MENU</span></h1>
        <div className='box-container'>
            {menu.map((item,index)=>(
                <div className='box' key={index}>
                    <img src={item.img} />
                    <h3>{item.name}</h3>
                    <div className='price'>
              ₹{item.price.toFixed(2)} <span>₹{item.originalPrice.toFixed(2)}</span>
            </div>
                    <a href='' className='btn'>add to cart</a>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Menu