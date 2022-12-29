<script>
    import { onMount } from 'svelte';

	onMount(() => {
		let a =  document.getElementById("TemplateId").appendChild(
            document.createElement("a")
        );
        a.download = "export.html";
        a.href = "data:text/html," + document.getElementById("TemplateId").innerHTML;
        a.innerHTML = "create file";
        a.className = "dowload-link";
	});
</script>

