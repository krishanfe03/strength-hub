// import React, { useRef } from 'react'
// import data from "../../data/gym"
// import { motion } from 'framer-motion'

// const Socialmedia = () => {

//   const sectionRefs = useRef(null)

//   const items = data.socialMediaLinks

//   return (
//     <div>

//       {/* section  */}
//        <section ref={sectionRefs.socialMediaLinks} className="py-20 px-8" id="gallery">
//           <h3 className="text-2xl font-bold mb-6 text-center">SocialMediaLinks</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {items?.map((item, idx) => (
//               <motion.a
//                 key={idx}
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="relative p-6 rounded-2xl shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 flex flex-col items-center space-y-4 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group"
//                 whileHover={{ y: -6 }}
//               >
//                 <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 shadow-md">
//                   <item.icon className="w-7 h-7 text-white" />   
//                   {/* React icon  */}
//                 </div>
//                 <h3 className="text-lg font-semibold text-white group-hover:text-indigo-200">{item.name}</h3>
//                 <p className="text-sm text-gray-200 text-center">{item.description}</p>
//               </motion.a>
//             ))}
//           </div>
//         </section>
      
//     </div>
//   )
// }

// export default Socialmedia
