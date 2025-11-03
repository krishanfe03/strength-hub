import React from 'react'

const ProtienLoad = ({ selectProducts, setSelectProducts, loading }) => {
  return (
    <div>

      {
        selectProducts && !loading && (
          <div>

            <div>
              <button>
                &times;
              </button>


              <img src={selectProducts.img} alt='Product image' />

              <h2>{selectProducts.description}</h2>


            </div>

      

          </div>          
        )
      }
      
    </div>
  )
}

export default ProtienLoad
