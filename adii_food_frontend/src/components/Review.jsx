import React from 'react'
import { review } from '../Data'


const Review = () => {
  return (
    <section className='review'>
      <h1 className='heading'>CUSTOMER'S <span>REVIEW</span></h1>
      <div className='box-container'>
        {review.map((item, index) => (
          <div className='box' key={index}>
          <img src={item.img} alt='image' className='image' />
            <p>{item.msg}</p>
            <div className='content'>
                <h3>{item.name}</h3>
                <div className='stars'>
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star' />
                <i className='fas fa-star-half-alt' />
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Review
