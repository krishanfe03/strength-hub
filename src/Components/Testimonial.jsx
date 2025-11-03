import React, { useRef, useState } from "react";

// Sample data for demonstration
const data = {
  Testimonial: {
    bgimg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop",
    heading: "What Our Members Say",
    main_cntnt: [
      {
        text: "This gym has completely transformed my fitness journey. The trainers are incredibly supportive and the equipment is top-notch. I've never felt more motivated to reach my goals!",
        name: "Sarah Johnson"
      },
      {
        text: "Joining this gym was the best decision I've made for my health. The community is amazing and the variety of classes keeps me engaged. Highly recommend to anyone serious about fitness!",
        name: "Mike Chen"
      },
      {
        text: "The personalized training programs and friendly atmosphere make working out here a joy. I've seen incredible results in just a few months. Couldn't be happier with my choice!",
        name: "Emily Rodriguez"
      }
    ]
  }
};

const Testimonial = () => {
  const contentRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const showContent = (index) => {
    contentRefs.current.forEach((el) => {
      if (el) el.style.display = "none";
    });

    if (contentRefs.current[index]) {
      contentRefs.current[index].style.display = "block";
    }

    setActiveIndex(index);
  };

  return (
    <div 
      className="relative bg-cover bg-no-repeat bg-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full rounded-sm sm:rounded-md overflow-hidden" 
      style={{backgroundImage: `url(${data.Testimonial.bgimg})`}}
    >
      {/* Overlay for fade effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-white">
          {data.Testimonial.heading}
        </h2>

        {/* Testimonial content */}
        <div className="min-h-[200px] sm:min-h-[220px] md:min-h-[180px] lg:min-h-[160px] flex items-center justify-center max-w-[900px] lg:max-w-[1100px] mx-auto text-white mb-6 sm:mb-8">
          {data.Testimonial.main_cntnt.map((item, index) => (
            <div
              key={index}
              ref={(el) => (contentRefs.current[index] = el)}
              className={`w-full text-center sm:text-justify md:text-justify transition-all duration-700 ease-in-out px-2 sm:px-4 md:px-6
                ${activeIndex === index ? "opacity-100 translate-y-0 relative" : "opacity-0 -translate-y-3 absolute"}`}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                {item.text}
              </p>
              <h4 className="text-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                {item.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 sm:gap-3 pb-2 sm:pb-0">
          {data.Testimonial.main_cntnt.map((_, id) => (
            <button
              key={id}
              onClick={() => showContent(id)}
              className={`h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 cursor-pointer rounded-full focus:outline-none transition-all duration-300 hover:scale-125 ${
                activeIndex === id ? "bg-blue-400 scale-110" : "bg-gray-400 hover:bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;