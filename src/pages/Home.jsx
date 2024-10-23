import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../hooks/useFetch'
import { addwishlistItem } from '../redux/slices/wislistSlice'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../redux/slices/cartSlice'

function Home() {
  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);

  const dispatch = useDispatch()

  



  return (
    <>
    
    <div className='pt-40 mb-10 px-20 md:grid grid-cols-4'>
      {data?.length>0 &&
      data?.map((item)=>(
        <div className=' p-2'>
        <div className='p-3 rounded shadow-lg'>
          <img src={item?.image} alt="no image" className='w-full h-60'/>
          <h4 className='text-center text-3xl'>{item?.title.slice(0,25)}... </h4>
          <p className='text-justify'>{item?.description?.slice(0,100)}...</p>
          <p className='text-2xl'>Price: {item.price}</p>
          <div className='flex justify-between'>
            
            <button onClick={()=>dispatch(addwishlistItem(item))} className='p-3 rounded bg-red-500 text-white'><FontAwesomeIcon icon={faHeart} style={{ color: "#c52020", }} /></button>
            <button onClick={()=>dispatch(addItemToCart(item))} className='p-3 rounded bg-green-300 text-white'><FontAwesomeIcon icon={faCartShopping}/></button>
          </div>
  
  
  
        </div>
       </div>

      ))

      }
   
     {/* <div className='shadow-lg p-2' >
     <div className='p-3 rounded'>
        <img src="https://m.media-amazon.com/images/I/71+xNY6nI7L.jpg" alt="no image" className='w-full h-60'/>
        <h4 className='text-center text-3xl'>Mayeblline New York </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus necessitatibus eaque debitis magnam. Nemo a id laudantium labore dolorum quos aliquam voluptates expedita facere possimus voluptatum, tempore corrupti facilis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium voluptatem error quibusdam dolor. Ex tenetur ullam iure rem, facere repellendus mollitia velit ipsam quae at molestias ratione reiciendis similique.</p>
        <p>Price: <span className='text-violet-600'>$67</span></p>
        <div className='flex justify-between'>
          
          <button className='p-3 rounded bg-red-500 text-white'><FontAwesomeIcon icon={faTrash} style={{ color: "#c52020", }} /></button>
          <button className='p-3 rounded bg-green-300 text-white'><FontAwesomeIcon icon={faCartShopping}/></button>
        </div>



      </div>
     </div>
     <div className='shadow-lg p-2'>
     <div className='p-3 rounded'>
        <img src="https://glam21.in/cdn/shop/products/MB101.jpg?v=1676296049&width=750" alt="no image" className='w-full h-60'/>
        <h4 className='text-center text-3xl'>Mayeblline New York </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus necessitatibus eaque debitis magnam. Nemo a id laudantium labore dolorum quos aliquam voluptates expedita facere possimus voluptatum, tempore corrupti facilis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium voluptatem error quibusdam dolor. Ex tenetur ullam iure rem, facere repellendus mollitia velit ipsam quae at molestias ratione reiciendis similique.</p>
        <p>Price: <span className='text-violet-600'>$67</span></p>
        <div className='flex justify-between'>
          
          <button className='p-3 rounded bg-red-500 text-white'><FontAwesomeIcon icon={faTrash} style={{ color: "#c52020", }} /></button>
          <button className='p-3 rounded bg-green-300 text-white'><FontAwesomeIcon icon={faCartShopping}/></button>
        </div>



      </div>
     </div>
     <div className='shadow-lg p-2'>
     <div className='p-3 rounded'>
        <img src="https://swissbeauty.in/cdn/shop/files/SB-840_01_C.jpg?v=1708108521" alt="no image" className='w-full h-60'/>
        <h4 className='text-center text-3xl'>Mayeblline New York </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus necessitatibus eaque debitis magnam. Nemo a id laudantium labore dolorum quos aliquam voluptates expedita facere possimus voluptatum, tempore corrupti facilis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium voluptatem error quibusdam dolor. Ex tenetur ullam iure rem, facere repellendus mollitia velit ipsam quae at molestias ratione reiciendis similique.</p>
        <p>Price: <span className='text-violet-600'>$67</span></p>
        <div className='flex justify-between'>
          
          <button className='p-3 rounded bg-red-500 text-white'><FontAwesomeIcon icon={faTrash} style={{ color: "#c52020", }} /></button>
          <button className='p-3 rounded bg-green-300 text-white'><FontAwesomeIcon icon={faCartShopping}/></button>
        </div>



      </div>
     </div> */}


    </div>
    
    </>




  )
}

export default Home

