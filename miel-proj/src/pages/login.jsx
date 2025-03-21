function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Connexion</h1>

      <div className="w-80 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg mb-2">Adresse email</h2>
        <input 
          type="text" 
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        
        <h2 className="text-lg mt-4 mb-2">Mot de passe</h2>
        <input 
          type="password" 
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button className="w-full mt-6 p-2 bg-blue-500 text-black rounded-lg hover:bg-blue-600 transition">
          Se connecter
        </button>

        <h2 className="text-center mt-4">
          <a href="/register" className="text-yellow-500 hover:underline">S'inscrire</a>
        </h2>
      </div>
    </div>
  );
}

export default Login;
