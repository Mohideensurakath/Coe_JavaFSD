// import React from "react";
// import { useCart } from "../context/CartContext";

// const products = [
//   {
//     id: 1,
//     name: "Nike Air Max",
//     price: "₹9,999",
//     image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
//   },
//   {
//     id: 2,
//     name: "Adidas Ultraboost",
//     price: "₹12,999",
//     image: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg",
//   },
//   {
//     id: 3,
//     name: "Apple MacBook Pro",
//     price: "₹1,29,999",
//     image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
//   },
//   {
//     id: 4,
//     name: "Samsung Galaxy S23",
//     price: "₹79,999",
//     image: "https://images.pexels.com/photos/325864/pexels-photo-325864.jpeg",
//   },
//   {
//     id: 5,
//     name: "Sony WH-1000XM5",
//     price: "₹29,999",
//     image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
//   },
//   {
//     id: 6,
//     name: "Rolex Submariner",
//     price: "₹12,50,000",
//     image: "https://th.bing.com/th/id/OIP.ydiBiiz8EHqqroB3mRTWPAHaFu?w=316&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   },
//   {
//     id: 7,
//     name: "Canon EOS R5",
//     price: "₹3,89,999",
//     image: "https://th.bing.com/th/id/OIP.hr3o91Q6fi1mhd8uZsidgAHaE8?w=224&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   },
//   {
//     id: 8,
//     name: "Gaming PC RTX 4090",
//     price: "₹4,99,999",
//     image: "https://th.bing.com/th/id/OIP.ZyjIEyOjkAYYN3WgQyD_EQHaI1?w=180&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   },
// ];

// const Home = () => {
//   const { addToCart } = useCart();

//   return (
//     <div>
//       <h1>🛒 Shop Now</h1>
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p className="price">{product.price}</p>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Sonata Watch", price: 2500 , image: "https://th.bing.com/th?id=OIP.9ecmoHK9XnAPwm65srSrkQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" },
  { id: 2, name: "Rolex Submariner", price: 1050000, image: "" },
];

const Home = () => (
  <div className="container mx-auto mt-4">
    <h1 className="text-2xl font-bold">Products</h1>
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Home;
