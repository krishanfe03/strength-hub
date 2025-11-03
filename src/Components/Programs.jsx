// // import React from "react";
// // import { motion } from "framer-motion";
// // import data from "../data/gym";

// // const Programs = () => {
// //   const programs = data.program.program_main;
// //   const sections = data.program.section;

// //   return (
// //     <div className="mt-4 sm:mt-6 lg:mt-10 w-11/12 md:max-w-[1200px] mx-auto px-4 sm:pt-3">
// //       {/* Header */}
// //       <motion.div
// //         className="w-full max-w-[900px] mx-auto mb-10"
// //         initial={{ opacity: 0, y: -50 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ amount: 0.3 }}
// //       >
// //         <h2
// //           className="text-center mb-3 text-3xl font-bold"
// //           style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.35)" }}
// //         >
// //           {programs.heading}
// //         </h2>
// //         <p
// //           className="text-gray-300 text-justify lg:mb-20"
// //           style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.25)" }}
// //         >
// //           {programs.text}
// //         </p>
// //       </motion.div>

// //       {/* Sections */}
// //       <div className="sm:space-y-10 md:space-y-13 lg:mt-10">
// //         {sections.map((section, index) => (
// //           <motion.div
// //             key={index}
// //             className={`flex flex-col lg:flex-row gap-5 lg:gap-7 w-full ${
// //               index % 2 === 1 ? "lg:flex-row-reverse" : ""
// //             }`}
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: index * 0.2 }}
// //             viewport={{ amount: 0.3 }}
// //           >
// //             {/* Image */}
// //             <div className="w-full lg:w-1/2 ">
// //               <img
// //                 src={section.img}
// //                 alt={section.content.head}
// //                 className="w-full h-full object-cover rounded-sm lg:w-full "
// //               />
// //             </div>

// //             {/* Content */}
// //             <div className="lg:space-y-5 space-y-3 w-full lg:w-1/2 lg:mt-3">
// //               <motion.h3
// //                 className="text-xl font-bold"
// //                 style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.45)" }}
// //                 initial={{ opacity: 0, x: -50 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.7, delay: index * 0.3 }}
// //                 viewport={{ amount: 0.3 }}
// //               >
// //                 {section.content.head}
// //               </motion.h3>
// //               <motion.p
// //                 className="text-justify md:tracking-normal sm:tracking-normal text-gray-200"
// //                 style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.25)" }}
// //                 initial={{ opacity: 0, x: -50 }}
// //                 whileInView={{ opacity: 1, x: 0 }}
// //                 transition={{ duration: 0.7, delay: index * 0.35 }}
// //                 viewport={{ amount: 0.3 }}
// //               >
// //                 {section.content.text}
// //               </motion.p>
// //               <motion.div
// //                 className="w-1/12 h-[3px] bg-blue-200 rounded-full lg:mt-8 hover:w-3/12 transition-all duration-700 ease-out cursor-pointer"
// //                 initial={{ scaleX: 0 }}
// //                 whileInView={{ scaleX: 1 }}
// //                 transition={{ duration: 0.7, delay: index * 0.4 }}
// //                 viewport={{ amount: 0.3 }}
// //               ></motion.div>
// //             </div>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Programs;



// import React from "react";
// import { motion } from "framer-motion";
// import data from "../data/gym";

// const Programs = () => {
//   const programs = data.program.program_main;
//   const sections = data.program.section;

//   return (
//     <div className="mt-4 sm:mt-6 lg:mt-10 w-11/12 md:max-w-[1200px] mx-auto px-4 sm:pt-3">
//       {/* Header */}
//       <motion.div
//         className="w-full max-w-[900px] mx-auto mb-10"
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ amount: 0.3 }}
//       >
//         <h2
//           className="text-center mb-3 text-3xl font-bold"
//           style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.35)" }}
//         >
//           {programs.heading}
//         </h2>
//         <p
//           className="text-gray-300 text-justify lg:mb-20"
//           style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.25)" }}
//         >
//           {programs.text}
//         </p>
//       </motion.div>

