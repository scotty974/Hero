import {supabase}  from "$lib/supabaseClient.js";

export default async function register(email, password) {
    try{
        await supabase.auth.signUp({
            email: email,
            password: password,
          });
    }catch(error){
        console.log(error)
        return error
    }
  
}
