import React from 'react'

const Contact = () => {
  return (
    <>
        <section className='contact' id='contact'>
            <h1 className='heading'><span>CONTACT</span> US</h1>
            <div className='row'>
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115330.45656836171!2d81.71918349632863!3d25.402240789491874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1745233615341!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                <form>
                    <h3>GET IN TOUCH</h3>
                    <div className='inputBox'>
                        <span className='fas fa-user'></span>
                        <input type='text' placeholder='name'/>
                    </div>
                    <div className='inputBox'>
                        <span className='fas fa-envelope'></span>
                        <input type='email' placeholder='email'/>
                    </div>
                    <div className='inputBox'>
                        <span className='fas fa-phone'></span>
                        <input type='number' placeholder='number'/>
                    </div>
                    <input type='submit' value='contact now' className='btn'/>
                </form>
            </div>
        </section>
    </>
  )
}

export default Contact