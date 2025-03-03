// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const Navbar = () => {
//     const { cart } = useCart();

//     return (
//         <nav className="bg-blue-600 p-4 text-white flex justify-between">
//             <Link to="/" className="text-xl font-bold">E-Commerce</Link>
//             <Link to="/cart" className="text-lg">Cart ({cart.length})</Link>
//         </nav>
//     );
// };

// export default Navbar;


import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="text-lg font-bold">E-Commerce</Link>
      <Link to="/cart" className="text-lg">
        Cart ({cart.length})
      </Link>
    </nav>
  );
};

export default Navbar;
