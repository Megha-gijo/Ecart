import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addwishlistItem, removeWishlistItem } from '../redux/slices/wislistSlice'





function Wishlist() {

  const wishlistArray = useSelector((state) => state.wishlist)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const wishes = (item)=>{
    dispatch(addwishlistItem(item))
    dispatch(removeWishlistItem(item.id))
  }


  
  

  return (
    
      <>
      <h1 className='heading-w text-center pt-40 mb-20 text-4xl text-violet-900'>Wishlist</h1>


      {wishlistArray?.length > 0 ?

        <div className="mt-5 mb-40 px-10 md:grid grid-cols-4">
          {wishlistArray?.map((item)=>(
            <div className=" p-2">
            <div className='p-3 shadow-2xl rounded'>
              <img src={item?.image} alt="" />
              <h4 className='text-center text-2xl text-gray-600 my-4'>{item?.title.slice(0, 20)}...</h4>
              <p>{item?.description.slice(0, 100)}</p>
              <p className='text-xl'>Price: <span className='text-blue-600'>$ {item?.price}</span></p>

              <div className='flex justify-between mt-3'>
                <button onClick={()=>dispatch(removeWishlistItem(item?.id))} className='border p-2 rounded bg-red-600 hover:bg-red-500'><FontAwesomeIcon size='xl' icon={faTrash} style={{ color: "white", }} /></button>
                <button onClick={()=>wishes(item)} className='border p-2 rounded bg-green-600 hover:bg-green-500'><FontAwesomeIcon size='xl' icon={faCartShopping} style={{ color: "white", }} /></button>
              </div>
            </div>
          </div>
          ))}
        </div>


        :

        <div className='w-full mt-10 md:grid grid-cols-3'>
          <div></div>
          <div>
            <img src="https://cdn.dribbble.com/users/530801/screenshots/2357094/present.gif" alt="" className='w-full h-90 mb-20' />
          </div>
          <div></div>
        </div>

      }

    
    </>
  )
}



export default Wishlist

