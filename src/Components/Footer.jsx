// import React from "react";
// import data from "../data/gym";

// const Footer = () => {
//   return (
//     <div className="w-full mt-15 mb-5 " >

//       <div className="w-full max-w-[1100px] mx-auto flex justify-between " >
        
//         {/* for heading info  */}
//         <div className="flex flex-col gap-7 " >

//           <h2 className="text-3xl font-bold " >{data.Footer.head}</h2>

//           <ul className="flex flex-col gap-2" >
//             {
//               data.Footer.contactinof.map((item, index)=> {
//                 const Item = item.icon
//                 return (
//                   <li >
//                     <span className="flex items-center gap-2 text-[16px] " >
//                       <Item />
//                       <p>{item.info}</p>
//                     </span>
//                   </li>
//                 )
//               })
//             }
//           </ul>

//         </div>

//         {/* Quick Links  */}

//         <div className="flex flex-col gap-5  " >
//           <h3 className="text-xl font-bold" >{data.Footer.linkhead}</h3>

//           <ul className="flex flex-col gap-2"   >
//             {
//               data.Footer.Links.map((item, index)=> {
//                 return (
//                   <li className="text-[17px] cursor-pointer hover:text-red-500 " >
//                     {item}
//                   </li>
//                 )
//               })
//             }
//           </ul>
     

//         </div>

//         {/* Gym Time  */}

//         <di className="flex flex-col gap-5 " >
//           <h3 className="text-xl font-bold" >{data.Footer.Timehead}</h3>

//           <ul className="flex flex-col gap-2" >
//             {
//               data.Footer.GymHr.map((item, index)=> {
//                 return (
//                   <li>
//                     <span className="flex items-center gap-3 text-[17px] " >
//                       <h4>{item.day}</h4>
//                       <p>{item.time}</p>
//                     </span>
//                   </li>
//                 )
//               })
//             }
//           </ul>


//         </di>

//       </div>
//     </div>
//   );
// };

// export default Footer;








// import React from "react";
// import data from "../data/gym";

// const Footer = () => {
//   return (
//     <div className="w-full mt-15 relative overflow-hidden">
     
      
//       <div className="w-full max-w-[1100px] mx-auto flex justify-between relative z-10 py-8 px-4">
        
//         {/* Heading info section */}
//         <div className="flex flex-col gap-7 group">
//           <h2 className="text-3xl font-bold text-white relative">
//             <span className="bg-gradient-to-b from-[#7360f0] via-[#b192f9] to-[#64d1f2] bg-clip-text text-transparent">
//               {data.Footer.head}
//             </span>
//             <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-b from-[#7360f0] via-[#b192f9] to-[#64d1f2] group-hover:w-full transition-all duration-500"></div>

//           </h2>

//           <ul className="flex flex-col gap-2">
//             {data.Footer.contactinof.map((item, index) => {
//               const Item = item.icon;
//               return (
//                 <li key={index} className="transform hover:translate-x-2 transition-all duration-300">
//                   <span className="flex items-center gap-2 text-[16px] text-gray-300 hover:text-white group/item cursor-pointer">
//                     <div className="p-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 group-hover/item:from-red-500/40 group-hover/item:to-orange-500/40 transition-all duration-300">
//                       <Item className="bg-gradient-to-b from-[#4f42a7] via-[#b192f9] to-[#13bef1] bg-clip-text group-hover/item:text-red-300 transition-colors duration-300" />

//                     </div>
//                     <p className="group-hover/item:bg-gradient-to-b group-hover/item:from-[#7360f0] group-hover/item:via-[#b192f9] group-hover/item:to-[#64d1f2] group-hover/item:bg-clip-text group-hover/item:text-transparent transition-colors duration-300">
//                     {item.info}
//                     </p>

//                   </span>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Quick Links section */}
//         <div className="flex flex-col gap-5 group">
//           <h3 className="text-xl font-bold text-white relative">
//             <span className="bg-gradient-to-b from-[#7360f0] via-[#b192f9] to-[#64d1f2] bg-clip-text text-transparent">
//               {data.Footer.linkhead}
//             </span>
//             <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-b from-[#7360f0] via-[#b192f9] to-[#64d1f2] group-hover:w-full transition-all duration-500"></div>
//           </h3>

//           <ul className="flex flex-col gap-2">
//             {data.Footer.Links.map((item, index) => {
//               return (
//                 <li 
//                   key={index} 
//                   className="text-[17px] cursor-pointer text-gray-300 hover:text-white relative group/link transform hover:translate-x-1 transition-all duration-300"
//                 >
//                   <span className="relative z-10 hover:bg-gradient-to-b hover:from-[#7360f0] hover:via-[#b192f9] hover:to-[#64d1f2] hover:bg-clip-text hover:text-transparent transition-colors duration-300">
//                     {item}
//                   </span>

//                   {/* <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 -z-10"></div> */}
//                   <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-b from-[#7360f0] via-[#b192f9] to-[#64d1f2] group-hover/link:w-full transition-all duration-300"></div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Gym Time section */}
//         <div className="flex flex-col gap-5 group">
//           <h3 className="text-xl font-bold text-white relative">
//             <span className="bg-gradient-to-b from-[#7360f0] via-[#b192f9] to-[#64d1f2] bg-clip-text text-transparent">
//               {data.Footer.Timehead}
//             </span>
            
