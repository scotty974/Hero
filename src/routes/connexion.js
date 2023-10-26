import { supabase } from "$lib/supabaseClient.js";

export default async function connexion(email, password) {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    return error
      ? (console.log("Erreur de connexion : ", error.message), error)
      : (console.log("Connexion Réussi : ", user), user);
  } catch (error) {
    console.log("Erreur de connection", error);
    return error;
  }
}
