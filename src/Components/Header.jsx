import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faHeart,faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {

  const wishlistArray = useSelector((state)=>state.wishlist)
  console.log(wishlistArray);

  const cartArray = useSelector((state)=>state.cartItem)
  

  const [show ,setshow] = useState(false)
   const change = ()=>{
    setshow(!show)
   }

  return (
    <>
    <div className='bg-violet-900 p-9 w-full mb-5 md:flex  text-white fixed'>
        
      <div className='flex w-full px-5'>
    <Link to={'/'}><h1 className='text-3xl font-semibold'><FontAwesomeIcon icon={faCartShopping} className='me-3' /> E-CART</h1></Link>
      <button onClick={change} className='border borer-white p-2 rounded ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
      </div>

     { show && <div className='mt-4 flex md:hidden'>
       <Link to={'wishlist'}><button className='flex items-center bg-transparent  border hover:bg-white hover:text-black text-white  py-2 md:px-4 px-2 ml-2 rounded '> <FontAwesomeIcon icon={faHeart} style={{ color: "#c52020", }} /> Wishlist <span className='bg-slate-400 border-slate-500 rounded ms-2 px-2'>{wishlistArray?.ength}</span></button></Link> 
       <Link to={'/cart'}><button className='flex items-center bg-transparent  border  hover:bg-white hover:text-black  text-white py-2 md:px-4 px-2 ml-2 rounded '> <FontAwesomeIcon icon={faCartShopping} style={{ color: "#1cd428", }} /> Cart <span className='bg-slate-400 border-slate-500 rounded ms-2 px-2'>{cartArray?.length}</span></button></Link>
        </div> }

      <div className='md:flex ms-auto hidden'>
       <Link to={'/wishlist'}><button className='flex items-center bg-transparent  border hover:bg-white hover:text-black text-white  py-2 md:px-4 px-2 ml-2 rounded '> <FontAwesomeIcon icon={faHeart} style={{ color: "#c52020", }} /> Wishlist <span className='bg-slate-400 border-slate-500 rounded ms-2 px-2'>{wishlistArray?.length}</span></button></Link> 
        <Link to={'/cart'}><button className='flex items-center bg-transparent  border  hover:bg-white hover:text-black  text-white py-2 md:px-4 px-2 ml-2 rounded '> <FontAwesomeIcon icon={faCartShopping} style={{ color: "#1cd428", }} /> Cart <span className='bg-slate-400 border-slate-500 rounded ms-2 px-2'>{cartArray?.length}</span></button></Link> 
        </div>
    </div>
    </>
  )
}





export default Header