export async function load({fetch}) {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const posts = await response.json();
    return {posts};
}