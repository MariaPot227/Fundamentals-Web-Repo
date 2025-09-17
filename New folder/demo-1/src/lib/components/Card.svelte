<script>
  import ProfileImage from './ProfileImage.svelte';
  let { name, img } = $props();

  let details = ["cool", "cute", "nice"];
</script>

<div>
    <ProfileImage name={name} img={img}/>
    <section class="right-panel">
        <h3>About</h3>
        <ul>
            <li>{details[0]}</li>
            <li>{details[1]}</li>
            <li>{details[2]}</li>
        </ul>
    </section>
</div>

<style>
    div {
        border: 1px solid black;
        border-radius: 7px;
        box-shadow: 10px 5px 5px grey;
        margin: 1em;
        display: flex;
        max-width: 30vw;
        gap: 1em;
    }
    section {
        flex: 1;
    }
    

    .right-panel {
        margin-top: 1;
    }
</style>
