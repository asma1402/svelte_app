<script>
    export let title;
    export let text;
</script>

<div id = "TemplateId">
    <article  style="padding:30px;background-image: linear-gradient(to bottom,#35D6ED, #C9F6FF ,white, #35D6ED,white);color:black;">
        <h1 style = "text-transform: uppercase;font-size:25px;">{title}</h1>
        <div style = "font-size:smaller;">{@html text}</div>
    </article>
</div>
