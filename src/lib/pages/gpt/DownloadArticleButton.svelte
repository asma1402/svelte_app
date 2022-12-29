<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function chooseTemplate() {
		dispatch('chooseTemplate');
	}
</script>

<div class="card">
    <button on:click="{chooseTemplate}">
        DownLoad Article
    </button>
</div>

<style>
	.card {
		padding: 1em;
		display: inline-block;
	}
</style>