import { motion } from "framer-motion";

function Home() {
  return (
    <div className="text-center">
      <h1>Accueil</h1>

      {/* Animation de l'image qui se révèle de bas en haut */}
      <motion.img
        src="./src/assets/pot-accueil.svg"
        alt="react logo"
        initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 3, ease: "easeOut" }}
      />
    </div>
  );
}

export default Home;
