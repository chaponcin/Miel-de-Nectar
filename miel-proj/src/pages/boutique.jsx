import { useState } from "react";
import { motion } from "framer-motion";

export default function HoneyProduct() {
  const pricePerJar = 8; // Prix unitaire en euros
  const [quantity, setQuantity] = useState(1);

  // Calcul du prix total
  const totalPrice = pricePerJar * quantity;

  return (
    <div className="flex flex-col items-center justify-center pt-[150px]">
      {/* Titre avec effet d'apparition */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold mb-6"
      >
        Boutique
      </motion.h1>

      <div className="flex items-center gap-4 p-4 rounded-lg shadow-lg w-80 bg-white">
        {/* Image du produit */}
        <img
          src="./src/assets/pot-accueil.svg"
          alt="Pot de miel"
          className="w-24 h-24 object-cover rounded-lg"
        />

        {/* Infos du produit */}
        <div>
          <h2 className="text-lg font-bold">Pot de Miel</h2>

          {/* Sélecteur de quantité */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1 bg-gray-200 rounded-md"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1 bg-gray-200 rounded-md"
            >
              +
            </button>
          </div>

          {/* Prix total */}
          <p className="mt-2 text-xl font-semibold">{totalPrice.toFixed(2)} €</p>

          {/* Bouton Ajouter */}
          <button
            onClick={() => {
              // À remplacer par la logique de panier réelle
              console.log(`Ajouté ${quantity} pot(s) au panier.`);
            }}
            className="mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
