import React from "react";
import InputField from "../Components/InputField";
import data from "../data/gym";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleChange = (e) => {};

  return (
    <div>
      {/* Banner */}
      <div className="relative bg-no-repeat bg-cover lg:bg-center bg-center w-full h-[300px] lg:h-[620px] lg:mt-[80px] md:h-[500px] sm:h-[300px] mt-12"
       style={{ backgroundImage : `url(${data.Contact.main.bgimg})` }}
      >
        <h2
          className="absolute top-[40%] lg:right-[6%] sm:right-[8%] right-[4%]  text-xl sm:text-4xl md:text-5xl font-bold text-white"
          style={{ textShadow: "1px 2px 0px rgba(0,0,0,0.55)" }}
        >
          The StrenGth Hub..
        </h2>
        <h3 className="absolute top-[55%] lg:top-[52%] lg:right-[11%] 
          md:right-[10%] sm:right-[8%] right-[4%] text-sm sm:text-xl md:text-2xl font-bold md:top-[55%]">
          WE'D LOVE TO HEAR FROM YOU
        </h3>
      </div>

      {/* Contact Form Section */}
      <div className="mt-20 w-11/12 max-w-[1000px] md:min-h-[600px] mx-auto flex flex-col lg:flex-row p-4 gap-6 bg-gradient-to-b from-[#12046d] via-[#40267d] to-[#02495f] shadow-sm shadow-black/30 rounded-[2px]">
        {/* Contact details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {data.Contact.main.heading}
            </h1>
            <p className="text-gray-400">{data.Contact.main.text}</p>
          </div>

          <div>
            <p>{data.Contact.social.head}</p>
            <div className="grid grid-cols-3 gap-3 items-center w-3/4 sm:w-1/2">
              {data.Contact.social.icon.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`Social-${index}`}
                  className="cursor-pointer w-8 sm:w-10"
                />
              ))}
            </div>
          </div>

          {/* Mail, Number, Text */}
          <div className="space-y-6 mt-8">
            {data.Contact.connect.map((item, index) => {
              const Icon = item.img;
              return (
                <div
                  key={index}
                  className="p-2 flex items-center justify-between rounded-[2px] overflow-hidden w-full sm:w-[270px] md:w-[290px] lg:w-[380px] shadow-sm shadow-black/20"
                >
                  <div>
                    <p className="text-gray-400">{item.head}</p>
                    <Link>{item.mail}</Link>
                  </div>
                  <Icon className="text-gray-400" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <form className="w-full lg:w-1/2">
          <div className="space-y-8">
            {/* Row 1 */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row">
              {data.Contact.inputs.slice(0, 2).map((item, index) => (
                <InputField
                  key={index}
                  name={item.name}
                  label={item.name}
                  type={item.type}
                  onChange={handleChange}
                  placeholder={item.placeholder}
                />
              ))}
            </div>

            {/* Row 2 */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row">
              {data.Contact.inputs.slice(2, 4).map((item, index) => (
                <InputField
                  key={index}
                  name={item.name}
                  label={item.name}
                  type={item.type}
                  onChange={handleChange}
                  placeholder={item.placeholder}
                />
              ))}
            </div>

            {/* Row 3 */}
            <div>
              {data.Contact.inputs.slice(4, 5).map((item, index) => (
                <InputField
                  key={index}
                  name={item.name}
                  label={item.name}
                  type={item.type}
                  onChange={handleChange}
                  placeholder={item.placeholder}
                />
              ))}
            </div>

            {/* Textarea */}
            <div>
              {data.Contact.inputs.slice(5, 6).map((item, index) => (
                <InputField
                  key={index}
                  name={item.name}
                  label={item.name}
                  type={item.type}
                  onChange={handleChange}
                  placeholder={item.placeholder}
                />
              ))}
            </div>

            <button
              type="submit"
              className="border border-slate-400 px-5 py-3 rounded-[2px] cursor-pointer block mx-auto"
            >
              {data.Contact.button}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;












