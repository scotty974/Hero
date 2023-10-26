<script>
  import connexion from "./connexion.js";
  let email = "";
  let password = "";

  async function handleConnexion(event) {
    try {
      event.preventDefault();
      await connexion(email, password);
    } catch (error) {
      console.log("erreur de connection", error);
    
    }
  }
</script>

<svelete:head>
  <title>Connexion</title>
</svelete:head>

<section class="container">
  <div class="row">
    <div
      class="col-12 content d-flex flex-column justify-content-center align-items-center"
    >
      <h1 class="my-5">Se connecter</h1>
      <form class="d-flex flex-column" on:submit={handleConnexion}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          bind:value={email}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          class="my-4"
          bind:value={password}
          required
        />
        <button>Se connecter</button>
      </form>
   
      <a href="/register" class="my-5">Pas encore de compte ?</a>
    </div>
  </div>
</section>
