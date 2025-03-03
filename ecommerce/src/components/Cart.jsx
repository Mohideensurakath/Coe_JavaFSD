// import { useCart } from "../context/CartContext";

// const Cart = () => {
//     const { cart, dispatch } = useCart();

//     const total = cart.reduce((acc, item) => acc + item.price, 0);

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
//             {cart.length === 0 ? <p>Your cart is empty</p> : (
//                 <div>
//                     {cart.map((item) => (
//                         <div key={item.id} className="border p-2 flex justify-between">
//                             <p>{item.name} - ${item.price}</p>
//                             <button
//                                 className="bg-red-500 text-white px-2 rounded"
//                                 onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                     <h2 className="text-xl mt-4">Total: ${total}</h2>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Cart;
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();
  
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? <p>Cart is empty.</p> : null}
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center p-2 bg-white shadow-md rounded-lg mb-2">
          <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button
            className="bg-red-500 hover:bg-red-700"
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
          >
            Remove
          </button>
        </div>
      ))}
      <h3 className="text-lg font-bold mt-4">Total: ₹{totalPrice}</h3>
    </div>
  );
};

export default Cart;
