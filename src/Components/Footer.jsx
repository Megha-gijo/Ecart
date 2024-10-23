import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'




function Footer() {
 
  return (
    <>
   <div className='min-h-80 bg-violet-900 px-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
    <div className='  p-2 text-white'>
        <h1 className='text-3xl m-5 font-semibold'><FontAwesomeIcon icon={faCartShopping} /> E-CART</h1>
        
        <p className='p-3 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque provident possimus neque laboriosam enim vel corporis. Aperiam pariatur aliquam modi quo rem rerum corporis fugit animi. Quo quasi nemo mollitia!</p>
    </div>
    <div className=' p-2 text-white'>
      <h1 className='text-3xl p-5 font-semibold'>Links</h1>
     <ul className='list-none mt-6 space-y-2'>
      <li>
    <Link to={'/'}><a href='/' class="text-white m-5 font-semibold">Home</a></Link> 
      </li>
      <li>
     <Link to={'/wishlist'}><a href='/wishlist' class="text-white m-5 font-semibold">Wishlist</a></Link>
      </li>
      <li>
     <Link to={'/cart'}><a href='/cart' class="text-white m-5 font-semibold">Cart</a></Link>
      </li>

     </ul>

    </div>
    <div className='  p-2 text-white'>
      <h1 className='text-3xl p-5 font-semibold'>Guides</h1>
      <ul class="list-none space-y-2 mt-6">
                        <li>
                            <a href="#" class="text-white m-5 font-semibold ">React</a>
                        </li>
                        <li>
                            <a href="#" class="text-white m-5 font-semibold">React Bootstrap</a>
                        </li>
                        <li>
                            <a href="#" class="text-white m-5 font-semibold">Bootswatch</a>
                        </li>

                    </ul>



    </div>
    <div className='  p-2 text-white'>
    <h5 class="text-white font-semibold text-3xl p-5 ">Contact Us</h5>
    <form action="">
     <input  type="email" id="email-input"  class="mt-3 w-72 py-1 px-1  rounded outline-none border border-white  " placeholder="Email Id" ></input>
    <button className=' py-2 px-5 rounded-md w-24 bg-orange-500 m-2'>Subscribe</button>
    <div className='flex justify-between mt-5'>
    <FontAwesomeIcon icon={faTwitter} className='text-3xl' /> 
    <FontAwesomeIcon icon={faLinkedin} className='text-3xl' /> 
    <FontAwesomeIcon icon={faFacebook} className='text-3xl' />  
    <FontAwesomeIcon icon={faInstagram} className='text-3xl'/>
    </div>
        

                        
      </form>
    
    </div>


   </div>
   </>
   
  )
}

export default Footer
