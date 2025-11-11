// import React, { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

// const Cart = () => {
//   const { cart, removeFromCart } = useContext(CartContext);

//   return (
//     <div className=" mt-20 p-4 text-black rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         cart.map((item, index) => (
//           <div key={index} className="flex justify-between items-center mb-3 border-b pb-2">
//             <img src={item.img} alt="" />
//             <span>
//               {item.description} ({item.selectedSize})
//             </span>
//             <span>{item.price}</span>
//             <button
//               onClick={() => removeFromCart(item.id, item.selectedSize)}
//               className="bg-red-500 text-white px-2 py-1 rounded"
//             >
//               Remove
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;




import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="mt-12 xs:mt-22 md:mt-2 lg:mt-25 p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-white max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white border-b border-white/20 pb-4">
        <span className="mr-2">🛒</span> Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-lg text-center py-10 text-white/60">
          Looks like your cart is a little light! Start adding some great items!
        </p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex items-center w-full sm:w-2/3 mb-3 sm:mb-0">
                <img
                  src={item.img}
                  alt={item.description}
                  className="w-16 h-16 object-cover rounded-lg mr-4 border border-white/20"
                />
                
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-white">
                    {item.description}
                  </span>
                  <span className="text-sm text-white/50">
                    Size: {item.selectedSize}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end w-full sm:w-1/3">
                {/* <span className="text-xl font-bold text-white mr-4">
                  ${item.price.toFixed(2)}
                </span> */}
                
                <button
                  onClick={() => removeFromCart(item.id, item.selectedSize)}
                  className="bg-red-500/80 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-all duration-200"
                  aria-label={`Remove ${item.description} from cart`}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 pt-6 border-t border-white/20 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">
              Subtotal:
            </h3>
            {/* <span className="text-3xl font-bold text-white">
              ${cartTotal.toFixed(2)}
            </span> */}
          </div>

          <button
            className="w-full mt-6 py-3 rounded-lg text-lg font-semibold text-white transition-all duration-200 bg-white/10 hover:bg-white/20 border border-white/20"
          >
            Proceed to Checkout →
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
