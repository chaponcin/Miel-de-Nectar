function login() {
  return (
    <div className="text-center">
      <h1>Login</h1>
        <br />
      <h2>Adresse email</h2>
        <input type="text" />
        <br />
        <br />
        <h2>Mot de passe</h2>
        <input type="password" />
        <br />
        <br />
        <button>Se connecter</button>
        <br />
        <br />

      <h2>
        <a href="/register">Register</a>
      </h2>
    </div>
  );
}

export default login;