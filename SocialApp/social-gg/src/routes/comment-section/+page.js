export async function load({fetch}) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const comments = await response.json();
    return {comments};
}