//       {/* Sections */}
//       <div className="sm:space-y-10 md:space-y-13 lg:mt-10">
//         {sections.map((section, index) => {
//           const isOdd = index % 2 === 1;

//           return (
//             <motion.div
//               key={index}
//               className={`flex flex-col lg:flex-row gap-5 lg:gap-7 w-full ${
//                 isOdd ? "lg:flex-row-reverse" : ""
//               }`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ amount: 0.3 }}
//             >
//               {/* Image */}
//               <motion.div
//                 className="w-full lg:w-1/2"
//                 initial={{ opacity: 0, x: isOdd ? 50 : -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.2 }}
//                 viewport={{ amount: 0.3 }}
//               >
//                 <img
//                   src={section.img}
//                   alt={section.content.head}
//                   className="w-full h-full object-cover rounded-sm lg:w-full"
//                 />
//               </motion.div>

//               {/* Content */}
//               <motion.div
//                 className="lg:space-y-5 space-y-3 w-full lg:w-1/2 lg:mt-3"
//                 initial={{ opacity: 0, x: isOdd ? -50 : 50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.25 }}
//                 viewport={{ amount: 0.3 }}
//               >
//                 <h3
//                   className="text-xl font-bold"
//                   style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.45)" }}
//                 >
//                   {section.content.head}
//                 </h3>
//                 <p
//                   className="text-justify md:tracking-normal sm:tracking-normal text-gray-200"
//                   style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.25)" }}
//                 >
//                   {section.content.text}
//                 </p>
//                 <motion.div
//                   className="w-1/12 h-[3px] bg-blue-200 rounded-full lg:mt-8 hover:w-3/12 transition-all duration-700 ease-out cursor-pointer"
//                   initial={{ scaleX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.7, delay: index * 0.3 }}
//                   viewport={{ amount: 0.3 }}
//                 ></motion.div>
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Programs;


import React from "react";
import { motion } from "framer-motion";
import data from "../data/gym";

const Programs = () => {
  const programs = data.program;
  const sections = data.program.section;

  return (
    <div className="mt-4 sm:mt-6 lg:mt-10 w-11/12 md:max-w-[1200px] mx-auto px-4 sm:pt-3">
      {/* Header */}
      <motion.div
        className="w-full max-w-[900px] mx-auto mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <h2
          className="text-center mb-3 text-3xl font-bold"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.35)" }}
        >
          {programs.heading}
        </h2>
        <p
          className="text-gray-300 text-justify lg:mb-20"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.25)" }}
        >
          {programs.text}
        </p>
      </motion.div>

      {/* Sections */}
      <div className="sm:space-y-10 md:space-y-13 lg:mt-10">
        {sections.map((section, index) => {
          const isOdd = index % 2 === 1;

          return (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row gap-5 lg:gap-7 w-full ${
                isOdd ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ amount: 0.3 }}
            >
              {/* Image */}
              <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: isOdd ? -50 : 50 }} // flipped
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ amount: 0.3 }}
              >
                <img
                  src={section.img}
                  alt={section.content.head}
                  className="w-full h-full object-cover rounded-sm lg:w-full"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                className="lg:space-y-5 space-y-3 w-full lg:w-1/2 lg:mt-3"
                initial={{ opacity: 0, x: isOdd ? 50 : -50 }} // flipped
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                viewport={{ amount: 0.3 }}
              >
                <h3
                  className="text-xl font-bold"
                  style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.45)" }}
                >
                  {section.content.head}
                </h3>
                <p
                  className="text-justify md:tracking-normal sm:tracking-normal text-gray-200"
                  style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.25)" }}
                >
                  {section.content.text}
                </p>
                <motion.div
                  className="w-1/12 h-[3px] bg-blue-200 rounded-full lg:mt-8 hover:w-3/12 transition-all duration-700 ease-out cursor-pointer"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ amount: 0.3 }}
                ></motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;


