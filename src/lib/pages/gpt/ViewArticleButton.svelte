<script>
    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let disabled = true;
	function showModal() {
		dispatch('view');
	}
</script>


<div class="card">
    <button disabled={disabled} on:click="{showModal}">
        View Result
    </button>
</div>

<style>
	.card {
		padding: 1em;
		display: inline-block;
	}
</style>

