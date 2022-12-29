<script>
    export let title;
    export let text; 
</script>

<div id = "TemplateId">
    <article>
        <h1 style="text-transform: uppercase;font-size:25px;">{title}</h1>
        <div style = "font-size:smaller;">{@html text}</div>
    </article>
</div>