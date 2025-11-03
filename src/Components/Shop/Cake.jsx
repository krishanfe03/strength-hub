import React, { useState } from 'react'
import data from "../../data/gym"
import CakesLoad from './CakesLoad'

const Cake = () => {

  const [selectProduct, setSelectProduct] = useState(null)
  const [loading,  setloading] = useState(false);

  const items = data.shop.cakeproduct.cakes

  const handleClick = (getitem) => {
    setloading(true)
    setTimeout(()=> {
      setSelectProduct(getitem)   
      setloading(false); 
    }, 600)    
   }
  

  return (
    <div className='w-11/12 max-w-[1200px] mx-auto mb-10 px-4' >

      {/* header  */}
      <div className='text-center mb-8' >
        <h1 className='text-3xl md:text-4xl font-bold text-gray-200 mb-2' style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.65)" }} >{data.shop.cakeproduct.head}</h1>

        <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full ' ></div>

        <p className='text-gray-300 mt-4 text-lg' style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.55)" }} >{data.shop.cakeproduct.desc}</p>
      </div>

      {/* Products grid  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8' >
        {
          items.map((item, index)=> {
            return (
              <div className='group relative rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100' >

              {/* imgs */}
              <div className='relative overflow-hidden' >
                <img src={item.img} alt={` Cake ${index} `}
                className='w-full h-67 md:h-72 lg:h-80 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110' />
              </div>

              {/* button  */}
              <button className='w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white py-2 px-4 rounded-lg font-medium transition-all duration-500 transform hover:scale-105 active:scale-95 cursor-pointer '
              onClick={() => handleClick(item)}  
               >
                View Details 
              </button>

            </div>
            )

          })
        }
      </div>


      {/* for Loading State  */}
      {
        loading && (
          <div className='fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black/70 to-gray-900/70 backdrop-blur-sm z-50' >
            <h2 className='text-gray-100 text-xl font-bold mb-2' >Loading Products...!</h2>
          </div>
        )
      }


      <CakesLoad 
      selectProduct = {selectProduct}
      setSelectProduct = {setSelectProduct}
      loading = {loading}
      />






      
    </div>
  )
}

export default Cake
