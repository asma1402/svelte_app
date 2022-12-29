<div class="box">
  <div class="container">
    <span class="circle"></span>
    <span class="circle"></span>
  </div>
</div>

<style>
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .box{
        margin-left: 47%;
        display: block;
        justify-content: center;
        align-items: center;
        padding-top: 1em;
    }

    .container{
        display: flex;
        position: relative;
    }

    .circle{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: black;
        animation: move 500ms linear 0ms infinite;
    }

    .circle:first-child{
        position: absolute;
        top:0;
        left:0;
        animation: grow 500ms linear 0ms infinite;
    }

    @keyframes grow {
        from {transform: scale(0,0); opacity: 0;}
        to {transform: scale(1,1); opacity: 1;}
    }

    @keyframes move {
        from {transform: translateX(0px)}
        to {transform: translateX(20px)}
    }
</style>