import React from "react";
import data from "../data/gym";

const Video = () => {
  const video = data.video;

  return (
    <div className="md:w-full sm:w-ful my-8">
      {/* Responsive container */}
      <div className=" w-full">
        <iframe
          className="w-full md:h-[650px] sm:h-[440px] shadow-lg opacity-75 "
          src={`${video.embedUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${video.id}&start=7`}
          title={video.title}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
