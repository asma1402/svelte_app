<script>
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase.js';
import { onMount } from "svelte";

let email;
let password;
let passwordConfirmation;
let showErrorPasswordMatch = false;
let errorMessage;
let showErrorRegister =false;

const register = ()=> {
  if (passwordConfirmation !== password) {
    showErrorPasswordMatch = true;
    return false;
  } else {
    showErrorPasswordMatch = false;
  }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    window.location.href = '/#/gpt';
  })
  .catch((error) => {
    const errorCode = error.code;
    errorMessage = error.message;
    console.log(errorCode, errorMessage);
    showErrorRegister = true;
    return false;
  });
};
</script>

<div class="container">
    <h1 style="font-size:20px;margin:5px;">Register</h1>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" bind:value={email}  required>

    <label for="pass"><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  name="pass" bind:value={password} required>
    <input type="password" placeholder="Confirm Password"  name="pass" bind:value={passwordConfirmation} required>
    {#if showErrorRegister}
        <span style="color:red;">{errorMessage}</span>
    {/if}
    {#if showErrorPasswordMatch}
        <span style="color:red;">password mismatch</span>
    {/if}
    <button on:click="{register}">Register</button>
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
  width: 30%;
  margin:auto;
}

@media screen and (max-width: 300px) {
    .container {
        width: 100%;
    }
}

</style>
