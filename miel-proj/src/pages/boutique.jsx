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
    <div className="flex flex-col items-center justify-center pt-[150px]">
      <motion.h1 className="text-3xl font-bold mb-6">Boutique</motion.h1>

      <div className="flex items-center gap-4 p-4 rounded-lg shadow-lg w-80 bg-white">
        <img src="./src/assets/pot-accueil.svg" alt="Pot de miel" className="w-24 h-24" />

        <div>
          <h2 className="text-lg font-bold">Pot de Miel</h2>

          <div className="flex items-center gap-2 mt-2">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 py-1 bg-gray-200 rounded-md">-</button>
            <span className="text-lg">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-2 py-1 bg-gray-200 rounded-md">+</button>
          </div>

          <p className="mt-2 text-xl font-semibold">{totalPrice.toFixed(2)} €</p>

          <button
            onClick={() => {
              addToCart(quantity); // Add to global cart
              navigate("/pannier"); // Redirect to pannier
            }}
            className="mt-3 bg-[#808000] hover:bg-[#6e6e00] text-white font-bold py-2 px-4 rounded transition"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
