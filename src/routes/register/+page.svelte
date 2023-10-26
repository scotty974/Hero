<script>
  import  register  from "../register/register.js";

  let mail = "";
  let password = "";


  function handleRegister(event) {
    event.preventDefault();
    register(mail, password);
  }
</script>

<svelete:head>
  <title>Register</title>
</svelete:head>

<section class="container">
  <div class="row">
    <div
      class="col-12 content d-flex flex-column justify-content-center align-items-center"
    >
      <h1 class="my-5">S'inscrire</h1>
      <form class="d-flex flex-column" on:submit={handleRegister}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          bind:value={mail}
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
      <a href="/" class="my-5">Déjà un compte ?</a>
    </div>
  </div>
</section>
