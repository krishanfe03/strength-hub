import React, { useState } from "react";
import data from "../../data/gym";
import ProtienLoad from "./ProtienLoad";

const Protien = () => {
  const items = data.shop.protiens.products;

  const [selectProducts, setSelectProducts] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleClick = (getitem) => {
    setLoading(true);
    setTimeout((getitem)=> {
      setSelectProducts(getitem) 
      setLoading(false);     
    }, 600)

  }

  return (
    <div className="w-11/12 max-w-[1200px] mx-auto mb-10 px-4"  >
      <div className='text-center mb-8' >
        <h2 className='text-3xl md:text-4xl font-bold text-gray-200 mb-2' style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.65)" }}  >{data.shop.protiens.head}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full "></div>
        <p className='text-gray-300 mt-4 text-lg' style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.55)" }} >{data.shop.protiens.desc}</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8' >
        {items.map((item, index) => {
          return (
            <div key={index} className='group relative rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100' >
              {/* // img */}
              <div className='relative overflow-hidden' >
                <img className='w-full h-67 md:h-72 lg:h-80 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110' 
                 src={item.img} alt={`Protien ${index} `} />
              </div>

              {/* button */}
              <button className='w-full bg-gradient-to-r from-gray-300 to-gray-900 hover:from-gray-900 hover:to-gray-400 text-white py-2 px-4  font-medium transition-all duration-700 transform hover:scale-105 active:scale-95 cursor-pointer'
              onClick={() => handleClick(item)} 
              >
                View Details 
              </button>


            </div>
          );
        })}


      </div>

      {/* for loading  */}
      {
        loading && (
          <div className='fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black/70 to-gray-900/70 backdrop-blur-sm z-50' >
            
            <h2 className='text-gray-100 text-xl font-bold mb-2' >
              Loading Product...!
            </h2>

          </div>
        )
      }

      
      <ProtienLoad 
      selectProducts = {selectProducts}
      setSelectProducts = {setSelectProducts}
      loading = {setLoading}
       />
      


    </div>
  );
};

export default Protien;
