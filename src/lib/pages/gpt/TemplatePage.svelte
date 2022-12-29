<script>
    import { templates, selectedTemplate } from '../../../store.js';  
    import { createEventDispatcher } from 'svelte';

 	  const dispatch = createEventDispatcher();
    let newSelectedTemplate;

    selectedTemplate.subscribe(value => {
		newSelectedTemplate = value;
	}); 
  const changeSelectedTemplate = (id) => () =>{
    selectedTemplate.update(t => t = id);
  };
  function generateView() {
		dispatch('viewTemplate');
  }
</script>

<h2>Select Template</h2>
{#each templates as card}
    <div on:click= "{changeSelectedTemplate(card.id)}" class="{newSelectedTemplate === card.id ? 'card selected' : 'card'}">
    <div class="container">
        <h4><b>{card.name}</b></h4> 
        <p>{card.description}</p> 
    </div>
    <div style="margin:auto;border: 1px dotted grey;border-radius:50%; width:10px;height: 10px;background-color:{card.bgColor};">&nbsp;</div>
    </div>
{/each}

  <button on:click="{generateView}" style="margin-top:15px;">
    Next
  </button>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 90px;
  height: 140px;
  display: inline-block;
  margin-right: 5px;
  padding: 10px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  border: 3px solid black;
  cursor: pointer;
}

.selected {
  border: 3px solid black;
}

.card {
    padding: 0px; 
}
</style>