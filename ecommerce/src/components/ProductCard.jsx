// import { useCart } from "../context/CartContext";

// const ProductCard = ({ product }) => {
//     const { dispatch } = useCart();

//     return (
//         <div className="border p-4 rounded-lg shadow-md">
//             <h2 className="text-lg font-bold">{product.name}</h2>
//             <p className="text-gray-600">${product.price}</p>
//             <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
//                 onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
//             >
//                 Add to Cart
//             </button>
//         </div>
//     );
// };

// export default ProductCard;

import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded-md" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">₹{product.price}</p>
      <button
        className="mt-2"
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
