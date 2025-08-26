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

//loop through all pokemon
function displayPokeList(data) {
    const list = document.createElement('ul');

    for (const poke of data) {
        const item = document.createElement("li");
        item.innerText = poke.name;

        item.addEventListener("click", () => {
            onePokemon(poke.url)
        })

        list.appendChild(item);
    }
    document.body.appendChild(list);
}
//add event listener to each pokemon you click and fetch it
async function onePokemon(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        displayOnePokemon(data);
    } catch (error) {
        console.error(error.message);
    }
}

//make container to hold clicked pokemon
const card = document.createElement("div");
document.body.appendChild(card);

//put the right details in container
function displayOnePokemon(pokemon) {
    //const div = document.createElement("div");
    card.innerHTML = `<h2> ${pokemon.name} </h2>
    <img src ="${pokemon.sprites.front_default}" alt="${pokemon.name}">`;
    //document.body.appendChild(div);
}

getData();