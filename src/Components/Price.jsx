// import React from 'react'
// import data from "../data/gym"



// const Price = () => {

//   const sales = data.sale 

//   return (
//     <div className=" bg-[url('/gymbg.png')] bg-cover bg-center bg-no-repeat min-h-[670px] w-full md:mt-13 sm:mt-10 opacity-70 p-5" >
//       {/* head  */}
//       <h2 className='text-center text-2xl font-bold' >{sales.name.heading}</h2>

//       {/* cards        */}
//       <div>
//         {
//           sales.sale_Cards.map((item, index)=> {
//             return (
//               <div>
//                 <h3>{item.sale_Card_head}</h3>
//                 <button>{item.btn}</button>
//               </div>
//             )
//           })
//         }
//       </div>

//       {/* Gc Soon  */}
//       <div>
//         <h4>{sales.gc_Soon.gc_name.heading}</h4>
        
//         <div>
//           {
//             sales.gc_Soon.gc_details.map((item, index)=> {
//               return (
//                 <h4>{item}</h4>
//               )
//             })
//           }
//         </div>

//       </div>


                        
//     </div>
//   )
// }

// export default Price


import React from 'react'
import { motion } from 'framer-motion';
import data from "../data/gym"


const Price = () => {
  const Branch = data.Branches

  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-[700px] w-full md:mt-13 sm:mt-10 relative"
    // style={{backgroundImage: `url(${data.Branches.bgimg})`}}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-opacity-50"></div>
      
      <div className="relative z-10 p-8">
        {/* Header */}
        <motion.h2 
          className='text-center text-4xl md:text-5xl font-bold text-white mb-12 tracking-wide'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          {Branch.heading}
        </motion.h2>

        {/* Sale Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {Branch.Branch_Cards.map((item, index) => {
            const parts = item.Branch_Card_head.split("Strength Hub");

            return (
              <motion.div 
                key={index} 
                className="bg-transparent bg-opacity-10 backdrop-blur-xs rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 hover:scale-105 shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 text-center">
                  {item.Branch_Card_head.includes("Strength Hub") ? (
                    <>
                      {item.Branch_Card_head.split("Strength Hub")[0]}
                      <span className="">Strength Hub</span>
                      {item.Branch_Card_head.split("Strength Hub")[1]}
                    </>
                  ) : (
                    item.Branch_Card_head
                  )}
                </h3>
                <div className="text-center">
                  <button className="bg-gradient-to-b from-[#12046d] via-[#40267d] to-[#02495f] hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-800 hover:shadow-lg hover:scale-105 uppercase tracking-wider">
                    {item.Mapbtn}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Coming Soon Section */}
        <motion.div 
          className="bg-transparent backdrop-blur-xs rounded-2xl p-8 border border-white border-opacity-20 max-w-[1000px] mx-auto lg:min-h-[350px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ amount: 0.3 }}
        >
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            {Branch.gc_Soon.gc_name.heading}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Branch.gc_Soon.gc_details.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-opacity-4 rounded-lg p-4 border-l-4 border-red-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg text-white font-medium">
                  {item}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Price;




// "text-xl md:text-2xl font-semibold text-white mb-6 text-center"




