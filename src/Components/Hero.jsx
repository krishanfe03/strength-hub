// import React from "react";
// import data from "../data/gym";

// const Hero = () => {
//   return (
//     <div className="mt-6 sm:mt-8 lg:mt-10 w-11/12 md:max-w-[1200px] mx-auto px-4 sm:pt-12 md:pt-24 md:pb-12">

//       {/* Challenge tag */}
//       <p className="text-red-400 text-xs sm:text-sm text-center lg:text-left">
//         #30DaysWorkOutChallenge
//       </p>
      
//       {/* Main hero content */}
//       <div className="mt-6 sm:mt-8 lg:mt-4 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-12">

//         {/* Text content */}
//         <div className="w-full lg:max-w-[550px] flex flex-col items-center lg:items-start text-center lg:text-left">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-tight mb-4 sm:mb-6" style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.55)" }} >
//             {data.hero.heading}
//           </h2>
          
//           <p className="text-sm sm:text-base lg:text-lg tracking-wide leading-relaxed mb-6 sm:mb-8 max-w-[90%] sm:max-w-[500px]">
//             {data.hero.text}
//           </p>
          
//           <button className="bg-white text-blue-900 font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 transition-all duration-5000 shadow-lg">
//             {data.hero.Btn}
//           </button>
//         </div>

//         {/* Image */}
//         <div className="w-full lg:w-auto flex justify-center items-center lg:justify-end">
//           <img 
//             src={data.hero.img} 
//             alt="Workout challenge hero image" 
//             className="w-full max-w-[280px] h-[360px] sm:max-w-[320px] sm:h-[370px] md:max-w-[380px] md:h-[440px] lg:w-[420px] lg:h-[450px] object-cover rounded-lg "
//           />
//         </div>

//       </div>

//     </div>
//   );
// };

// export default Hero;



import React from "react";
import { motion } from "framer-motion";
import data from "../data/gym";

const Hero = () => {
  return (
    <div className="w-full mt-16 sm:mt-8 lg:mt-10 md:max-w-[1200px] mx-auto px-4 sm:pt-12 md:pt-24 md:pb-12">

      {/* Challenge tag */}
      <motion.p 
        className="text-red-400 text-xs sm:text-sm text-center lg:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.3 }}
      >
        #30DaysWorkOutChallenge
      </motion.p>
      
      {/* Main hero content */}
      <div className="mt-6 sm:mt-8 lg:mt-4 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-12">

        {/* Text content */}
        <div className="w-full lg:max-w-[550px] flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide leading-tight mb-4 sm:mb-6" 
            style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.55)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
          >
            {data.hero.heading}
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg tracking-wide leading-relaxed mb-6 sm:mb-8 max-w-[90%] sm:max-w-[500px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.3 }}
          >
            {data.hero.text}
          </motion.p>
          
          <motion.button 
            className="bg-white text-blue-900 font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 transition-all duration-5000 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.3 }}
          >
            {data.hero.Btn}
          </motion.button>
        </div>

        {/* Image */}
        <motion.div 
          className="w-full lg:w-auto flex justify-center items-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <img 
            src={data.hero.img} 
            alt="Workout challenge hero image" 
            className="w-full max-w-[280px] h-[360px] sm:max-w-[320px] sm:h-[370px] md:max-w-[380px] md:h-[440px] lg:w-[420px] lg:h-[450px] object-cover rounded-lg"
          />
        </motion.div>

      </div>

    </div>
  );
};

export default Hero;
