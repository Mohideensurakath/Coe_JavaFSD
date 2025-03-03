// import { createContext, useReducer, useContext } from "react";

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_TO_CART":
//             return [...state, action.payload];
//         case "REMOVE_FROM_CART":
//             return state.filter(item => item.id !== action.payload);
//         default:
//             return state;
//     }
// };

// export const CartProvider = ({ children }) => {
//     const [cart, dispatch] = useReducer(cartReducer, []);

//     return (
//         <CartContext.Provider value={{ cart, dispatch }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);

import { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  cart: [],
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { cart: state.cart.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
