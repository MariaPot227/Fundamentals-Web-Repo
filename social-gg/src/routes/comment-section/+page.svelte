<script>
    import Comment from "$lib/components/Comment.svelte";
    let { data } = $props();
    console.log(data.comments);

</script>

{#each data.comments as comment}
<Comment commentData={comment} />
{/each}