// import React from 'react'
// import data from "../../data/gym"

// const WomensLoad = ({selectWomenProduct, setSelecWomenProduct, loading}) => {

//   return (
//     <div>

//       {
//         selectWomenProduct && !loading && (
//           <div className='fixed inset-0 flex items-center justify-center bg-black/60 z-50' >
//             <div className='bg-white pb-6 pl-5
//             pt-5 pr-4 rounded-lg max-w-[500px] w-full' >

//               <button
//               className="ml-auto mb-3 block text-gray-300 text-4xl cursor-pointer " 
//               onClick={()=> setSelecWomenProduct(null)} >
//                 &times;
//               </button>

//               <img 
//               src={selectWomenProduct.img} 
//               alt="product img"
//               className="w-full h-[300px] object-contain mb-7" 
//               />

//               <h2 className='text-xl font-bold mb-2 text-black ' >{selectWomenProduct.description}</h2>
//               <p className='text-lg font-semibold mb-2 text-black ' > <span className='text-gray-400' >Price :</span>  {selectWomenProduct.price}</p>

//               <div className='flex gap-3 text-gray-400 items-center' >
//                 Sizes : {
//                   selectWomenProduct?.sizes?.map((size, index)=> {
//                     return (
//                       <span key="index" className="border px-3 py-1 rounded-md bg-gray-100 text-gray-500 "  >
//                         {size}
//                       </span>
//                     )
//                   })
//                 }
//               </div>

//               <div className='mt-4' >
//                 <button className='border border-slate-300 text-black px-4 py-1 ' >
//                   {data.shop.womenproduct.btnBuy}
//                 </button>
//               </div>


//               <div className='mt-4' >
//                 <button className='border border-slate-300 text-black px-4 py-1 ' >
//                   {data.shop.womenproduct.AddCart}
//                 </button>
//               </div>






//             </div>
//           </div>
//         )
//       }
      
//     </div>
//   )
// }

// export default WomensLoad



import React, {useContext, useState } from 'react'
import data from "../../data/gym"
import { CartContext } from '../../context/CartContext';

const WomensLoad = ({selectWomenProduct, setSelecWomenProduct, loading}) => {

  const [highlight, setHighLight] = useState(null);
  const { addToCart } = useContext(CartContext)

  const handleClick = (size) => {
    setHighLight(size)
  }

  const handleAddToCart = () => {
    if(!highlight) {
      alert("Please select a Size First")
      return;
    }

    addToCart({...selectWomenProduct, selectedSize:highlight });
    setSelecWomenProduct(null);
  }

  return (
    <div>

      {
        selectWomenProduct && !loading && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4' >
            <div className='bg-white rounded-2xl max-w-[500px] w-full shadow-2xl overflow-hidden' >

              <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-200" 
              onClick={()=> setSelecWomenProduct(null)} >
                &times;
              </button>

              <div className='p-8'>
                <img 
                src={selectWomenProduct.img} 
                alt="product img"
                className="w-full h-[300px] object-contain mb-8 rounded-xl" 
                />

                <h2 className='text-2xl font-bold mb-3 text-gray-900' >{selectWomenProduct.description}</h2>
                <p className='text-2xl font-bold mb-6 text-gray-900' > 
                  <span className='text-gray-500 font-normal text-base mr-2'>Price:</span>  
                  {selectWomenProduct.price}
                </p>

                <div className='flex gap-2 items-center mb-8' >
                  <span className='text-gray-500 text-sm font-medium'>Sizes:</span>
                  {
                    selectWomenProduct?.sizes?.map((size, index)=> {
                      return (
                        <span key={index} className={`border-2 border-gray-200 px-4 py-2 rounded-lg  text-gray-700 font-medium hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 cursor-pointer ${highlight === size ? 'bg-black text-white border-teal-400 ' : " " } `}
                        onClick={() => handleClick(size)} 
                         >
                          {size}
                        </span>
                      )
                    })
                  }
                </div>

                <div className='flex gap-3'>
                  <button className='flex-1 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl'>
                    {data.shop.womenproduct.btnBuy}
                  </button>

                  <button className='flex-1 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200'
                  onClick={handleAddToCart}
                  >
                    {data.shop.womenproduct.AddCart}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )
      }
      
    </div>
  )
}

export default WomensLoad
