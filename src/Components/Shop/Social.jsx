import React from 'react'
import data from '../../data/gym'
import { Link } from 'react-router-dom'

const Social = () => {
  

  return (
    <div className='relative w-full bg-gradient-to-b from-[#12046d] via-[#40267d] to-[#02495f] p-5 sm:p-8 md:p-10 lg:p-15 mt-7 md:mt-20 lg:mt-23 sm:mt-15 ' >

      <div>
        <h2 className='text-center text-2xl sm:text-3xl font-bold tracking-wider lg:tracking-wider ' >{data.shop.shopsoical.name}</h2>

        <ul className='flex gap-5 justify-center absolute -top-6 left-[32%] md:left-[39%] sm:left-[37%] lg:left-[44%] ' >
          {
            data.shop.shopsoical.social.map((item, index)=> {
              return (
                <li key={index} className='hover:scale-130 transition-all duration-600 ' >
                  <Link to={item.link} >
                    <img src={item.simg} alt={`Social Link ${index} `} className='w-[38px] sm:w-[42px] ' />
                  </Link>
                </li>
              )
            })
          }
        </ul>

      </div>

    </div>
  )
}

export default Social
