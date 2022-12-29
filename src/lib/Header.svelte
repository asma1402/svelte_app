<script lang="ts">
    import { signOut } from "firebase/auth";
    import { initializeApp } from "firebase/app";
    import { userObject } from '../store.js';
    import { auth } from '../firebase.js';
    import { onMount } from 'svelte';
    import { onAuthStateChanged } from "firebase/auth";

    let loginPage = false;
    let isAuthUser = false;

    onMount(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (!authUser) {
                userObject.update(u => u=null);
                isAuthUser= false;
            } else {
                isAuthUser = true;
            }
        });
    });

    const logout = () => {
    signOut(auth)
    .then(() => {
        userObject.update(u => u=null);
        window.location.href = '/';
    })
    .catch((error) => {
    });
    }
 
</script>

<header>

    <div class="header-div">
        <a href="/" class="logo">
            <img src="cat.png" height="60" width="60" alt="cat logo">
        </a>
        <nav class="links">
            {#if isAuthUser}
                <a on:click="{logout}" class="a-link">Logout</a>
                <a href="/#/gpt" class="a-link">GPT-3</a>
                <a href="/#/search-history" class="a-link">Search history</a>
            {:else}
                {#if !loginPage}
                    <a href="/" class="a-link">Login</a>
                {/if}
                <a href="/#/register" class="a-link">Register</a> 
            {/if}
                <a href="/#/about" class="a-link">About</a>
                <a href="/github" class="a-link">GitHub</a> 
        </nav>
</div>

</header>

<style>
    .header-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid grey;
    }
    .links {
        order: 1;
    }
    .a-link {
        font-weight : bold;
        color: black;
        padding-right: 20px;
    }
</style>