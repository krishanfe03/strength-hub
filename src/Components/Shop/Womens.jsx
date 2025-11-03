// import React, { useState } from 'react'
// import data from "../../data/gym"
// import { div } from 'framer-motion/client'
// import WomensLoad from './WomensLoad';

// const Womens = () => {

//   const [selectWomenProduct, SetSelecWomenProduct] = useState(null);
//   const [loading, setoLoading] = useState(false)

//   const handleClick = (getitem) => {
//     setoLoading(true)
//     setTimeout(() => {
//       SetSelecWomenProduct(getitem)
//       setoLoading(false)
//     }, 500);
//   }

//   const items = data.shop.womens

//   return (
//     <div className='w-11/12 max-w-[1000px] mx-auto mb-5 ' >

//       <div className='grid grid-cols-2 justify-self-center lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 md:justify-self-center md:gap-10 gap-3 sm:gap-2' >

//         {
//           items.map((item, index)=> {
//             return (
//               <img key={index} src={item.img} alt={`Mens Clothing ${index} `} 
//               className='lg:w-[250px] lg:h-[310px] md:w-[200px] md:h-[250px] rounded-[2px] cursor-pointer '
//               onClick={() => handleClick(item)} 
//               />
//             )
//           })
//         }

//         {/* for loading state */}
//         {
//           loading && (
//             <div className='fixed inset-0 flex items-center justify-center bg-black/60 z-50 ' >
//               <h2 className='text-white text-xl font-bold animate-pulse' >Loading...!</h2>
//             </div>
//           )
//         }

//         {/* passing the prop  */}
//         <WomensLoad 
//         selectWomenProduct = {selectWomenProduct}
//         setSelecWomenProduct = {SetSelecWomenProduct}
//         loading = {loading}

//          />

       
//       </div>
      
//     </div>
//   )
// }

// export default Womens






import React, { useState } from 'react';
import data from "../../data/gym";
import WomensLoad from './WomensLoad';

const Womens = () => {
  const [selectWomenProduct, setSelecWomenProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const items = data.shop.womenproduct.womens;

  const handleClick = (getitem) => {
    setLoading(true);
    setTimeout(() => {
      setSelecWomenProduct(getitem);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='w-11/12 max-w-[1200px] mx-auto mb-10 px-4'>
      
      {/* Header Section */}
      <div className='text-center mb-8'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-200 mb-2' style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.65)" }}  >{data.shop.womenproduct.name}</h1>
        <div className='w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full'></div>
        <p className='text-gray-300 mt-4 text-lg' style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.55)" }} >{ data.shop.womenproduct.desc}</p>
      </div>

      {/* Products Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
        {items.map((item, index) => (
          <div key={index} className='group relative rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100'>
            
            {/* Image Container */}
            <div className='relative overflow-hidden'>
              <img
                src={item.img}
                alt={`Womens Clothing ${index}`}
                className='w-full h-67 md:h-72 lg:h-80 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110'
                onClick={() => handleClick(item)}
              />
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => handleClick(item)}
              className='w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white py-2 px-4 rounded-lg font-medium transition-all duration-500 transform hover:scale-105 active:scale-95 cursor-pointer'
            >
              {data.shop.womenproduct.btn}
            </button>
          </div>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className='fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black/70 to-gray-900/70 backdrop-blur-sm z-50'>
          <h2 className='text-gray-100 text-xl font-bold mb-2'>Loading Product...</h2>
        </div>
      )}

      {/* WomensLoad Component */}
      <WomensLoad
        selectWomenProduct={selectWomenProduct}
        setSelecWomenProduct={setSelecWomenProduct}
        loading={loading}
      />
    </div>
  );
};

export default Womens;
