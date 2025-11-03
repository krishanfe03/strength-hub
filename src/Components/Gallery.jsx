// import React, { useRef } from "react";
// import data from "../data/gym";
// import { div, img } from "framer-motion/client";

// const Gallery = () => {
//   const LeftArrow = data.GallerySection.leftArrow;
//   const RightArrow = data.GallerySection.rightArrow;

//   // for left 
//   const scrollLeft = () => {
//     if(scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: -490,
//         behavior: "smooth",
//       })
//     }
//   }
  
//   // for right 
//   const scrollRight = () => {
//     if(scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: 490,
//         behavior: "smooth"
//       });
//     }
//   }

//   const scrollRef = useRef(null);

//   return (
//     <div className="mt-10 mb-20 " >

//       <h2 className="text-center text-3xl font-bold" style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.55)" }} >{data.GallerySection.Gallerycontent.heading}</h2>
//       <p className="text-center max-w-[700px] mx-auto mt-5 text-gray-300 " style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.35)" }} >{data.GallerySection.Gallerycontent.text}</p>

//       <div className=" relative flex">

//       <button
//        onClick={scrollLeft} 
//        className=" absolute left-51 top-1/2 cursor-pointer bg-gradient-to-b from-[#12046d] via-[#40267d] to-[#02495f] p-3 rounded-full shadow-sm shadow-black/60  ">
//         <LeftArrow size={30} />
//       </button>

//       {/* Scrollable Gallery  */}
//       <div
//         ref={scrollRef}
//         className="relative flex overflow-x-auto w-full max-w-[980px] mx-auto mt-10 rounded-sm scrollbar-none overflow-visible scroll-smooth  "
//       >
//         {data.GallerySection.GalleryImg.map((galleryitem, index) => {
//           return (
//             <div className="flex flex-col flex-shrink-0 ">
//               <div className="flex">
//                 {galleryitem.imgs.slice(0, 2).map((img, index) => {
//                   return (
//                     <img
//                       src={img}
//                       alt={`Gallery Image ${index} `}
//                       className="w-[490px] h-[310px]"
//                     />
//                   );
//                 })}
//               </div>

//               <div className="flex">
//                 {galleryitem.imgs.slice(2, 4).map((img, index) => {
//                   return (
//                     <img
//                       src={img}
//                       alt={`Gallery Image ${index} `}
//                       className="w-[490px] h-[310px]"
//                     />
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <button
//        onClick={scrollRight} 
//        className="absolute right-51 top-1/2 cursor-pointer bg-gradient-to-b from-[#12046d] via-[#40267d] to-[#02495f] p-3 rounded-full shadow-sm shadow-black/60 ">
//         <RightArrow size={30} />
//       </button>
//     </div>

//     </div>
    
//   );
// };

// export default Gallery;





import React, { useRef } from "react";
import data from "../data/gym";
import { div, img } from "framer-motion/client";

const Gallery = () => {
  const LeftArrow = data.GallerySection.leftArrow;
  const RightArrow = data.GallerySection.rightArrow;

  // for left 
  const scrollLeft = () => {
    if(scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -490,
        behavior: "smooth",
      })
    }
  }
  
  // for right 
  const scrollRight = () => {
    if(scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 490,
        behavior: "smooth"
      });
    }
  }

  const scrollRef = useRef(null);

  return (
    <div className="mt-10 mb-20 px-4" >

      <h2 className="text-center text-2xl md:text-3xl font-bold" style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.55)" }} >{data.GallerySection.Gallerycontent.heading}</h2>
      <p className="text-center max-w-[700px] mx-auto mt-5 text-gray-300 text-sm md:text-base" style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.35)" }} >{data.GallerySection.Gallerycontent.text}</p>

      <div className="relative flex">

      <button
       onClick={scrollLeft} 
       className="absolute left-2 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-b from-[#12046d] via-[#40267d] to-[#02495f] p-2 md:p-3 rounded-full shadow-sm shadow-black/60">
        <LeftArrow size={20} className="md:w-[30px] md:h-[30px]" />
      </button>

      {/* Scrollable Gallery  */}
      <div
        ref={scrollRef}
        className="relative flex overflow-x-auto w-full max-w-[980px] mx-auto mt-10 rounded-sm scrollbar-none overflow-visible scroll-smooth"
      >
        {data.GallerySection.GalleryImg.map((galleryitem, index) => {
          return (
            <div key={index} className="flex flex-col flex-shrink-0">
              <div className="flex">
                {galleryitem.imgs.slice(0, 2).map((img, imgIndex) => {
                  return (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`Gallery Image ${imgIndex}`}
                      className="w-[245px] h-[155px] md:w-[490px] md:h-[310px]"
                    />
                  );
                })}
              </div>

              <div className="flex">
                {galleryitem.imgs.slice(2, 4).map((img, imgIndex) => {
                  return (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`Gallery Image ${imgIndex}`}
                      className="w-[245px] h-[155px] md:w-[490px] md:h-[310px]"
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <button
       onClick={scrollRight} 
       className="absolute right-2 md:right-8 lg:right-16 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-gradient-to-b from-[#12046d] via-[#40267d] to-[#02495f] p-2 md:p-3 rounded-full shadow-sm shadow-black/60">
        <RightArrow size={20} className="md:w-[30px] md:h-[30px]" />
      </button>
    </div>

    </div>
    
  );
};

export default Gallery;
