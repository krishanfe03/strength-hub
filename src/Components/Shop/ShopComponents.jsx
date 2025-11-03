import React, { useState } from "react";
import data from "../../data/gym";
import Mens from "./Mens";
import Womens from "./Womens";
import Cake from "./Cake";
import Protien from "./Protien";

const ShopComponents = () => {
  const tabs = data.shop.menu;

  const [currentTab, setCurrentTab] = useState(tabs[0].name)

  // map id or keys to component
  const componentMap = {
    Mens : <Mens />,
    Womens: <Womens /> ,
    Cake : <Cake />,       
  }


  function handleOnclick(getlabel) {
    setCurrentTab(getlabel)
  }

  return (
    <div>

      <div className="flex gap-5 items-center justify-center w-11/12 max-w-[260px] mx-auto mt-10 mb-10 p-4" >

        {tabs.map((tabitem, index) => {
          return (
            <div key={tabitem.id} className={`p-4 px-6 rounded-[4px] cursor-pointer ${currentTab === tabitem.name ? 'bg-gradient-to-b from-[#190598] via-[#2e1568] to-[#0a5268]' : 'text-gray-400 hover:text-white' }  `}
            onClick={()=> handleOnclick(tabitem.name)} 
            >
              <span className="font-bold text-[17px] " > {tabitem.name} </span>
            </div>
          );
        })}

      </div>


      <div>
        {
          componentMap[currentTab]
        }
      </div>





    </div>
  );
};

export default ShopComponents;
