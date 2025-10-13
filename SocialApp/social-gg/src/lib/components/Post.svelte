<script>
    let { postData } = $props();
    // console.log(postData);
</script>

<section>
    <header>
        <img src={postData.avatar} alt={postData.username} />
        <h3>{postData.username}</h3>
    </header>
    <main>
        <p>{postData.postText}</p>
    </main>
    <footer>
        <p>{postData.postDate}</p>
        <p><em>Likes:</em> {postData.likes}</p>
    </footer>

</section>

<style>
    section {
        border: 1px solid black;
        background-color: #eee;
        border-radius: 0.8em;
        padding: 1em;
    }
    header {
        display: flex;
    }
    img {
        max-width: 3rem;
        /* float is any text is right on image */
        /* float: left;  */
        margin: 10px 15px 15px 10px;
    }
    h3 {
        margin-top: 1.5rem;
    }
    main {
        /* BOTH FLOAT AND CLEAR ARE OLD */
        /* clear is moving any text below image to NOT float, go right to image */
        /* clear: left; */
        margin-top: 1em;
    }
</style>
