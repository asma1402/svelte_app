<script>
	import { createEventDispatcher } from 'svelte';
	import DownloadArticleButton from './DownloadArticleButton.svelte';
	import TemplatePage from './TemplatePage.svelte';
	import Template1 from '../templates/Template1.svelte';
	import Template2 from '../templates/Template2.svelte';
	import Template3 from '../templates/Template3.svelte';
	import Template4 from '../templates/Template4.svelte';
	import Template5 from '../templates/Template5.svelte';
	import CreateFileButton from './CreateFileButton.svelte';
	import { templates, selectedTemplate } from '../../../store.js';  

	let template;
	let componantName;;
  	const components = { Template1, Template2, Template3, Template4, Template5 }

    selectedTemplate.subscribe(value => {
		template = value;
		componantName = 'Template' + template;
	}); 
	const dispatch = createEventDispatcher();
    export let text="";
	export let title="";
	let modal;
	let showTemplates = false;
	let showView = false;

    function close () {
        dispatch('close');
    }
	
</script>

<div class="modal-background" on:click={close}></div>

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<button on:click={close}> X </button>
	{#if !showTemplates && !showView}
		<div style = "margin-top:40px;">
		<span style = "font-size: 10px;display:block;border-radius:5px; color:white;background-color:black;">This is HTML! scroll down to preview </span>
		<slot name="header">{title.toUpperCase()}</slot>
		<hr>
		<slot>{text}</slot>
		<hr>
		</div>
		<DownloadArticleButton on:chooseTemplate={()=>showTemplates = true}/>
	{:else if showTemplates && !showView}
		<TemplatePage on:viewTemplate={()=> showView=true}/>
	{:else if showView}
		<span style = "font-size: 13px;display:block; color:red;background-color:black;">This is a preview, scroll down to download </span>
		<svelte:component this={components[componantName]} bind:title="{title}" bind:text="{text}"/>
		<CreateFileButton />
	{/if}
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		position: absolute;
		left: 50%;
		top: 50%;
		width: calc(100vw - 4em);
		max-width: 32em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.2em;
		background: white;
	}

	button {
		display: block;
		float: right;
		opacity: 0.7;
	}
</style>