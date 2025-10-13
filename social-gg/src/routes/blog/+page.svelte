<script>
    let { data } = $props();
    console.log(data.posts);

</script>
<h2>Blogs Contents Page</h2>

<nav>
    {#each data.posts as post}
    <a href="/blog/{post.id}">{post.body}</a>
    {/each}
</nav>


<style>
    nav {
        display: flex;
        flex-direction: column;
        margin: 20px;
        gap: 10px;
    }
</style>