//           </h3>

//           <ul className="flex flex-col gap-2">
//             {data.Footer.GymHr.map((item, index) => {
//               return (
//                 <li key={index} className="group/time hover:bg-gradient-to-r hover:from-red-500/10 hover:to-orange-500/10 rounded-lg p-2 transition-all duration-300">
//                   <span className="flex items-center gap-3 text-[17px]">
//                     <h4 className="font-semibold min-w-fit 
//                bg-gradient-to-b from-[#a396f8] via-[#c1a8fa] to-[#96e7ff] 
//                bg-clip-text text-transparent 
//                group-hover/time:from-[#614bf2] 
//                group-hover/time:via-[#8353f4] 
//                group-hover/time:to-[#45b7da] 
//                transition-colors duration-300">
//               {item.day}
//               </h4>


//                     <div className="">...</div>

//                     <p className="text-gray-300 group-hover/time:text-white transition-colors duration-300 font-medium">
//                       {item.time}
//                     </p>
//                   </span>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>

//       {/* Bottom accent border */}
//       {/* <div className="w-full h-0.5 bg-gradient-to-b from-[#2d17b9] via-[#4d1cbe] to-[#0998c4]"></div> */}
//     </div>
//   );
// };

// export default Footer;




import React from "react";
import data from "../data/gym";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden">
     
      
      <div className="w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between relative z-10 pt-5 px-4 gap-8 mt-5 sm:mt-6 md:mt-8 lg:mt-10 ">
        
        {/* Heading info section */}
        <div className="flex flex-col gap-7 group">
          <h2 className="text-2xl md:text-3xl font-bold text-white relative">
            <span className="bg-gradient-to-b from-[#7360f0] via-[#b192f9] to-[#64d1f2] bg-clip-text text-transparent">
              {data.Footer.head}
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-b from-[#7360f0] via-[#b192f9] to-[#64d1f2] group-hover:w-full transition-all duration-500"></div>

          </h2>

          <ul className="flex flex-col gap-2">
            {data.Footer.contactinof.map((item, index) => {
              const Item = item.icon;
              return (
                <li key={index} className="transform hover:translate-x-2 transition-all duration-300">
                  <span className="flex items-center gap-2 text-[14px] sm:text-[16px] text-gray-300 hover:text-white group/item cursor-pointer">
                    <div className="p-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 group-hover/item:from-red-500/40 group-hover/item:to-orange-500/40 transition-all duration-300">
                      <Item className="bg-gradient-to-b from-[#4f42a7] via-[#b192f9] to-[#13bef1] bg-clip-text group-hover/item:text-red-300 transition-colors duration-300" />

                    </div>
                    <p className="group-hover/item:bg-gradient-to-b group-hover/item:from-[#7360f0] group-hover/item:via-[#b192f9] group-hover/item:to-[#64d1f2] group-hover/item:bg-clip-text group-hover/item:text-transparent transition-colors duration-300 break-words">
                    {item.info}
                    </p>

                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Quick Links section */}
        <div className="flex flex-col gap-7 lg:gap-7 " >
          <h3 className="bg-gradient-to-b from-[#7360f0] via-[#b192f9] to-[#64d1f2] bg-clip-text text-transparent font-bold text-[18px] " >{data.Footer.quicklinkhead}</h3>

          <ul className="space-y-3" >
          {
            data.Footer.Links.map((item, index)=> {
              return (
                <li className="text-gray-400 font-bold " >
                <Link to={item.link} >                 
                  {item.head}                
                </Link> 
                </li>               
              )
            })
          }
        </ul>
        </div>

        {/* Gym Time section */}
        <div className="flex flex-col items-start text-start gap-5 group">
          <h3 className="text-lg md:text-xl font-bold text-white relative">
            <span className="bg-gradient-to-b from-[#7360f0] via-[#b192f9] to-[#64d1f2] bg-clip-text text-transparent">    
              {data.Footer.Timehead}      
            </span> 
            
          </h3>

          <ul className="flex flex-col gap-2 ">
            {data.Footer.GymHr.map((item, index) => {
              return (
                <li key={index} className="group/time hover:bg-gradient-to-r hover:from-red-500/10 hover:to-orange-500/10 rounded-lg p-2 transition-all duration-300">
                  <span className="flex items-center gap-2 sm:gap-3 text-[15px] sm:text-[17px]">
                    <h4 className="font-semibold min-w-fit 
               bg-gradient-to-b from-[#a396f8] via-[#c1a8fa] to-[#96e7ff] 
               bg-clip-text text-transparent 
               group-hover/time:from-[#614bf2] 
               group-hover/time:via-[#8353f4] 
               group-hover/time:to-[#45b7da] 
               transition-colors duration-300">
              {item.day}
              </h4>


                    <div className="">...</div>

                    <p className="text-gray-300 group-hover/time:text-white transition-colors duration-300 font-medium">
                      {item.time}
                    </p>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Bottom accent border */}
      {/* <div className="w-full h-0.5 bg-gradient-to-b from-[#2d17b9] via-[#4d1cbe] to-[#0998c4]"></div> */}
    </div>
  );
};

export default Footer;
