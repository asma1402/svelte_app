<script lang="ts">
  import svelteLogo from '../../../assets/svelte.svg'
  import Title from './Title.svelte'
  import SearchBar from './SearchBar.svelte'
  import ViewArticleButton from './ViewArticleButton.svelte'
  import GeneratedTextArea from './GeneratedTextArea.svelte'
  import Loader from '../../../lib/Loader.svelte'
  import { userObject, uid } from '../../../store.js';
  import { onMount } from 'svelte';
  import { onAuthStateChanged } from "firebase/auth";
  import { auth } from '../../../firebase.js';
  import { addDoc } from 'firebase/firestore/lite';
  import { articleCollection } from '../../../firebase.js';
  
  onMount(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                userObject.update(u => u=null);
                window.location.href = '/';
            } else {
              uid.update(u => u=user.uid);
            }
        });
  });
  
  let show = false;
  let generatedText = "";
  let title;
  let loading = false;
  let uidUser;
  async function saveArticle(titleArticle, textArticle, ownerArticle) {
    await addDoc(articleCollection, {title:titleArticle,text:textArticle, owner:ownerArticle});
  } 
  uid.subscribe(value => {
	  uidUser = value;
  });
  async function viewText(event) {
    generatedText = event.detail;
    loading = false;
    await saveArticle(title, generatedText, uidUser);
  }
 
</script>

<main>
  <Title/>
  <SearchBar  on:sendRequest="{() => loading=!loading}" bind:title={title} on:generatedText="{viewText}"/>
  <div class:hide={!loading}>
    <Loader/>
  </div>
  <ViewArticleButton disabled={generatedText == ""}  on:view="{() => show=!show}" />
  {#if show}
    <GeneratedTextArea bind:text={generatedText} bind:title={title} on:close="{() => show=!show}"/>
  {/if}
</main>

<style>
  .hide {
    visibility: hidden;
  }
</style>