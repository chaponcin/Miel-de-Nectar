import { motion } from "framer-motion";

function Home() {
  return (
    <div className="text-center flex items-center justify-center">
      <div className="relative">
        {/* Animation de l'image qui se révèle de bas en haut */}
        <motion.img
          src="./src/assets/pot-accueil.svg"
          alt="react logo"
          initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 3, ease: "easeOut" }}
        />

        {/* Box à droite de l'image */}
        <div className="absolute top-1/2 left-full ml-10 p-30 bg-gray-100 rounded-lg shadow-lg transform -translate-y-1/2">
          <h2 className="text-lg font-bold">Informations</h2>
          <p>Info</p>
        </div>
      </div>
    </div>
  );
}


export default Home;
