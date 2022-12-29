<script>
    import GeneratedTextArea from '../gpt/GeneratedTextArea.svelte'
    import Loader from '../../../lib/Loader.svelte'
    import SvelteTable from "svelte-table";
    import { userObject } from '../../../store.js';
    import { auth, articleCollection, articleDoc } from '../../../firebase.js';
    import { onMount } from 'svelte';
    import { onAuthStateChanged } from "firebase/auth";
    import { deleteDoc, getDocs, query, where } from 'Firebase/firestore/lite';
    let articles = [];
    let rows = [];
    let uidUser;
    let columns = [];
    let promise ;
    let q;
    let show = false;
    let showModal = false;
    let title= "";
    let generatedText = "";

    onMount(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                userObject.update(u => u=null);
                window.location.href = '/';
            } else {
              uidUser = user.uid;
            }
        });
      });
      promise = getData();
      async function getData()  {
        setTimeout(async () => {  
          console.log(uidUser);
         q = query(articleCollection, where("owner", "==", uidUser));
         const querySnapshot =  await getDocs(q);
        querySnapshot.forEach(article => {
          articles.push({...article.data()})
        }); 
        rows = articles;
        columns = [
          {
          key: "first_name",
          title: "TITLE",
          value: v => v.title,
          sortable: true,
          filterOptions: rows => {
            let letrs = {};
            rows.forEach(row => {
              let letr = row.title.charAt(0);
              if (letrs[letr] === undefined)
                letrs[letr] = {
                  name: `${letr.toUpperCase()}`,
                  value: letr.toLowerCase(),
                };
            });
            letrs = Object.entries(letrs)
              .sort()
              .reduce((o, [k, v]) => ((o[k] = v), o), {});
            return Object.values(letrs);
          },
          filterValue: v => v.title.charAt(0).toLowerCase(),
          headerClass: "header-table",
        },
        {
          key: "text",
          title: "Text",
          value: v => v.text,
          sortable: false,
        },
      ];
      show = true;
        }, 1000); 
    };                
    
    function viewArticle(newRow) {
      showModal = true;
      title= newRow.title;
      generatedText = newRow.text;
    }
</script>
  <h1 style="margin5px;">Generate From History</h1>
  
  {#if show}
  <ul style="float:left;margin-top:10px;">
	  {#each rows as row}
      {#if row.text != ''}
        <li><button on:click="{viewArticle(row)}"> {(row.title).toUpperCase()}</button></li>
      {/if}
    {/each}
  </ul>
    {#if showModal}
      <GeneratedTextArea bind:text={generatedText} bind:title={title} on:close="{() => showModal=!showModal}"/>  
    {/if}
  {:else}  
    <Loader/>
  {/if}