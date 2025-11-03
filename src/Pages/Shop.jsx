import React, { useState } from 'react'
import ShopComponents from '../Components/Shop/ShopComponents'
import Social from '../Components/Shop/Social'
import data from "../data/gym"

const Shop = () => {

  const DownIcon = data.shop.shophero.cta

  //for scroll down 
  const handleScrollDown = () => {
    window.scrollBy({ top:680, behavior:"smooth" });
  }

  return (
    <div className='mt-15' >

      <div
        className='relative w-full h-[240px] mt-[80px] sm:h-[430px] sm:mt-[40px] md:h-[420px] md:mt-[60px] lg:h-[625px] lg:mt-[80px] bg-cover bg-center object-cover  flex flex-col'
        style={{ backgroundImage: `url(${data.shop.shophero.bgimg})` }}
      >
        <div className='absolute top-[17%] sm:top-[20%] md:top-[22%] lg:top-[20%] left-[5%] sm:left-[6%] md:left-[8%] lg:left-[7%] space-y-2 sm:space-y-3 md:space-y-5 lg:space-y-7 max-w-[90%] sm:max-w-[85%] md:max-w-[80%]'>
          <h2 className='text-[15px] sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-[#371fd4] via-[#6842c3] to-[#0396c3] bg-clip-text text-transparent drop-shadow-lg tracking-wider text-center mx-auto lg:mx-auto md:mx-auto'>
            {
              data.shop.shophero.heading.map((part, index) => {
                return (
                  <>
                    {part}
                    <br />
                  </>
                )
              })
            }
          </h2>
          <p className='text-[12px] sm:text-xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg bg-gradient-to-b from-[#371fd4] via-[#6842c3] to-[#0396c3] bg-clip-text text-transparent mx-auto lg:mx-auto md:mx-auto mt-4 '>
            {data.shop.shophero.subheding}
          </p>

          <button className='lg:flex md:flex lg:items-center lg:justify-center border-none outline-none rounded-full bg-gradient-to-b from-[#371fd4] via-[#6842c3] to-[#0396c3] text-white mx-auto lg:mx-auto md:mx-auto lg:mt-10 overflow-hidden lg:overflow-hidden transform transition-transform duration-300 active:translate-y-2 sm:hidden hidden ' onClick={handleScrollDown} >
            <DownIcon size={38}   /> 
            

          </button>



        </div>
      </div>

      {/* for tabs */}
      <ShopComponents />

      {/* for social link  */}
      <Social />


    </div>
  )
}

export default Shop
