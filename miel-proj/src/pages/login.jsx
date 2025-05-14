import { motion } from "framer-motion";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // data.token, data.user
        Cookies.set("userToken", data.token, { path: "/" });
      
        login(data.token); // ⬅️ Passe aussi les infos de l'utilisateur
        navigate("/");

      } else {
        const res = await response.json();
        setError(res.error || "Identifiants incorrects.");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[150px]">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-bold mb-6"
      >
        Connexion
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-80 bg-white p-6 rounded-lg shadow-lg"
      >
        <form onSubmit={handleLogin}>
          {error && <div className="text-red-500 mb-2">{error}</div>}

          <h2 className="text-lg mb-2">Adresse email</h2>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <h2 className="text-lg mt-4 mb-2">Mot de passe</h2>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />

          <button
            type="submit"
            className="w-full mt-6 p-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition"
          >
            Se connecter
          </button>

          <h2 className="text-center mt-4">
            <a href="/register" className="text-yellow-500 hover:underline">
              S'inscrire
            </a>
          </h2>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
