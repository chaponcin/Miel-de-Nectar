import { useCart } from "../contexts/CartContext";
import pot250g from "../assets/250g.png";

function Pannier() {
  const { cartItem, clearCart } = useCart();
  const pricePerUnit = 8;
  const total = cartItem ? cartItem.quantity * pricePerUnit : 0;

  return (
    <div className="pt-[150px] px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Mon panier</h1>

      {cartItem ? (
        <div className="flex flex-wrap justify-center gap-6">
          {/* Product card */}
          <div className="relative w-64 h-64 border rounded-lg shadow-md p-4 flex flex-col">
            <button onClick={clearCart} className="absolute top-2 right-2 text-red-500 text-xl font-bold">&times;</button>

            <div className="flex flex-row items-center gap-4">
              <img src={pot250g} alt="Pot de miel" className="w-24 h-24" />
              <div>
                <p className="text-lg font-semibold">8,00 €</p>
                <p>Miel artisanal 250g</p>
                <p>Qté: {cartItem.quantity}</p>
              </div>
            </div>
          </div>

          {/* Total Box */}
          <div className="relative border border-gray-300 rounded-lg p-6 w-72 shadow-md bg-white">
            <button onClick={clearCart} className="absolute top-2 right-2 text-red-500 text-xl font-bold">&times;</button>

            <div className="flex justify-between text-lg mb-2">
              <p>Sous-total</p>
              <p className="font-semibold">{total.toFixed(2)} €</p>
            </div>

            <div className="flex justify-between text-lg mb-6">
              <p>Livraison Standard</p>
              <p>Gratuit</p>
            </div>

            <div className="flex justify-between text-xl font-bold mb-4">
              <p>TOTAL</p>
              <p>{total.toFixed(2)} €</p>
            </div>

            <button className="bg-[#808000] hover:bg-[#6e6e00] text-white font-bold py-2 px-6 rounded w-full">
              Paiement
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500 mt-12">Panier vide</p>
      )}
    </div>
  );
}

export default Pannier;
