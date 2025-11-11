import React from "react";
import data from "../data/gym";

const Video = () => {
  const video = data.video;

  return (
       
      <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">     
      
        
        <video
          className="w-full md:h-[650px] sm:h-[440px] object-cover"
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        ></video>

        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
          
        
          <h2 className="text-[14px] sm:text-lg md:text-4xl font-bold mb-4 px-4 tracking-tight">
            <span className="  bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-lg">
              {video.title}
            </span>
          </h2>
          
         
          <div className="max-w-2xl mx-4 backdrop-blur-sm bg-white/10 rounded-xl px-6 py-3 border border-white/20 shadow-lg">
            <p className="text-[10px] sm:text-lg md:text-xl text-gray-100 leading-relaxed">
              {video.subtitle}
            </p>
          </div>
          
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-6 opacity-60"></div>
          
          
        </div>

       
      </div>

   
  );
};

export default Video;
