// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// function Card() {

//   const {products, currency ,cartItems , updateQuantity, navigate} = useContext(ShopContext);

//   const [cartData,setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for(const items in cartItems){
//       for(const item in cartItems[items]){
//         if(cartItems [items][item] > 0){
//           tempData.push({
//             _id:items,
//             size:item,
//             quantity:cartItems[items][item]

//           })
//         }
//       }
//     }
//     setCartData(tempData);
    
//   },[cartItems])
//   return (
//     <div className='border-t pt-14'>

//       <div className='text-2xl mb-3'>
//         <Title text1={'YOUR'} text2={'CART'}/>

//       </div>
//       <div>
//         {
//           cartData.map((item,index) => {
//             const productData = products.find((product) => product._id === item._id);
//             return(
//               <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 '>
//                   <div className='flex items-start gap-6'>
//                     <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
//                     <div>
//                       <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                       <div className='flex items-center gap-5 mt-2'>
//                         <p>{currency}{productData.price}</p>
//                         <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50  '>{item.size}</p>

//                       </div>
//                     </div>
//                   </div>
//                   <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null :updateQuantity(item._id,item.size,Number(e.target.value)) } className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
//                   <img onClick={() => updateQuantity(item._id,item.size,0) } className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
//               </div>

//             )
//           })
//         }
//       </div>
//       <div className='flex justify-end my-20'>
//         <div className='w-full sm:max-w-[450px]'>
//           <CartTotal/>
//           <div className='w-full text-end'>
//             <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>

//           </div>

//         </div>

//       </div>
      
//     </div>
//   )
// }

// export default Card



import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

function Card() {

  const {products, currency ,cartItems , updateQuantity, navigate} = useContext(ShopContext);

  const [cartData,setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems [items][item] > 0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData);
  },[cartItems])

  return (
    <div className='border-t pt-14 px-4 sm:px-10'>

      <div className='text-2xl mb-6'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>

      <div className='space-y-4'>
        {
          cartData.map((item,index) => {
            const productData = products.find((product) => product._id === item._id);
            return(
              <div key={index} className='py-4 border rounded-lg flex flex-col sm:grid sm:grid-cols-[4fr_2fr_0.5fr] sm:items-center gap-4 bg-white shadow-sm'>
                  
                {/* Product Info */}
                <div className='flex items-start gap-4 sm:gap-6'>
                  <img className='w-20 sm:w-24 object-cover rounded' src={productData.image[0]} alt={productData.name} />
                  <div className='flex flex-col justify-between'>
                    <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-2 sm:gap-5 mt-1 sm:mt-2'>
                      <p className='text-sm sm:text-base'>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 rounded'>{item.size}</p>
                    </div>
                  </div>
                </div>

                {/* Quantity input */}
                <div className='mt-2 sm:mt-0 flex items-center gap-2 sm:justify-center'>
                  <input 
                    onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value)) } 
                    className='border w-16 sm:w-20 px-1 sm:px-2 py-1 text-center rounded' 
                    type="number" min={1} 
                    defaultValue={item.quantity} 
                  />
                </div>

                {/* Delete icon */}
                <div className='mt-2 sm:mt-0 flex justify-end sm:justify-center'>
                  <img 
                    onClick={() => updateQuantity(item._id,item.size,0)} 
                    className='w-5 h-5 sm:w-6 sm:h-6 cursor-pointer' 
                    src={assets.bin_icon} 
                    alt="Delete" 
                  />
                </div>

              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end my-10 sm:my-20'>
        <div className='w-full sm:max-w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end mt-4'>
            <button 
              onClick={() => navigate('/place-order')} 
              className='bg-black text-white text-sm sm:text-base my-4 px-6 sm:px-8 py-2 sm:py-3 rounded'>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Card
