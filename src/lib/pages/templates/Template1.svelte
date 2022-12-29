<script>
    export let title;
    export let text;
    
</script>
<div id = "TemplateId">
    <article style="padding:30px;background-image: linear-gradient(to bottom, lightblue ,navy, darkblue,lightblue);color:white;">
        <h1 style = "text-transform: uppercase;font-size:25px;text-decoration:underline;">{title}</h1>
        <div style="font-size:smaller;">{@html text}</div>
    </article>
</div>
