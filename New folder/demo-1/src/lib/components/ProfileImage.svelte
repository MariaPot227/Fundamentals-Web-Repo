<script>
    let { name, img = "https://placedog.net/500?random" } = $props();
</script>

<section class="left-panel">
    <h2>{name}</h2>
    <img src="{img}" alt="{name}" />
</section>

<style>
    div {
        border: 1px solid black;
        box-shadow: 10px 5px 5px grey;
        display: flex;
        flex-direction: column;
        max-width: 400px;
    }
    img {
        max-width: 100%;
    }
    section {
        flex: 1;
    }
</style>
