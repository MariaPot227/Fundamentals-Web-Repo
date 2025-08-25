async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=20";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        displayPokeList(data.results);
    } catch (error) {
        console.error(error.message);
    }
}

function displayPokeList(data) {
    for (const poke of data) {
        const div = document.createElement('div');
        div.innerHTML = `<a href="${poke.url}">${poke.name}</a>`;
        document.body.appendChild(div);

    }
}

getData();