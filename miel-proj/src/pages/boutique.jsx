import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function HoneyProduct() {
  const pricePerJar = 8;
  const [quantity, setQuantity] = useState(1);
  const totalPrice = pricePerJar * quantity;
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center pt-[130px] px-6 md:px-16">
      {/* Title with animation */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-center text-[#333] mb-8"
      >
        Découvrez notre Miel
      </motion.h1>

      {/* Product Card */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 rounded-lg shadow-lg w-full md:w-[550px] bg-white">
        <img
          src="./src/assets/pot-accueil.svg"
          alt="Pot de miel"
          className="w-32 h-32 object-cover rounded-lg shadow-md"
        />

        {/* Product Info */}
        <div className="flex flex-col items-start space-y-5">
          <h2 className="text-2xl font-bold text-[#808000]">Miel artisanal 250g</h2>

          {/* Quantity Control */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-5 py-2 bg-[#808000] text-white rounded-md shadow-lg hover:bg-[#6e6e00] transition duration-300 ease-in-out"
            >
              -
            </button>
            <span className="text-2xl font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-5 py-2 bg-[#808000] text-white rounded-md shadow-lg hover:bg-[#6e6e00] transition duration-300 ease-in-out"
            >
              +
            </button>
          </div>

          {/* Price Display */}
          <p className="text-xl font-semibold text-[#333] mt-4">{totalPrice.toFixed(2)} €</p>

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              addToCart(quantity); // Add to global cart
              navigate("/pannier"); // Redirect to panier page
            }}
            className="mt-4 bg-[#808000] hover:bg-[#6e6e00] text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out w-full"
          >
            Ajouter au Panier
          </button>
        </div>
      </div>
    </div>
  );
}
