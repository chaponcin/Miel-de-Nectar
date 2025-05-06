import { motion } from "framer-motion";

function User() {
  return (
    <div className="flex flex-col items-center justify-center">
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold mb-6"
      >
        Dashboard utilisateur
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-80 bg-white p-5 rounded-lg shadow-lg"
      >

        <h2 className="text-lg mb-2">Nom:</h2>
        <h2 className="text-lg mt-4 mb-2">Prénom:</h2>
        <h2 className="text-lg mt-4 mb-2">Adresse email:</h2>
        <h2 className="text-lg mt-4 mb-2">Adresse:</h2>
        <h2 className="text-lg mt-4 mb-2">Ville:</h2>
        <h2 className="text-lg mt-4 mb-2">Code postal:</h2>
        <h2 className="text-lg mt-4 mb-2">Téléphone:</h2>
        <h2 className="text-lg mt-4 mb-2">Date de naissance:</h2>


      </motion.div>
    </div>
  );
}

export default User;