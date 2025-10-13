<!-- <h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p> -->

<script>
    import Post from "$lib/components/Post.svelte";
    let posts = [
        {
            username: "alice_01",
            avatar: "https://avatar.iran.liara.run/public",
            postDate: "2025-10-05",
            postText: "Just finished my JavaScript project!",
            likes: 23,
        },
        {
            username: "brad_dev",
            avatar: "https://avatar.iran.liara.run/public",
            postDate: "2025-10-06",
            postText: "Debugging is 90% of coding.",
            likes: 41,
        },
        {
            username: "chloe_art",
            avatar: "https://avatar.iran.liara.run/public",
            postDate: "2025-10-07",
            postText: "New artwork up on my portfolio 🎨",
            likes: 88,
        },
        {
            username: "danielTech",
            avatar: "https://avatar.iran.liara.run/public",
            postDate: "2025-10-03",
            postText: "Trying out Svelte today!",
            likes: 15,
        },
        {
            username: "ellaWrites",
            avatar: "https://avatar.iran.liara.run/public",
            postDate: "2025-10-02",
            postText: "Blog post on productivity just dropped!",
            likes: 64,
        },
    ];
</script>

<main>
    {#each posts as post}
        <Post postData={post} />
    {/each}
</main>

<style>
    :global(body) {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
</style>
