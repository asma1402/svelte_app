<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

  export let title;
 
  async function submitRequest() {
    dispatch('generatedText', '');
    dispatch('sendRequest');
    await fetch("https://api.openai.com/v1/completions", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + import.meta.env.VITE_API_KEY_OPEN_AI,
      },
      body: JSON.stringify({
        "model": "text-davinci-003",
        "prompt": "write an article about " + title + " in html without h1 with h2 and h3 and p",
        "max_tokens": 400,
        "temperature": 0,
      })
    })
    .then(response => response.json())
    .then(data => {
      dispatch('title', title);
      dispatch('generatedText', data.choices[0].text);
    })
    .catch(error => {
      console.log(error);
      return [];
    });
  }

</script>

<div class="wrap">
   <div class="search">
      <input type="text" bind:value={title} class="searchTerm" placeholder="Tap article title and description ...">
      <button on:click={submitRequest} class="searchButton">
        GO!
     </button>
   </div>
</div>

<style>

body{
  background: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
}

.search {
  width: 100%;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid black;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #00B4CC;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid black;
  background: black;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 10px;
  font-weight: bolder;
  font-style: italic;
}

.wrap{
  margin: auto;
}

@media only screen and (max-width: 476px) {
    .wrap {
    width: 90%;
  }
}

@media only screen and (min-width: 475px),only screen and (min-width: 800px)  {
  .wrap {
    width: 60%;
  }
}

@media only screen and (min-width: 801px) {
  .wrap {
    width: 30%;
  }
}
</style>