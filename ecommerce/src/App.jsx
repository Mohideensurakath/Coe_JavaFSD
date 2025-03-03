// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import CartPage from "./pages/CartPage";
// import { CartProvider } from "./context/CartContext";

// function App() {
//     return (
//         <CartProvider>
//             <Router>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/cart" element={<CartPage />} />
//                 </Routes>
//             </Router>
//         </CartProvider>
//     );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
