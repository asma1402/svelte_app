<script lang="ts">
import { auth } from '../../../firebase.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import { userObject, uid } from '../../../store.js';
import { onMount } from "svelte";

let email;
let password;
let user;
let hasError = false;
let errorMessage;

userObject.subscribe(value => {
	user = value;
});

const login = ()=> {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    hasError = false;
    errorMessage = '';
    const user = userCredential.user;
    userObject.update(u => u=user);
    uid.update(uid => uid=auth.uid);
    window.location.href = '/#/gpt';
  })
  .catch((error) => {
    hasError = true;
    errorMessage = error.message;
    console.log(error.code, errorMessage);
    
  });
};

</script>

<div class="container">
    <h1 style="font-size:20px;margin:5px;">Login</h1>
    
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" bind:value={email}  required>

    <label for="pass"><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  name="pass" bind:value={password} required>
    
    {#if hasError}
        <span style="color:red;display:block;">{errorMessage}</span>
    {/if}

    <button on:click="{login}">Login</button>
</div>

<style>

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: black;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
  margin:auto;
}

@media only screen and (max-width: 476px) {
    .container {
    width: 90%;
  }
}

@media only screen and (min-width: 475px),only screen and (min-width: 800px)  {
  .container {
    width: 60%;
  }
}

@media only screen and (min-width: 801px) {
  .container {
    width: 30%;
  }
}

</style>
