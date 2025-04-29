import { motion } from "framer-motion";

function Register() {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold mb-6"
      >
        Inscription
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-80 bg-white p-6 rounded-lg shadow-lg"
      >
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left">Adresse email</label>
            <input type="email" id="email" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-left">Mot de passe</label>
            <input type="password" id="password" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="password-confirm" className="block text-left">Confirmer le mot de passe</label>
            <input type="password" id="password-confirm" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-left">Adresse</label>
            <input type="text" id="address" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-left">Ville</label>
            <input type="text" id="city" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="zip" className="block text-left">Code postal</label>
            <input type="text" id="zip" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-left">Téléphone</label>
            <input type="text" id="phone" className="w-full p-2 border rounded-lg" />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="conditions" className="mr-2" />
            <label htmlFor="conditions">J'accepte les conditions d'utilisation</label>
          </div>
          <button className="w-full p-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition">
            S'inscrire
          </button>
          <p className="mt-4">
            <a href="/login" className="text-yellow-500 hover:underline">Vous avez déjà un compte ?</a>
          </p>
        </form>
      </motion.div>
    </div>
    
  );
}

export default Register;
