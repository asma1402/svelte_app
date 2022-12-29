<script>
    export let title;
    export let text;
</script>

<div id = "TemplateId">
    <article  style="padding:30px;background-image: linear-gradient(to bottom,#c98411, #991e00 ,#281300);color:white;">
        <h1 style = "text-transform: uppercase;font-size:25px;">{title}</h1>
        <div style = "font-size:smaller;">{@html text}</div>
    </article>
</div>
