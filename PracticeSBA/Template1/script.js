const book = {
    "id": 42,
    "title": "The Hitchhiker's Guide to the Galaxy",
    "author": "Douglas Adams",
    "year": 1979,
    "genres": ["Science Fiction", "Comedy", "Adventure"],
    "pages": 224,
    "language": "English",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81XSN3hA5gL.jpg"
}

const card = document.getElementById("book-card")

function createCards(book) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${book.imageUrl}">
            <h1>${book.title}</h1>
            <h2>${book.author}</h2>
            <p>${book.year}</p>
            <p>${book.genres}</p>
            <p>${book.pages}</p>
            <p>${book.language}</p>
            `;

    return card;

}

const container = document.getElementById("cards");
books.forEach(b => container.appendChild(createBookCard(b)));