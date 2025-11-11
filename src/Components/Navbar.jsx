
import React, { useState, useContext  } from "react";
import { motion } from "framer-motion";
import data from "../data/gym";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Icon } from "lucide-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { cart } = useContext(CartContext); 

  return (
    <nav className="p-3 xs:p-8 flex md:justify-around md:w-full justify-between lg:justify-around items-center md:px-10 sm:w-full fixed top-0 left-0  w-full bg-gradient-to-r from-[#1a0a7d] via-[#4b2e91] to-[#036d82] shadow-lg z-50">

      {/* info div */}
      <div className="w-full lg:px-33 absolute top-1 lg:left-5 left-1 hidden xs:flex lg:justify-between justify-center gap-[6px] py-0 px-6 flex-wrap sm:justify-between pointer-events-none">
        {/* Phn Mail Address  */}
        <ul className="flex flex-wrap lg:gap-6 md:gap-4 sm:gap-3 gap-[6px] justify-center" >
          {
            data.Footer.contactinof.map((item, index)=> {
              let Icon = item.icon
              return (
                <li className="flex gap-2 items-center lg:text-[15px] md:text-[15px] sm:text-[13px] text-[13px] " >
                  <Icon className=" text-amber-400 " />
                  {item.info}
                </li>
              )
            })
          }
        </ul>

        <ul className="flex gap-2 lg:gap-4 md:gap-3 sm:gap-3 " >
          {
            data.shop.shopsoical.social.map((link, index)=> {
              return (
                <li>
                  <Link>
                    <img src={link.simg} className="w-8" />
                  </Link>
                </li>
              )
            })
          }
        </ul>

      </div>

      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }} // from left
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ amount: 0.3 }}  
        className="lg:mt-5 sm:mt-3 mt-8 md:mt-5  "     
      >
        <Link to={"/"} >
         <h2 className=" text-[14px] sm:text-[16px] md:text-2xl font-bold">{data.name}</h2>
        </Link>
      </motion.div>

      <div className=" flex gap-7 md:gap-8 text-[16px] items-center lg:mt-5 sm:mt-3 mt-8 md:mt-5   ">
        {/* Desktop links */}
        {data.navbar.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.ul
              key={index}
              className="md:hidden lg:flex lg:gap-2 items-center gap-1 cursor-pointer hidden"
              initial={{ opacity: 0, x: 50 }} // from right
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ amount: 0.3 }}
            >
            <Link to={item.link} className="flex items-center gap-[6px] " >
              { Icon && <Icon size={24} />}
              <li className="hover:text-cyan-400 hover:underline underline-offset-8">
                {item.name}
              </li>


             {item.name === "Cart" && cart.length > 0 && (
                  <span className="absolute top-4 right-50 lg:top-[38px] lg:right-47 xl:right-62 md:right-55 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cart.length}
                  </span>
              )}

            </Link>  
            </motion.ul>
          );
        })}

        {/* Mobile links (first 3) */}
        {data.navbar.slice(0, 2).map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.ul
              key={index}
              className="flex items-center gap-2 cursor-pointer md:block lg:hidden text-[14px] "
              initial={{ opacity: 0, x: 50 }} // from right
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ amount: 0.3 }}
            >
              <Link to={item.link} className="flex items-center gap-[3px]" >
               { Icon && <Icon/> }
              <li className="hover:text-cyan-400 hover:underline underline-offset-8">
                {item.name}
              </li>
              </Link>
            </motion.ul>
          );
        })}

        {/* Mobile dropdown toggle */}
        <BsThreeDotsVertical
          className="block lg:hidden cursor-pointer text-xl z-[9999]"
          onClick={() => setToggle(!toggle)}   
        />

        {/* Dropdown links */}
        {toggle && (
          <motion.ul
            className="flex flex-col gap-3 absolute top-19 sm:top-25 md:top-23 md:right-24 right-6 lg:hidden cursor-pointer"
            initial={{ opacity: 0, x: 50 }} // from right
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            {data.navbar.slice(2, 5).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={index}
                  className="flex items-center gap-2 hover:text-cyan-400 hover:underline underline-offset-8"
                  initial={{ opacity: 0, x: 50 }} // from right
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ amount: 0.3 }}
                >
                  <Link to={item.link} className="flex items-center gap-[6px]" >
                  {Icon && <Icon /> }
                  {item.name}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
