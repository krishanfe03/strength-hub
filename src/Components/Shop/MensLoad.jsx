
import React, { useState, useContext } from 'react'
import data from "../../data/gym"
import { CartContext } from "../../context/CartContext";


const MensLoad = ({ selectedProducts, setSelectedProduct, loading }) => {

  const [highlight, setHighlight] = useState(null)
  const { addToCart } = useContext(CartContext);

  
  const handleClick = (size) => {
    setHighlight(size)
  }

  // for handleAdd To Cart 
  const handelAddToCart = () => {
    if (!highlight) {
      alert("Please select a size first!");
      return;
    }

    addToCart({ ...selectedProducts, selectedSize: highlight });
    setSelectedProduct(null); // close modal after adding
  };

  return (
    <div>
      {/* Products details modal */}
      {
        selectedProducts && !loading && (
          <div className='fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4' >
            <div className='bg-white rounded-2xl max-w-[520px] w-full shadow-2xl overflow-hidden' >
              
              {/* cross button */}
              <div className='flex justify-end p-4 pb-0'>
                <button
                  className="text-gray-400 hover:text-gray-600 text-3xl font-light transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100" 
                  onClick={()=> setSelectedProduct(null)} >
                  &times;
                </button>
              </div>
              
              <div className='px-8 pb-8'>
                {/* img  */}
                <img 
                  src={selectedProducts.img} 
                  alt="product img"
                  className="w-full h-[320px] object-contain mb-6 rounded-xl" 
                />
                
                {/* product heading  */}
                <h2 className='text-2xl font-bold mb-3 text-gray-900' >{selectedProducts.description}</h2>

                {/* product text  */}
                <p className='text-xl font-bold mb-5 text-gray-900' > 
                  <span className='text-gray-500 font-normal text-base' >Price: </span>  
                  {selectedProducts.price}
                </p>

                {/* sizes  */}
                <div className='flex gap-2 text-gray-600 items-center mb-6 flex-wrap' >
                  <span className='text-gray-500 font-medium'>Sizes:</span>
                  {
                    selectedProducts?.sizes?.map((size, index)=> {
                      return (
                        <span key={index} className={`border-2 border-gray-200 px-4 py-2 rounded-lg text-gray-700 font-medium hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all cursor-pointer ${highlight === size ? "bg-black text-white border-teal-400 " : "" } `}
                        onClick={() => handleClick(size)}
                        >
                        {size}
                        </span>
                      )
                    })
                  }
                </div>

                {/* buttons */}
                <div className='flex gap-3'>
                  <button className='flex-1 bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md'>
                    {data.shop.menproducts.btnBuy}
                  </button>
                  
                  <button 
                  className='flex-1 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all shadow-md'
                  onClick={handelAddToCart}
                 
                  >
                    {data.shop.menproducts.AddCart}
                  </button>
                </div>




              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default MensLoad

