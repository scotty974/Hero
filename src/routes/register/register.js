import {supabase}  from "$lib/supabaseClient.js";
let redirectUrl = "/";

export default async function register(email, password) {
    try{
        await supabase.auth.signUp({
            email: email,
            password: password,
          });
          window.location.href = redirectUrl;
    }catch(error){
        console.log(error)
        return error
    }
  
}
