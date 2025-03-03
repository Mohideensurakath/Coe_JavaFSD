// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./styles/index.css"; 


// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
