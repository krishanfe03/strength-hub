import React, { useContext, useState } from 'react'
import data from "../../data/gym"
import { span } from 'framer-motion/client'
import { CartContext } from '../../context/CartContext'

const CakesLoad = ({loading, setSelectProduct, selectProduct}) => {

  const [highLight, setHighLight] = useState(null)
  const { addToCart } = useContext(CartContext)

  const handelHighLight = (size) => {
    setHighLight(size);
  }

  const handleAddToCart = () => {
    if(!highLight) {
      alert('Select the quatity first');
      return
    }
    addToCart({...selectProduct, selectSize: highLight})
    setSelectProduct(null);    
  }

  return (
    <div >

      {
        selectProduct && !loading && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/60 z-50' >

           <div className='bg-white pb-6 pl-5
            pt-5 pr-4 rounded-lg max-w-[500px] w-full' >
            
            <button className='ml-auto mb-3 block text-gray-300 cursor-pointer text-4xl'
             onClick={()=> setSelectProduct(null)} 
            >
              &times;
            </button>

            <img src={selectProduct.img} alt="Product Img" className='w-full h-[300px] object-contain mb-7' />

            <h2 className='text-xl font-bold mb-2 text-black' >{selectProduct.description}</h2>

            <p className='text-lg font-semibold mb-2 text-black' >{selectProduct.Price}</p>


            {/* for kg's  */}

            <div className='flex gap-3 text-gray-400 items-center' >
              {
                selectProduct.size.map((s, index)=> {
                  return (
                    <span key="index" className={`border px-3 py-1 rounded-md text-gray-500 hover:bg-black cursor-pointer hover:text-white transition-all duration-200 ${highLight === s ? 'bg-black text-white ' : "" } `}
                    onClick={() => handelHighLight(s)}
                      >
                      {s}
                    </span>
                  )

                })
              }
            </div>

            {/* Cart and Buy  */}
            <div className='flex gap-3 mt-4 '>
                  <button className='flex-1 bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md'>
                    {data.shop.menproducts.btnBuy}
                  </button>
                  
                  <button 
                  className='flex-1 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all shadow-md'
                  onClick={handleAddToCart}                  
                 
                  >
                    {data.shop.menproducts.AddCart}
                  </button>
                </div>





           </div>

          </div>
        )
      }
      
    </div>
  )
}

export default CakesLoad
